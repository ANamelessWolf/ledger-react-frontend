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
import VendorModel, { IVendorView } from "./VendorModel";
import IndexTable from "../../components/UI/common/IndexTable";
import MESSAGES from "../../data/messages";

function VendorIndex() {
  const [isProccessing, setIsProccesing] = useState<IProcessingRequest>({
    state: LoadingStateType.UNDEFINED,
    message: "",
  });
  const [viewData, setViewData] = useState<IVendorView[]>(
    VendorModel.empty
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

  const refresh = () => {
    setIsProccesing(HttpUtils.LOADING_STATE);
    GET(CONST.END_POINTS.VENDOR, fetchHandler, undefined, errorHandler);
  };

  useEffect(() => {
    refresh();
  }, []);

  return UiUtils.IsProccessing(isProccessing.state) ? (
    <SpinningLoader message={isProccessing.message} />
  ) : (
    <IndexTable
      header={MESSAGES.SECTION_VENDOR}
      blueprint={VendorModel.index}
      data={viewData}
      path={VendorModel.endPoint}
      refresh={refresh}
    />
  );
}

export default VendorIndex;
