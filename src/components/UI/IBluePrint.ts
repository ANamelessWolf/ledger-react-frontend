import { ReactNode } from "react";
import { ActionType } from "./enums/ActionType";
import { ViewType } from "./enums/ViewType";
import { IFieldItem } from "./common/IFieldItem";
import { ButtonType } from "./enums/ButtonType";
import { DataType } from "./enums/DataType";

export interface IIndexViewBluePrint {
  View: ViewType;
  Key: string;
  Actions: ActionType[];
  Columns: string[];
  Path: string;
  RowChildren: ReactNode | undefined;
  getHeader: (field: string) => string;
}

export interface IShowViewBluePrint {
  View: ViewType;
  Header: string;
  Fields: IFieldItem[];
  getHeader: (field: string) => string;
}

export interface IEditViewBluePrint {
  View: ViewType;
  PlaceholderSintax: string;
  Header: string;
  Fields: IFieldItem[];
  Payload: IEditMethodDefinition;
  Buttons: ButtonType[];
  Path: string;
  getHeader: (field: string) => string;
}

export interface IPayloadField {
  Name: string;
  Obligatory: boolean;
  DataType: DataType;
  Map?: string;
}

export interface IEditMethodDefinition {
  PUT: IPayloadField[];
  POST: IPayloadField[];
}
