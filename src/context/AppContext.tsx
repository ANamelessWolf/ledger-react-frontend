import React, { createContext, useEffect, useState } from "react";
import { IAppContext, ICatalogueItem } from "./ICatalogue";
import { GET } from "../utils/Http";
import CONST from "../data/constants";

const AppContext = createContext<IAppContext>({
  catalogue: {
    FinancingType: [],
    FinancingEntity: [],
    CardType: [],
    CreditCard: [],
  },
});

//Create Provider
export const AppProvider = (props) => {
  const [financingType, setFinancingType] = useState<ICatalogueItem[]>([]);
  const [financingEntity, setFinancingEntity] = useState<ICatalogueItem[]>([]);
  const [cardType, setCardType] = useState<ICatalogueItem[]>([]);
  const [creditCard, setCreditCard] = useState<ICatalogueItem[]>([]);

  const fetchHandler = (status: number, data: any) => {
    const financingTypes = data.financingEntityType.map((item) => {
      return { Id: item.id, Description: item.description };
    });
    setFinancingType(financingTypes);

    const financingEntity = data.financingEntity.map((item) => {
      return { Id: item.id, Description: item.description };
    });
    setFinancingEntity(financingEntity);

    const cardType = data.cardType.map((item) => {
      return { Id: item.id, Description: item.description };
    });
    setCardType(cardType);

    const creditCard = data.creditCard.map((item) => {
      return { Id: item.id, Description: item.description };
    });
    setCreditCard(creditCard);
  };

  useEffect(() => {
    GET(CONST.END_POINTS.CATALOGUE, fetchHandler);
  }, []);

  return (
    <AppContext.Provider
      value={{
        catalogue: {
          FinancingType: financingType,
          FinancingEntity: financingEntity,
          CardType: cardType,
          CreditCard: creditCard,
        },
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
