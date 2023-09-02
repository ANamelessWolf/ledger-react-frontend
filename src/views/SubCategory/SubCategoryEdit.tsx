import React, { useEffect, useState } from "react";
import UiUtils from "../../utils/UiUtils";
import SpinningLoader from "../../components/UI/common/SpinningLoader";
import HttpUtils, {
  GET,
  IProcessingRequest,
  LoadingStateType,
} from "../../utils/Http";
import CONST from "../../data/constants";
import { toast } from "react-toastify";
import SubCategoryModel, { ISubCategoryView } from "./SubCategoryModel";
import { useParams } from "react-router-dom";
import EditForm from "../../components/UI/forms/EditForm";


function SubCategoryEdit() {
  const urlParams = useParams();
  const [id, setId] = useState(HttpUtils.GET_VALID_ID(urlParams.id));

  const [isProccessing, setIsProccesing] = useState<IProcessingRequest>({
    state: LoadingStateType.UNDEFINED,
    message: "",
  });
  const [viewData, setViewData] = useState<ISubCategoryView>(
    SubCategoryModel.empty[0]
  );

  const fetchHandler = (status: number, data: any) => {
    setViewData(data);
    setIsProccesing(HttpUtils.LOADING_SUCCEED_STATE);
    toast.info("Subcategory data loaded");
  };

  const errorHandler = (message: string) => {
    setIsProccesing(HttpUtils.LOADING_FAIL_STATE);
    toast.info("Error loading subcategory data");
  };

  useEffect(() => {
    if (id !== undefined && id > 0) {
      setIsProccesing(HttpUtils.LOADING_STATE);
      GET(CONST.END_POINTS.SUBCATEGORY, fetchHandler, id, errorHandler);
    } else setIsProccesing(HttpUtils.NO_LOADING);
  }, [id]);

  return UiUtils.IsProccessing(isProccessing.state) ? (
    <SpinningLoader message={isProccessing.message} />
  ) : (
    <>
      <EditForm
        blueprint={SubCategoryModel.edit}
        data={viewData}
        route={`/${CONST.TABLE_NAMES.SUBCATEGORY}`}
      />
    </>
  );
}

export default SubCategoryEdit;
