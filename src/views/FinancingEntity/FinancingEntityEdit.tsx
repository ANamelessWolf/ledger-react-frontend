/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HttpUtils, {
  GET,
  IProcessingRequest,
  LoadingStateType,
} from "../../utils/Http";
import FinancingEntityModel, {
  IFinancingEntityView,
} from "./FinancingEntityModel";
import { toast } from "react-toastify";
import UiUtils from "../../utils/UiUtils";
import SpinningLoader from "../../components/UI/common/SpinningLoader";
import CONST from "../../data/constants";
import EditForm from "../../components/UI/forms/EditForm";

function FinancingEntityEdit() {
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
    if (id !== undefined && id > 0) {
      setIsProccesing(HttpUtils.LOADING_STATE);
      GET(CONST.END_POINTS.FINANCIAL_ENTITY, fetchHandler, id, errorHandler);
    } else setIsProccesing(HttpUtils.NO_LOADING);
  }, [id]);

  return UiUtils.IsProccessing(isProccessing.state) ? (
    <SpinningLoader message={isProccessing.message} />
  ) : (
    <EditForm
      blueprint={FinancingEntityModel.edit}
      data={viewData}
      route={`/${CONST.TABLE_NAMES.FINANCIAL_ENTITY}`}
    />
  );
}

export default FinancingEntityEdit;
