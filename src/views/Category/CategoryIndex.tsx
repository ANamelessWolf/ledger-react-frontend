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
import CategoryModel, { ICategoryView } from "./CategoryModel";
import IndexTable from "../../components/UI/common/IndexTable";
import MESSAGES from "../../data/messages";

function CategoryIndex() {
  const [isProccessing, setIsProccesing] = useState<IProcessingRequest>({
    state: LoadingStateType.UNDEFINED,
    message: "",
  });
  const [viewData, setViewData] = useState<ICategoryView[]>(
    CategoryModel.empty
  );

  const fetchHandler = (status: number, data: any) => {
    setViewData(data);
    setIsProccesing(HttpUtils.LOADING_SUCCEED_STATE);
    toast.info("Catgeory data loaded");
  };

  const errorHandler = (message: string) => {
    setIsProccesing(HttpUtils.LOADING_FAIL_STATE);
    toast.info("Error loading category data");
  };

  const refresh = () => {
    setIsProccesing(HttpUtils.LOADING_STATE);
    GET(CONST.END_POINTS.CATEGORY, fetchHandler, undefined, errorHandler);
  };

  useEffect(() => {
    refresh();
  }, []);

  return UiUtils.IsProccessing(isProccessing.state) ? (
    <SpinningLoader message={isProccessing.message} />
  ) : (
    <IndexTable
      header={MESSAGES.SECTION_CATEGORY}
      blueprint={CategoryModel.index}
      data={viewData}
      path={CategoryModel.endPoint}
      refresh={refresh}
    />
  );
}

export default CategoryIndex;
