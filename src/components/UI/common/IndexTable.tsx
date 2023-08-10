import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { IIndexViewBluePrint } from "../IBluePrint";
import IndexTableRow from "./IndexTableRow";

interface ITableView {
  blueprint: IIndexViewBluePrint;
  data: any[];
}

const IndexTable: React.FC<ITableView> = ({ blueprint, data }) => {
  const columns = blueprint.Columns;
  const dummyDelete = (id: number) => console.log("deleted: " + id);

  return (
    <Container>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {columns.map((column, index) => {
              return (
                <th key={index}>{blueprint.getHeader(column)}</th>
              );
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
};

export default IndexTable;
