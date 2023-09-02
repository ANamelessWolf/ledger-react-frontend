const TABLE_NAMES = {
  FINANCIAL_ENTITY: "financing_entity",
  CREDIT_CARD: "credit_card",
  VENDOR: "vendor",
  CATEGORY:"category",
  SUBCATEGORY:"subcategory"
};

const END_POINTS = {
  CATALOGUE:"Catalogue",
  FINANCIAL_ENTITY: "FinancingEntity",
  CREDIT_CARD:"CreditCard",
  VENDOR:"Vendor",
  CATEGORY:"Category",
  SUBCATEGORY:"SubCategory"
};

const API_URL =
  process.env.REACT_APP_API_ENDPOINT || "https://localhost:7065/api";

const CONST = {
  TABLE_NAMES: TABLE_NAMES,
  API_URL: API_URL,
  END_POINTS: END_POINTS,
  SITE: "https://localhost:7065"
};

export default CONST;
