import axios, { AxiosResponse } from "axios";
import CONST from "../data/constants";
import { toast } from "react-toastify";

export const AxiosInstance = axios.create({
  //   baseURL: CONST.SITE,
  //   withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export enum LoadingStateType {
  UNDEFINED = 0,
  LOADING = 1,
  LOADED = 2,
  NO_LOADING = 3,
}

export interface IProcessingRequest {
  state: LoadingStateType;
  message: string;
}

export interface ISuccessHandler {
  response: AxiosResponse<any, any>;
  succeedHandler: (status: number, data: any) => void;
  updateProcessing?: React.Dispatch<React.SetStateAction<IProcessingRequest>>;
}

const HttpUtils = {
  BUILD_PATH: (path: string, id: number | undefined = undefined): string => {
    const endpoint = `${CONST.API_URL}/${path}`;
    return id === undefined ? endpoint : `${endpoint}/${id}`;
  },
  LOADING_STATE: { state: LoadingStateType.LOADING, message: "Fetching..." },
  LOADING_SUCCEED_STATE: {
    state: LoadingStateType.LOADED,
    message: "Fetching completed",
  },
  NO_LOADING: {
    state: LoadingStateType.NO_LOADING,
    message: "Nothing to load",
  },
  LOADING_FAIL_STATE: {
    state: LoadingStateType.LOADED,
    message: "Fetching failed",
  },
  DFTL_ERR_HANDLER: (message: string) => {
    toast.error(message);
  },
  GET_VALID_ID: (id: string | undefined): number => {
    let validId = -1;
    try {
      if (id !== undefined) validId = +id;
    } catch (error) {
      console.log(`The '${id}' is not a valid number for id: ` + error);
      return -1;
    }
    return validId;
  },
};

export default HttpUtils;

export function GET(
  path: string,
  onfulfilled: (status: number, data: any) => void,
  id?: number,
  onrejected?: (error: string) => void
) {
  const url = HttpUtils.BUILD_PATH(path, id);
  try {
    AxiosInstance.get(url)
      .then((response) => onfulfilled(response.status, response.data))
      .catch((error) => {
        console.log(error);
        if (onrejected !== undefined) {
          onrejected(error.message);
        }
      });
  } catch (error) {
    console.log(error);
    if (onrejected !== undefined) {
      onrejected(error.message);
    }
  }
}

export function PUT(
  path: string,
  payload: any,
  onfulfilled: (status: number, data: any) => void,
  onrejected?: (error: string) => void
) {
  const url = HttpUtils.BUILD_PATH(path);
  try {
    AxiosInstance.put(url, payload)
      .then((response) => onfulfilled(response.status, response.data))
      .catch((error) => {
        console.log(error);
        if (onrejected !== undefined) {
          onrejected(error.message);
        }
      });
  } catch (error) {
    console.log(error);
    if (onrejected !== undefined) {
      onrejected(error.message);
    }
  }
}

export function POST(
  path: string,
  payload: any,
  onfulfilled: (status: number, data: any) => void,
  onrejected?: (error: string) => void
) {
  const url = HttpUtils.BUILD_PATH(path);
  try {
    AxiosInstance.post(url, payload)
      .then((response) => onfulfilled(response.status, response.data))
      .catch((error) => {
        console.log(error);
        if (onrejected !== undefined) {
          onrejected(error.message);
        }
      });
  } catch (error) {
    console.log(error);
    if (onrejected !== undefined) {
      onrejected(error.message);
    }
  }
}
