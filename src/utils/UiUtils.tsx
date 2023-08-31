import { ButtonType } from "../components/UI/enums/ButtonType";
import { DataType } from "../components/UI/enums/DataType";
import { ICatalogueItem } from "../context/ICatalogue";
import { LoadingStateType } from "./Http";
import { VerboseType } from "./VerboseType";
const UiUtils = {
  IsProccessing: (state: LoadingStateType): boolean => {
    return (
      [LoadingStateType.LOADING, LoadingStateType.UNDEFINED].indexOf(state) >= 0
    );
  },
  ToObject(keys: string[], values: string[], ...other: string[]) {
    const obj = {};

    keys.forEach((element, index) => {
      obj[element] = values[index];
    });

    other.forEach((element, index) => {
      obj[element] = element;
    });

    return obj;
  },
  GetHeader: (FIELD_MAP: {}, field: string): string => {
    return FIELD_MAP[field];
  },
  ToObligatory: (obligatory: boolean, label: string) => {
    return obligatory === true ? "* " + label : label;
  },
  GetValidationStyle: (dataTp: DataType, value) => {
    return { color: !value || value?.length === 0 ? "#e84c4c" : "white" };
  },
  GetSelectValidationStyle: (index: number) => {
    return { color: !index || index <= 0 ? "#e84c4c" : "white" };
  },
  GetSubmitType: (id: number) => {
    return id > 0 ? VerboseType.PUT : VerboseType.POST;
  },
  GetValue: (value: any, datatp: DataType) => {
    if (datatp === DataType.ID || datatp === DataType.NUMBER) {
      return +value;
    } else {
      return value;
    }
  },
  Validate(value: any, datatp: DataType) {
    try {
      if (datatp === DataType.ID) {
        return value !== undefined && +value > 0;
      } else if (datatp === DataType.NUMBER) {
        return value !== undefined && +value;
      } else {
        return value !== undefined && ("" + value).trim().length > 0;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  GetButtonVariant(btnType: ButtonType) {
    if (btnType === ButtonType.OK) {
      return "primary";
    } else if (btnType === ButtonType.CANCEL) {
      return "secondary";
    } else if (btnType === ButtonType.YES) {
      return "danger";
    } else if (btnType === ButtonType.NO) {
      return "primary";
    } else if (btnType === ButtonType.SUBMIT) {
      return "success";
    }
    return "info";
  },
  GetButtonHeader(btnType: ButtonType) {
    if (btnType === ButtonType.OK) {
      return "Ok";
    } else if (btnType === ButtonType.CANCEL) {
      return "Cancelar";
    } else if (btnType === ButtonType.YES) {
      return "Sí";
    } else if (btnType === ButtonType.NO) {
      return "No";
    } else if (btnType === ButtonType.SUBMIT) {
      return "Enviar";
    }
    return "Info";
  },

  GetCreditCardColors(): ICatalogueItem[] {
    return [
      { Id: 1, Key: "blue", Description: "Blue" },
      { Id: 2, Key: "lightblue", Description: "Light blue" },
      { Id: 3, Key: "tangerine", Description: "Tangerine" },
      { Id: 4, Key: "platinum", Description: "Platinum" },
      { Id: 5, Key: "red", Description: "Red" },
      { Id: 6, Key: "yellow", Description: "Yellow" },
      { Id: 7, Key: "gold", Description: "Gold" },
      { Id: 8, Key: "black", Description: "Black" },
    ];
  },
};
export default UiUtils;
