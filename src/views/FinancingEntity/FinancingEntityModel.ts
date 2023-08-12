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
const FIELD_FINANCIAl_ID = "financingTypeId";

const HEADER = "Entidad financiera";

const FIELDS = [FIELD_ID, FIELD_NAME, FIELD_DESC, FIELD_FINANCIAL];
const HEADERS = ["ID", "Nombre", "Descripción", "Entidad financiera"];

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
    Header: HEADER,
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
    getHeader: (field: string) => UiUtils.GetHeader(FIELD_MAP, field),
  },
  edit: {
    View: ViewType.Form,
    PlaceholderSintax: "El @field de la @entity",
    Path: CONST.END_POINTS.FINANCIAL_ENTITY,
    Header: HEADER,
    Fields: [
      {
        Field: FIELD_NAME,
        Type: ControlType.InputBoxEditable,
        DataType: DataType.STRING,
        Obligatory: true,
      },
      {
        Field: FIELD_DESC,
        Type: ControlType.InputBoxEditable,
        DataType: DataType.STRING,
        Placeholder: "Una breve descripción sobre la entidad financiera",
        Obligatory: false,
      },
      {
        Field: FIELD_FINANCIAL,
        Type: ControlType.Select,
        DataType: DataType.STRING,
        Obligatory: true,
        Catalogue: "FinancingType",
        Selected: FIELD_FINANCIAl_ID,
      },
    ],
    Payload: {
      PUT: [
        { Name: FIELD_ID, Obligatory: true, DataType: DataType.ID },
        { Name: FIELD_NAME, Obligatory: true, DataType: DataType.STRING },
        { Name: FIELD_DESC, Obligatory: false, DataType: DataType.STRING },
        { Name: FIELD_FINANCIAl_ID, Obligatory: true, DataType: DataType.ID, Map:FIELD_FINANCIAL },
      ],
      POST: [
        { Name: FIELD_NAME, Obligatory: true, DataType: DataType.STRING },
        { Name: FIELD_DESC, Obligatory: false, DataType: DataType.STRING },
        { Name: FIELD_FINANCIAl_ID, Obligatory: true, DataType: DataType.ID, Map:FIELD_FINANCIAL },
      ],
    },
    Buttons: [ButtonType.SUBMIT],
    getHeader: (field: string) => UiUtils.GetHeader(FIELD_MAP, field),
  },
  index: {
    View: ViewType.Table,
    Key: FIELD_ID,
    Actions: [ActionType.SHOW, ActionType.EDIT, ActionType.DELETE],
    Columns: [FIELD_ID, FIELD_NAME, FIELD_FINANCIAL],
    RowChildren: undefined,
    Path: CONST.TABLE_NAMES.FINANCIAL_ENTITY,
    getHeader: (field: string) => UiUtils.GetHeader(FIELD_MAP, field),
  },
};

export default FinancingEntityModel;
