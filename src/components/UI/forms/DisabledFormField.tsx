import React from "react";
import Form from "react-bootstrap/Form";
import "./DisabledForm.scss";
import { ControlType } from "../enums/ControlType";
import { IFieldItem } from "../common/IFieldItem";

interface IDisabledFormField {
  field: IFieldItem;
  label: string;
  data: object;
}

const DisabledFormField: React.FC<IDisabledFormField> = ({ field, label, data }) => {
  let formField = <>{`Field Type: ${field.Type} not Implemented`}</>;
  if (field.Type === ControlType.InputBoxReadOnly) {
    formField = (
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control value={data[field.Field]} disabled />
      </Form.Group>
    );
  }
  return formField;
};

export default DisabledFormField;
