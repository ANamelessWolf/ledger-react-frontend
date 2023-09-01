import React, { useEffect, useState, useContext } from "react";
import UiUtils from "../../utils/UiUtils";
import SpinningLoader from "../../components/UI/common/SpinningLoader";
import HttpUtils, {
  GET,
  IProcessingRequest,
  LoadingStateType,
} from "../../utils/Http";
import { toast } from "react-toastify";
import CreditCardModel, { ICreditCardView } from "./CreditCardModel";
import CreditCard, {
  ICreditCard,
} from "../../components/CreditCard/CreditCard";
import { useParams } from "react-router-dom";
import CONST from "../../data/constants";
import AppContext from "../../context/AppContext";
import DisabledForm from "../../components/UI/forms/DisabledForm";

function CreditCardShow() {
  const urlParams = useParams();
  const [id, setId] = useState(HttpUtils.GET_VALID_ID(urlParams.id));

  const [isProccessing, setIsProccesing] = useState<IProcessingRequest>({
    state: LoadingStateType.UNDEFINED,
    message: "",
  });
  const [viewData, setViewData] = useState<ICreditCardView>(
    CreditCardModel.empty[0]
  );
  const context = useContext(AppContext);

  const [cCard, setCCard] = useState<ICreditCard>({
    EndingCardNumber: "",
    ExpirationDate: "",
    color: "",
    CardType: undefined,
    FinancingEntity: undefined,
    CardHolder: undefined,
  });

  const fetchHandler = (status: number, data: any) => {
    setViewData(data);
    setCCard(() => {
      return {
        EndingCardNumber: data.endingCardNumber,
        ExpirationDate: data.expirationDate,
        color: data.color,
        CardType: data.cardType,
        FinancingEntity: data.name,
        CardHolder: context.user.FullName,
      };
    });
    setIsProccesing(HttpUtils.LOADING_SUCCEED_STATE);
    toast.info("Credit card data loaded");
  };

  const errorHandler = (message: string) => {
    setIsProccesing(HttpUtils.LOADING_FAIL_STATE);
    toast.info("Error loading credit card data");
  };

  useEffect(() => {
    if (id !== undefined) {
      setIsProccesing(HttpUtils.LOADING_STATE);
      GET(CONST.END_POINTS.CREDIT_CARD, fetchHandler, id, errorHandler);
    }
  }, []);

  return UiUtils.IsProccessing(isProccessing.state) ? (
    <SpinningLoader message={isProccessing.message} />
  ) : (
    <>
      <CreditCard
        EndingCardNumber={cCard.EndingCardNumber}
        ExpirationDate={cCard.ExpirationDate}
        color={cCard.color}
        CardType={cCard.CardType}
        FinancingEntity={cCard.FinancingEntity}
        CardHolder={cCard.CardHolder}
      />
      <DisabledForm blueprint={CreditCardModel.show} data={viewData} />
    </>
  );
}

export default CreditCardShow;
