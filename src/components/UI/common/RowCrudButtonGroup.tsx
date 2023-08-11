import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CrudButton from "./CrudButton";
import { ActionType } from "../enums/ActionType";

export interface IRowCrudButtonGroup {
  path: string;
  id: number;
  deleteHandler?: (id: number) => void | undefined;
}

const dummyDelete = (id: number) => console.log("deleted: " + id);

const RowCrudButtonGroup: React.FC<IRowCrudButtonGroup> = ({
  path,
  id,
  deleteHandler = dummyDelete,
}) => {
  return (
    <td>
      <Container>
        <Row>
          <Col>
            <CrudButton path={path} type={ActionType.SHOW} id={id} />
          </Col>
          <Col>
            <CrudButton path={path} type={ActionType.EDIT} id={id} />
          </Col>
          <Col>
            <CrudButton
              path={path}
              type={ActionType.DELETE}
              id={id}
              deleteHandler={deleteHandler}
            />
          </Col>
        </Row>
      </Container>
    </td>
  );
};

export default RowCrudButtonGroup;
