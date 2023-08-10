const TABLE_NAMES = {
  FINANCIAL_ENTITY: "financing_entity",
};

const END_POINTS = {
  FINANCIAL_ENTITY: "FinancingEntity",
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
