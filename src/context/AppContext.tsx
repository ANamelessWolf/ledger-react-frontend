import React, { createContext, useEffect, useState } from "react";
import { IAppContext, ICatalogueItem } from "./ICatalogue";
import { GET } from "../utils/Http";
import CONST from "../data/constants";

const AppContext = createContext<IAppContext>({
  catalogue: {
    FinancingType: [],
  },
});

//Create Provider
export const AppProvider = (props) => {
  const [financingType, setFinancingType] = useState<ICatalogueItem[]>([]);

  const fetchHandler = (status: number, data: any) => {
    const financingTypes = data.financingEntityType.map((item) => {
      return { Id: item.id, Description: item.description };
    });
    setFinancingType(financingTypes);
  };

  useEffect(() => {
    GET(CONST.END_POINTS.CATALOGUE, fetchHandler);
  }, []);

  return (
    <AppContext.Provider
      value={{
        catalogue: {
          FinancingType: financingType,
        },
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
