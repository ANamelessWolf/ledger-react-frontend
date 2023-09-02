/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import HttpUtils, {
  GET,
  IProcessingRequest,
  LoadingStateType,
} from "../../utils/Http";
import CONST from "../../data/constants";
import SpinningLoader from "../../components/UI/common/SpinningLoader";
import UiUtils from "../../utils/UiUtils";
import { toast } from "react-toastify";
import CreditCardModel, { ICreditCardView } from "./CreditCardModel";
import IndexTable from "../../components/UI/common/IndexTable";
import MESSAGES from "../../data/messages";

function CreditCardIndex() {
  const [isProccessing, setIsProccesing] = useState<IProcessingRequest>({
    state: LoadingStateType.UNDEFINED,
    message: "",
  });
  const [viewData, setViewData] = useState<ICreditCardView[]>(
    CreditCardModel.empty
  );

  const fetchHandler = (status: number, data: any) => {
    const filteredData = data.filter((item) => item.name !== "Cash Wallet");
    setViewData(filteredData);
    setIsProccesing(HttpUtils.LOADING_SUCCEED_STATE);
    toast.info("Financing data loaded");
  };

  const errorHandler = (message: string) => {
    setIsProccesing(HttpUtils.LOADING_FAIL_STATE);
    toast.info("Error loading financing data");
  };

  const refresh = () => {
    setIsProccesing(HttpUtils.LOADING_STATE);
    GET(CONST.END_POINTS.CREDIT_CARD, fetchHandler, undefined, errorHandler);
  };

  useEffect(() => {
    refresh();
  }, []);

  return UiUtils.IsProccessing(isProccessing.state) ? (
    <SpinningLoader message={isProccessing.message} />
  ) : (
    <IndexTable
      header={MESSAGES.SECTION_CREDIT_CARD}
      blueprint={CreditCardModel.index}
      data={viewData}
      path={CreditCardModel.endPoint}
      refresh={refresh}
    />
  );
}

export default CreditCardIndex;
