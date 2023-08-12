import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpinningLoader from "../../components/UI/common/SpinningLoader";
import UiUtils from "../../utils/UiUtils";
import CONST from "../../data/constants";
import HttpUtils, {
  GET,
  IProcessingRequest,
  LoadingStateType,
} from "../../utils/Http";
import { toast } from "react-toastify";
import FinancingEntityModel, {
  IFinancingEntityView,
} from "./FinancingEntityModel";
import DisabledForm from "../../components/UI/forms/DisabledForm";

function FinancingEntityShow() {
  const urlParams = useParams();
  const [id, setId] = useState(HttpUtils.GET_VALID_ID(urlParams.id));

  const [isProccessing, setIsProccesing] = useState<IProcessingRequest>({
    state: LoadingStateType.UNDEFINED,
    message: "",
  });
  const [viewData, setViewData] = useState<IFinancingEntityView>(
    FinancingEntityModel.empty[0]
  );

  const fetchHandler = (status: number, data: any) => {
    setViewData(data);
    setIsProccesing(HttpUtils.LOADING_SUCCEED_STATE);
    toast.info("Financing data loaded");
  };

  const errorHandler = (message: string) => {
    setIsProccesing(HttpUtils.LOADING_FAIL_STATE);
    toast.info("Error loading financing data");
  };

  useEffect(() => {
    if (id !== undefined) {
      setIsProccesing(HttpUtils.LOADING_STATE);
      GET(CONST.END_POINTS.FINANCIAL_ENTITY, fetchHandler, id, errorHandler);
    }
  }, []);

  return UiUtils.IsProccessing(isProccessing.state) ? (
    <SpinningLoader message={isProccessing.message} />
  ) : (
    <DisabledForm blueprint={FinancingEntityModel.show} data={viewData} />
  );
}

export default FinancingEntityShow;
