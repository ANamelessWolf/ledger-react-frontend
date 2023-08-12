import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { IIndexViewBluePrint } from "../IBluePrint";
import IndexTableRow from "./IndexTableRow";
import NoResultCard from "./NoResultCard";

interface ITableView {
  blueprint: IIndexViewBluePrint;
  data: any[];
}

const IndexTable: React.FC<ITableView> = ({ blueprint, data }) => {
  const columns = blueprint.Columns;
  const dummyDelete = (id: number) => console.log("deleted: " + id);
  if (data.length > 0 && data[0]?.id > 0)
    return (
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              {columns.map((column, index) => {
                return <th key={index}>{blueprint.getHeader(column)}</th>;
              })}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dataRow, index) => {
              return (
                <IndexTableRow
                  key={index}
                  columns={columns}
                  primary_key={blueprint.Key}
                  row={dataRow}
                  path={blueprint.Path}
                  deleteHandler={dummyDelete}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  else
    return (
      <NoResultCard
        message="No results to show, please make a new search."
        footer="Nameless Ledger 2023"
      />
    );
};

export default IndexTable;
