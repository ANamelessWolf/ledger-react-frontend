import { ControlType } from "../enums/ControlType";
import { DataType } from "../enums/DataType";

export interface IFieldItem {
  Field: string;
  Type: ControlType;
  DataType: DataType;
  Obligatory?:boolean;
  Placeholder?:string;
  Catalogue?:string;
  Selected?:string;
}

export interface IChangeField {
  FieldName: string;
  FieldValue: any;
}