import React, { useEffect, useState } from "react";
import { GET, IProcessingRequest, LoadingStateType } from "../../utils/Http";
import CONST from "../../data/constants";
import SpinningLoader from "../../components/UI/common/SpinningLoader";
import UiUtils from "../../utils/UiUtils";
import { toast } from "react-toastify";
import FinancingEntityModel, { IFinancingEntityView } from "./FinancingEntityModel";
import IndexTable from "../../components/UI/common/IndexTable";

function FinancingEntityIndex() {
  const [isProccessing, setIsProccesing] = useState<IProcessingRequest>({
    state: LoadingStateType.UNDEFINED,
    message: "",
  });
  const [viewData, setViewData] = useState<IFinancingEntityView[]>(FinancingEntityModel.empty)

  useEffect(() => {
    GET(CONST.END_POINTS.FINANCIAL_ENTITY, setIsProccesing, (status, data) => {
      setViewData(data);
      toast.info("Financing data loaded");
    });
  }, []);

  return UiUtils.IsProccessing(isProccessing.state) ? (
    <SpinningLoader message={isProccessing.message} />
  ) : (
    <IndexTable blueprint={FinancingEntityModel.index} data={viewData} />
  );
}

export default FinancingEntityIndex;
