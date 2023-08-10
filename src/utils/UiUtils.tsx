import { LoadingStateType } from "./Http";

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
  
};
export default UiUtils;
