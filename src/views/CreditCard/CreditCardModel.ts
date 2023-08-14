import { ActionType } from "../../components/UI/enums/ActionType";
import { ButtonType } from "../../components/UI/enums/ButtonType";
import { ControlType } from "../../components/UI/enums/ControlType";
import { DataType } from "../../components/UI/enums/DataType";
import { ViewType } from "../../components/UI/enums/ViewType";
import UiUtils from "../../utils/UiUtils";
import CONST from "../../data/constants";

export interface ICreditCardView {
  Id: number;
  FinancingEntityId: number;
  Name: string;
  ShortName: string;
  CreditValue: number;
  Credit: string;
  UsedCreditValue: number;
  UsedCredit: string;
  ClosingDay: number;
  DueDay: number;
  ExpirationDate: string;
  CardType: string;
  CardTypeId: number;
  Color: string;
  EndingCardNumber: string;
}

const FIELD_ID = "id";
const FIELD_FINANCING_ENT_ID = "financingEntityId";
const FIELD_NAME = "name";
const FIELD_SHORT_NAME = "shortName";
const FIELD_CREDIT_VALUE = "creditValue";
const FIELD_CREDIT = "credit";
const FIELD_USEDCREDIT_VALUE = "usedCreditValue";
const FIELD_USEDCREDIT = "usedCredit";
const FIELD_CLOSING_DAY = "closingDay";
const FIELD_DUE_DAY = "dueDay";
const FIELD_EXP_DATE = "expirationDate";
const FIELD_CARD_TYPE = "cardType";
const FIELD_CARD_TYPE_ID = "cardTypeId";
const FIELD_COLOR = "color";
const FIELD_ENDING_CARD_NUMBER = "endingCardNumber";

const HEADER = "Tarjetas de credito";

const FIELDS = [
  FIELD_ID,
  FIELD_FINANCING_ENT_ID,
  FIELD_NAME,
  FIELD_SHORT_NAME,
  FIELD_CREDIT_VALUE,
  FIELD_CREDIT,
  FIELD_USEDCREDIT_VALUE,
  FIELD_USEDCREDIT,
  FIELD_CLOSING_DAY,
  FIELD_DUE_DAY,
  FIELD_EXP_DATE,
  FIELD_CARD_TYPE,
  FIELD_CARD_TYPE_ID,
  FIELD_COLOR,
  FIELD_ENDING_CARD_NUMBER,
];
const HEADERS = [
  "ID",
  "Entidad Financiera",
  "Nombre",
  "Nombre",
  "Credito",
  "Credito",
  "Credito en uso",
  "Credito en uso",
  "Día de corte",
  "Limite de pago",
  "Fecha de expiración",
  "Tipo Tarjeta",
  "Tipo Tarjeta",
  "Color",
  "Terminación",
];

const FIELD_MAP = UiUtils.ToObject(FIELDS, HEADERS, "Actions");

const CreditCardModel = {
  endPoint: CONST.END_POINTS.CREDIT_CARD,
  empty: [
    {
      Id: -1,
      FinancingEntityId: -1,
      Name: "",
      ShortName: "",
      CreditValue: 0,
      Credit: "",
      UsedCreditValue: 0,
      UsedCredit: "",
      ClosingDay: 0,
      DueDay: 0,
      ExpirationDate: "",
      CardType: "",
      CardTypeId: 0,
      Color: "",
      EndingCardNumber: "",
    },
  ],
  index: {
    View: ViewType.Table,
    Key: FIELD_ID,
    Actions: [ActionType.SHOW, ActionType.EDIT, ActionType.DELETE],
    Columns: [
      FIELD_ID,
      FIELD_SHORT_NAME,
      FIELD_CREDIT,
      FIELD_USEDCREDIT,
      FIELD_CARD_TYPE,
    ],
    RowChildren: undefined,
    Path: CONST.TABLE_NAMES.CREDIT_CARD,
    getHeader: (field: string) => UiUtils.GetHeader(FIELD_MAP, field),
  },
};

export default CreditCardModel;
