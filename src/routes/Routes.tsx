import React from "react";
import CONST from "../data/constants";
import { IRoute } from "./IRoute";

import FinancingEntityIndex from "../views/FinancingEntity/FinancingEntityIndex";
import FinancingEntityEdit from "../views/FinancingEntity/FinancingEntityEdit";
import FinancingEntityShow from "../views/FinancingEntity/FinancingEntityShow";

const FinancingEntity: IRoute[] = [
    { path: CONST.TABLE_NAMES.FINANCIAL_ENTITY, element: <FinancingEntityIndex/> },
    { path: `${CONST.TABLE_NAMES.FINANCIAL_ENTITY}/create`, element: <FinancingEntityEdit/> },
    { path: `${CONST.TABLE_NAMES.FINANCIAL_ENTITY}/edit/:id`, element: <FinancingEntityEdit/> },
    { path: `${CONST.TABLE_NAMES.FINANCIAL_ENTITY}/:id`, element: <FinancingEntityShow/> },
];
export default FinancingEntity;
