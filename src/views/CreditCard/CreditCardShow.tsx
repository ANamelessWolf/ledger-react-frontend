import React, { useEffect, useState } from "react";
import UiUtils from "../../utils/UiUtils";
import SpinningLoader from "../../components/UI/common/SpinningLoader";
import HttpUtils, { IProcessingRequest, LoadingStateType } from "../../utils/Http";
import { toast } from "react-toastify";
import CreditCardModel, { ICreditCardView } from "./CreditCardModel";
import CreditCard from "../../components/CreditCard/CreditCard";

function CreditCardShow() {
    const [isProccessing, setIsProccesing] = useState<IProcessingRequest>({
      state: LoadingStateType.UNDEFINED,
      message: "",
    });
    const [viewData, setViewData] = useState<ICreditCardView[]>(
      CreditCardModel.empty
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
      setIsProccesing(HttpUtils.LOADING_SUCCEED_STATE);
    };
  
    useEffect(() => {
      refresh();
    }, []);
  
    return UiUtils.IsProccessing(isProccessing.state) ? (
      <SpinningLoader message={isProccessing.message} />
    ) : (
      <CreditCard  EndingCardNumber="1003" ExpirationDate="10/25" color="blue" CardType="MASTERCARD" FinancingEntity="BBVA" CardHolder="Miguel Angel Alanis Montes"/>
    );
  }
  
  export default CreditCardShow;
  