import axios, { InternalAxiosRequestConfig } from "axios";
import CONST from "../data/constants";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

export const AxiosInstance = axios.create({
  //   baseURL: CONST.SITE,
  //   withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
});

export enum LoadingStateType {
  UNDEFINED = 0,
  LOADING = 1,
  LOADED = 2,
}

export interface IProcessingRequest {
  state: LoadingStateType;
  message: string;
}

const HttpUtils = {
  BUILD_PATH: (path: string, id: number | undefined = undefined): string => {
    const endpoint = `${CONST.API_URL}/${path}`;
    return id === undefined ? endpoint : `${endpoint}/${id}`;
  },
};
export default HttpUtils;

const defaultErrorHandler = (message: string) => {
  toast.error(message);
};

export function GET(
  path: string,
  setIsProccesing,
  succeedHandler: (status: number, data: any) => void,
  errorHandler: (error: string) => void = defaultErrorHandler,
  id: number | undefined = undefined
): void {
  try {
    setIsProccesing({
      state: LoadingStateType.LOADING,
      message: "Fetching...",
    });
    AxiosInstance.get(HttpUtils.BUILD_PATH(path, id))
      .then((response) => {
        succeedHandler(response.status, response.data);
        setIsProccesing({
          state: LoadingStateType.LOADED,
          message: "Fetching completed",
        });
      })
      .catch((e) => {
        console.log("Error fetching data: ", e);
        setIsProccesing({
          state: LoadingStateType.LOADED,
          message: "Fetching failed",
        });
        errorHandler(e.message);
      });
  } catch (e) {
    console.log("Error fetching data: ", e);
    setIsProccesing({
      state: LoadingStateType.LOADED,
      message: "Fetching failed",
    });
    errorHandler(e.message);
  }
}
