import React, { useContext, useEffect, useState } from "react";
import UiUtils from "../../utils/UiUtils";
import SpinningLoader from "../../components/UI/common/SpinningLoader";
import HttpUtils, {
  GET,
  IProcessingRequest,
  LoadingStateType,
} from "../../utils/Http";
import CONST from "../../data/constants";
import { toast } from "react-toastify";
import CreditCardModel, { ICreditCardView } from "./CreditCardModel";
import { useParams } from "react-router-dom";
import EditForm from "../../components/UI/forms/EditForm";
import CreditCard, {
  ICreditCard,
} from "../../components/CreditCard/CreditCard";
import AppContext from "../../context/AppContext";

function CreditCardEdit() {
  const urlParams = useParams();
  const [id, setId] = useState(HttpUtils.GET_VALID_ID(urlParams.id));
  const context = useContext(AppContext);

  const [isProccessing, setIsProccesing] = useState<IProcessingRequest>({
    state: LoadingStateType.UNDEFINED,
    message: "",
  });
  const [viewData, setViewData] = useState<ICreditCardView>(
    CreditCardModel.empty[0]
  );

  const [cCard, setCCard] = useState<ICreditCard>({
    EndingCardNumber: "",
    ExpirationDate: "",
    color: "",
    CardType: undefined,
    FinancingEntity: undefined,
    CardHolder: undefined,
  });

  const updateCardView = (data: any) => {
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
  };

  const fetchHandler = (status: number, data: any) => {
    setViewData(data);
    updateCardView(data);
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
      GET(CONST.END_POINTS.CREDIT_CARD, fetchHandler, id, errorHandler);
    } else setIsProccesing(HttpUtils.NO_LOADING);
  }, [id]);

  const onCCardChanged = (data: any) => {
    // const result = context.catalogue.CardType.filter((item)=> item.Id === data.cardTypeId);
    updateCardView(data);
  };

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
      <EditForm
        onChanged={onCCardChanged}
        blueprint={CreditCardModel.edit}
        data={viewData}
        route={`/${CONST.TABLE_NAMES.CREDIT_CARD}`}
      />
    </>
  );
}

export default CreditCardEdit;
