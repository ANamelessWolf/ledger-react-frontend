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
  actions?: ActionType[];
}

const dummyDelete = (id: number) => console.log("deleted: " + id);

const RowCrudButtonGroup: React.FC<IRowCrudButtonGroup> = ({
  path,
  id,
  deleteHandler = dummyDelete,
  actions = [ActionType.SHOW, ActionType.EDIT, ActionType.DELETE],
}) => {
  return (
    <td>
      <Container>
        <Row>
          {actions.indexOf(ActionType.SHOW) >= 0 && (
            <Col>
              <CrudButton path={path} type={ActionType.SHOW} id={id} />
            </Col>
          )}
          {actions.indexOf(ActionType.EDIT) >= 0 && (
            <Col>
              <CrudButton path={path} type={ActionType.EDIT} id={id} />
            </Col>
          )}
          {actions.indexOf(ActionType.DELETE) >= 0 && (
            <Col>
              <CrudButton
                path={path}
                type={ActionType.DELETE}
                id={id}
                deleteHandler={deleteHandler}
              />
            </Col>
          )}
        </Row>
      </Container>
    </td>
  );
};

export default RowCrudButtonGroup;
