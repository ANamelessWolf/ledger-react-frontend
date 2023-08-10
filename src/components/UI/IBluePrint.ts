import { ReactNode } from "react";
import { ActionType } from "./enums/ActionType";
import { ViewType } from "./enums/ViewType";

export interface IIndexViewBluePrint {
  View: ViewType;
  Key: string,
  Actions: ActionType[];
  Columns: string[];
  Path: string,
  RowChildren: ReactNode|undefined;
  getHeader: (field:string)=>string;
}
