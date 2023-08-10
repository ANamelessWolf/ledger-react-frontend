import { ActionType } from "../../components/UI/enums/ActionType";
import { ButtonType } from "../../components/UI/enums/ButtonType";
import { ControlType } from "../../components/UI/enums/ControlType";
import { DataType } from "../../components/UI/enums/DataType";
import { ViewType } from "../../components/UI/enums/ViewType";
import UiUtils from "../../utils/UiUtils";
import CONST from "../../data/constants";

export interface IFinancingEntityView {
  Id: number;
  Description: string;
  Name: string;
  FinancingType: string;
}
const FIELD_ID = "id";
const FIELD_NAME = "name";
const FIELD_DESC = "description";
const FIELD_FINANCIAL = "financingType";

const FIELDS = [FIELD_ID, FIELD_NAME, FIELD_DESC, FIELD_FINANCIAL];
const HEADERS = ["ID", "Nombre", "Descripción", "Tipo"];

const FIELD_MAP = UiUtils.ToObject(FIELDS, HEADERS, "Actions");

const FinancingEntityModel = {
  empty: [
    {
      Id: -1,
      Description: "",
      Name: "",
      FinancingType: "",
    },
  ],
  show: {
    View: ViewType.Form,
    Fields: [
      {
        Field: FIELD_NAME,
        Type: ControlType.InputBoxReadOnly,
        DataType: DataType.STRING,
      },
      {
        Field: FIELD_DESC,
        Type: ControlType.InputBoxReadOnly,
        DataType: DataType.STRING,
      },
      {
        Field: FIELD_FINANCIAL,
        Type: ControlType.InputBoxReadOnly,
        DataType: DataType.STRING,
      },
    ],
  },
  edit: {
    View: ViewType.Form,
    Fields: [
      {
        Field: FIELD_NAME,
        Type: ControlType.InputBoxEditable,
        DataType: DataType.STRING,
      },
      {
        Field: FIELD_DESC,
        Type: ControlType.InputBoxEditable,
        DataType: DataType.STRING,
      },
      {
        Field: FIELD_FINANCIAL,
        Type: ControlType.Select,
        DataType: DataType.STRING,
      },
    ],
    Buttons: [ButtonType.SUBMIT],
  },
  index: {
    View: ViewType.Table,
    Key: FIELD_ID,
    Actions: [ActionType.SHOW, ActionType.EDIT, ActionType.DELETE],
    Columns: [FIELD_ID, FIELD_NAME, FIELD_FINANCIAL],
    RowChildren: undefined,
    Path: CONST.TABLE_NAMES.FINANCIAL_ENTITY,
    getHeader: (field: string): string => {
      return FIELD_MAP[field];
    },
  },
};

export default FinancingEntityModel;
