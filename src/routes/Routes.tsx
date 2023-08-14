import React from "react";
import CONST from "../data/constants";
import { IRoute } from "./IRoute";

import FinancingEntityIndex from "../views/FinancingEntity/FinancingEntityIndex";
import FinancingEntityEdit from "../views/FinancingEntity/FinancingEntityEdit";
import FinancingEntityShow from "../views/FinancingEntity/FinancingEntityShow";
import CreditCardIndex from "../views/CreditCard/CreditCardIndex";
import CreditCardEdit from "../views/CreditCard/CreditCardEdit";
import CreditCardShow from "../views/CreditCard/CreditCardShow";

export const FinancingEntityRoutes: IRoute[] = [
    { path: CONST.TABLE_NAMES.FINANCIAL_ENTITY, element: <FinancingEntityIndex/> },
    { path: `${CONST.TABLE_NAMES.FINANCIAL_ENTITY}/create`, element: <FinancingEntityEdit/> },
    { path: `${CONST.TABLE_NAMES.FINANCIAL_ENTITY}/edit/:id`, element: <FinancingEntityEdit/> },
    { path: `${CONST.TABLE_NAMES.FINANCIAL_ENTITY}/:id`, element: <FinancingEntityShow/> },
];

export const CreditCardRoutes: IRoute[] = [
    { path: CONST.TABLE_NAMES.CREDIT_CARD, element: <CreditCardIndex/> },
    { path: `${CONST.TABLE_NAMES.CREDIT_CARD}/create`, element: <CreditCardEdit/> },
    { path: `${CONST.TABLE_NAMES.CREDIT_CARD}/edit/:id`, element: <CreditCardEdit/> },
    { path: `${CONST.TABLE_NAMES.CREDIT_CARD}/:id`, element: <CreditCardShow/> },
];
