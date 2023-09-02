import React from "react";
import RowCrudButtonGroup from "./RowCrudButtonGroup";
import { ActionType } from "../enums/ActionType";

export interface IIndexTableRow {
  columns: string[];
  primary_key: string;
  row: object;
  path: string;
  filterHandler?: (row: object) => boolean;
  deleteHandler?: (id: number) => void | undefined;
  actions?: ActionType[];
}

const dummyDelete = (id: number) => console.log("deleted: " + id);
const defaultFilter = (row: object) =>{
    return true;
} 

const IndexTableRow: React.FC<IIndexTableRow> = ({
  columns,
  primary_key,
  row,
  path,
  filterHandler = defaultFilter,
  deleteHandler = dummyDelete,
  actions = [ActionType.SHOW, ActionType.EDIT, ActionType.DELETE]
}) => {
  if (filterHandler(row))
    return (
      <tr>
        {columns.map((column, index) => {
          return <td key={index}>{row[column]}</td>;
        })}
          <RowCrudButtonGroup
            path={path}
            id={row[primary_key]}
            deleteHandler={deleteHandler}
            actions={actions}
          />
      </tr>
    );
  else return <></>;
};

export default IndexTableRow;
