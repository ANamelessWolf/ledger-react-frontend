import React from "react";
import CONST from "../data/constants";
import { IRoute } from "./IRoute";

import FinancingEntityIndex from "../views/FinancingEntity/FinancingEntityIndex";
import FinancingEntityEdit from "../views/FinancingEntity/FinancingEntityEdit";
import FinancingEntityShow from "../views/FinancingEntity/FinancingEntityShow";
import CreditCardIndex from "../views/CreditCard/CreditCardIndex";
import CreditCardEdit from "../views/CreditCard/CreditCardEdit";
import CreditCardShow from "../views/CreditCard/CreditCardShow";
import VendorIndex from "../views/Vendor/VendorIndex";
import VendorEdit from "../views/Vendor/VendorEdit";
import CategoryIndex from "../views/Category/CategoryIndex";
import CategoryEdit from "../views/Category/CategoryEdit";
import SubCategoryIndex from "../views/SubCategory/SubCategoryIndex";
import SubCategoryEdit from "../views/SubCategory/SubCategoryEdit";

export const FinancingEntityRoutes: IRoute[] = [
  {
    path: CONST.TABLE_NAMES.FINANCIAL_ENTITY,
    element: <FinancingEntityIndex />,
  },
  {
    path: `${CONST.TABLE_NAMES.FINANCIAL_ENTITY}/create`,
    element: <FinancingEntityEdit />,
  },
  {
    path: `${CONST.TABLE_NAMES.FINANCIAL_ENTITY}/edit/:id`,
    element: <FinancingEntityEdit />,
  },
  {
    path: `${CONST.TABLE_NAMES.FINANCIAL_ENTITY}/:id`,
    element: <FinancingEntityShow />,
  },
];

export const CreditCardRoutes: IRoute[] = [
  { path: CONST.TABLE_NAMES.CREDIT_CARD, element: <CreditCardIndex /> },
  {
    path: `${CONST.TABLE_NAMES.CREDIT_CARD}/create`,
    element: <CreditCardEdit />,
  },
  {
    path: `${CONST.TABLE_NAMES.CREDIT_CARD}/edit/:id`,
    element: <CreditCardEdit />,
  },
  { path: `${CONST.TABLE_NAMES.CREDIT_CARD}/:id`, element: <CreditCardShow /> },
];

export const VendorRoutes: IRoute[] = [
  { path: CONST.TABLE_NAMES.VENDOR, element: <VendorIndex /> },
  { path: `${CONST.TABLE_NAMES.VENDOR}/create`, element: <VendorEdit /> },
  { path: `${CONST.TABLE_NAMES.VENDOR}/edit/:id`, element: <VendorEdit /> },
];

export const CategoryRoutes: IRoute[] = [
  { path: CONST.TABLE_NAMES.CATEGORY, element: <CategoryIndex /> },
  { path: `${CONST.TABLE_NAMES.CATEGORY}/create`, element: <CategoryEdit /> },
  { path: `${CONST.TABLE_NAMES.CATEGORY}/edit/:id`, element: <CategoryEdit /> },
];

export const SubCategoryRoutes: IRoute[] = [
  { path: CONST.TABLE_NAMES.SUBCATEGORY, element: <SubCategoryIndex /> },
  {
    path: `${CONST.TABLE_NAMES.SUBCATEGORY}/create`,
    element: <SubCategoryEdit />,
  },
  {
    path: `${CONST.TABLE_NAMES.SUBCATEGORY}/edit/:id`,
    element: <SubCategoryEdit />,
  },
];
