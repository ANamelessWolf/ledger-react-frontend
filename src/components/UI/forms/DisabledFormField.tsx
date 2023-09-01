import React from "react";
import Form from "react-bootstrap/Form";
import "./DisabledForm.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ControlType } from "../enums/ControlType";
import { IFieldItem } from "../common/IFieldItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

interface IDisabledFormField {
  field: IFieldItem;
  label: string;
  data: object;
}

const DisabledFormField: React.FC<IDisabledFormField> = ({
  field,
  label,
  data,
}) => {
  let formField = <>{`Field Type: ${field.Type} not Implemented`}</>;
  if (field.Type === ControlType.InputBoxReadOnly) {
    formField = (
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control value={data[field.Field]} disabled />
      </Form.Group>
    );
  } else if (field.Type === ControlType.MonthOfDayReadOnly) {
    formField = (
      <Row>
      <Col sm={1} className="iconTop">
        <FontAwesomeIcon icon={faCalendar} size="2x" />
      </Col>
      <Col  sm={11} className="zeroMargin">
        <Form.Group className="mb-3">
          <Form.Label className="zeroMargin">{label}</Form.Label>
          <br/>
          <Form.Label className="dayOfMonth">{data[field.Field]}</Form.Label>
        </Form.Group>
      </Col>
      </Row>
    );
  }
  return formField;
};

export default DisabledFormField;
