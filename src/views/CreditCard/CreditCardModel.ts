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
  "Entidad financiera",
  "Nombre",
  "Nombre corto",
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
  show: {
    View: ViewType.Form,
    Header: HEADER,
    Fields: [
      {
        Field: FIELD_NAME,
        Type: ControlType.InputBoxReadOnly,
        DataType: DataType.STRING,
      },
      {
        Field: FIELD_SHORT_NAME,
        Type: ControlType.InputBoxReadOnly,
        DataType: DataType.STRING,
      },
      {
        Field: FIELD_CREDIT,
        Type: ControlType.InputBoxReadOnly,
        DataType: DataType.STRING,
      },
      {
        Field: FIELD_USEDCREDIT,
        Type: ControlType.InputBoxReadOnly,
        DataType: DataType.STRING,
      },
      {
        Field: FIELD_CLOSING_DAY,
        Type: ControlType.MonthOfDayReadOnly,
        DataType: DataType.STRING,
      },
      {
        Field: FIELD_DUE_DAY,
        Type: ControlType.MonthOfDayReadOnly,
        DataType: DataType.STRING,
      },
    ],
    getHeader: (field: string) => UiUtils.GetHeader(FIELD_MAP, field),
  },
  edit: {
    View: ViewType.Form,
    PlaceholderSintax: "El @field de la @entity",
    Path: CONST.END_POINTS.CREDIT_CARD,
    Header: HEADER,
    Fields: [
      {
        Field: FIELD_NAME,
        Type: ControlType.InputBoxEditable,
        DataType: DataType.STRING,
        Obligatory: true,
      },
      {
        Field: FIELD_SHORT_NAME,
        Type: ControlType.InputBoxEditable,
        DataType: DataType.STRING,
        Obligatory: true,
      },
      {
        Field: FIELD_FINANCING_ENT_ID,
        Type: ControlType.Select,
        DataType: DataType.STRING,
        Obligatory: true,
        Catalogue: "FinancingEntity",
      },
      {
        Field: FIELD_CREDIT_VALUE,
        Type: ControlType.InputBoxEditable,
        DataType: DataType.MONEY,
        Obligatory: true,
      },
      {
        Field: FIELD_USEDCREDIT_VALUE,
        Type: ControlType.InputBoxEditable,
        DataType: DataType.MONEY,
        Obligatory: true,
      },
      {
        Field: FIELD_CLOSING_DAY,
        Type: ControlType.Select,
        DataType: DataType.STRING,
        Obligatory: true,
        Catalogue: "FinancingDays",
        Selected: FIELD_CLOSING_DAY,
      },
      {
        Field: FIELD_DUE_DAY,
        Type: ControlType.Select,
        DataType: DataType.STRING,
        Obligatory: true,
        Catalogue: "FinancingDays",
        Selected: FIELD_DUE_DAY,
      },
      {
        Field: FIELD_EXP_DATE,
        Type: ControlType.MonthYear,
        DataType: DataType.EXPIRED_DATE,
        Obligatory: true,
      },
      {
        Field: FIELD_CARD_TYPE_ID,
        Type: ControlType.Select,
        DataType: DataType.NUMBER,
        Obligatory: true,
        Catalogue: "CardType",
      },
      {
        Field: FIELD_COLOR,
        Type: ControlType.Select,
        DataType: DataType.STRING,
        Obligatory: true,
        Catalogue: "CreditCardColors",
      },
      {
        Field: FIELD_ENDING_CARD_NUMBER,
        Type: ControlType.InputBoxEditable,
        DataType: DataType.NUMBER,
        Obligatory: true,
      },
    ],
    Payload: {
      PUT: [
        { Name: FIELD_ID, Obligatory: true, DataType: DataType.ID },
        { Name: FIELD_FINANCING_ENT_ID, Obligatory: true, DataType: DataType.ID },
        { Name: FIELD_NAME, Obligatory: true, DataType: DataType.STRING },
        { Name: FIELD_SHORT_NAME, Obligatory: true, DataType: DataType.STRING },
        { Name: FIELD_CREDIT_VALUE, Obligatory: true, DataType: DataType.NUMBER, Map: FIELD_CREDIT },
        { Name: FIELD_USEDCREDIT_VALUE, Obligatory: true, DataType: DataType.NUMBER, Map: FIELD_USEDCREDIT },
        { Name: FIELD_CLOSING_DAY, Obligatory: true, DataType: DataType.NUMBER },
        { Name: FIELD_DUE_DAY, Obligatory: true, DataType: DataType.NUMBER },
        { Name: FIELD_EXP_DATE, Obligatory: true, DataType: DataType.STRING },
        { Name: FIELD_CARD_TYPE_ID, Obligatory: true, DataType: DataType.ID, Map: FIELD_CARD_TYPE },
        { Name: FIELD_COLOR, Obligatory: false, DataType: DataType.STRING },
        { Name: FIELD_ENDING_CARD_NUMBER, Obligatory: true, DataType: DataType.STRING }
      ],
      POST: [
        { Name: FIELD_FINANCING_ENT_ID, Obligatory: true, DataType: DataType.ID },
        { Name: FIELD_NAME, Obligatory: true, DataType: DataType.STRING },
        { Name: FIELD_SHORT_NAME, Obligatory: true, DataType: DataType.STRING },
        { Name: FIELD_CREDIT_VALUE, Obligatory: true, DataType: DataType.NUMBER, Map: FIELD_CREDIT },
        { Name: FIELD_USEDCREDIT_VALUE, Obligatory: true, DataType: DataType.NUMBER, Map: FIELD_USEDCREDIT },
        { Name: FIELD_CLOSING_DAY, Obligatory: true, DataType: DataType.NUMBER },
        { Name: FIELD_DUE_DAY, Obligatory: true, DataType: DataType.NUMBER },
        { Name: FIELD_EXP_DATE, Obligatory: true, DataType: DataType.STRING },
        { Name: FIELD_CARD_TYPE_ID, Obligatory: true, DataType: DataType.STRING, Map: FIELD_CARD_TYPE },
        { Name: FIELD_COLOR, Obligatory: false, DataType: DataType.STRING },
        { Name: FIELD_ENDING_CARD_NUMBER, Obligatory: true, DataType: DataType.STRING }
      ],
    },
    Buttons: [ButtonType.SUBMIT],
    getHeader: (field: string) => UiUtils.GetHeader(FIELD_MAP, field),
  },
};

export default CreditCardModel;
