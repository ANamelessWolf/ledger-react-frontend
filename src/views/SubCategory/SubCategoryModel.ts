import { ActionType } from "../../components/UI/enums/ActionType";
import { ButtonType } from "../../components/UI/enums/ButtonType";
import { ControlType } from "../../components/UI/enums/ControlType";
import { DataType } from "../../components/UI/enums/DataType";
import { ViewType } from "../../components/UI/enums/ViewType";
import UiUtils from "../../utils/UiUtils";
import CONST from "../../data/constants";

export interface ISubCategoryView {
  Id: number;
  Name: string;
}

const FIELD_ID = "id";
const FIELD_NAME = "name";
const FIELD_CATEGORY = "category";
const FIELD_CATEGORY_ID = "categoryId";

const HEADER = "SubCategoría";

const FIELDS = [
  FIELD_ID,
  FIELD_CATEGORY,
  FIELD_NAME
];
const HEADERS = [
  "ID",
  "Categoría",
  "Nombre",
];

const FIELD_MAP = UiUtils.ToObject(FIELDS, HEADERS, "Actions");

const SubCategoryModel = {
  endPoint: CONST.END_POINTS.SUBCATEGORY,
  empty: [
    {
      Id: -1,
      Name: "",
    },
  ],
  index: {
    View: ViewType.Table,
    Key: FIELD_ID,
    Actions: [ActionType.EDIT, ActionType.DELETE],
    Columns: [
      FIELD_ID,
      FIELD_CATEGORY,
      FIELD_NAME
    ],
    RowChildren: undefined,
    Path: CONST.TABLE_NAMES.SUBCATEGORY,
    getHeader: (field: string) => UiUtils.GetHeader(FIELD_MAP, field),
  },
  edit: {
    View: ViewType.Form,
    PlaceholderSintax: "El @field de la @entity",
    Path: CONST.END_POINTS.SUBCATEGORY,
    Header: HEADER,
    Fields: [
      {
        Field: FIELD_NAME,
        Type: ControlType.InputBoxEditable,
        DataType: DataType.STRING,
        Obligatory: true,
      },
      {
        Field: FIELD_CATEGORY,
        Type: ControlType.Select,
        DataType: DataType.STRING,
        Obligatory: true,
        Catalogue: "Category",
        Selected: FIELD_CATEGORY_ID,
      },
    ],
    Payload: {
      PUT: [
        { Name: FIELD_ID, Obligatory: true, DataType: DataType.ID },
        { Name: FIELD_NAME, Obligatory: true, DataType: DataType.STRING },
        { Name: FIELD_CATEGORY_ID, Obligatory: true, DataType: DataType.ID },
      ],
      POST: [
        { Name: FIELD_NAME, Obligatory: true, DataType: DataType.STRING },
        { Name: FIELD_CATEGORY_ID, Obligatory: true, DataType: DataType.ID },
      ],
    },
    Buttons: [ButtonType.SUBMIT],
    getHeader: (field: string) => UiUtils.GetHeader(FIELD_MAP, field),
  },
};

export default SubCategoryModel;
