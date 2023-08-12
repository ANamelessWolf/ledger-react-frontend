import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./DisabledForm.scss";
import { ControlType } from "../enums/ControlType";
import { IChangeField, IFieldItem } from "../common/IFieldItem";
import { ICatalogueItem } from "../../../context/ICatalogue";
import UiUtils from "../../../utils/UiUtils";

interface IEditFormField {
  field: IFieldItem;
  label: string;
  startValue: string;
  onChange: (fields: IChangeField[]) => void;
  obligatory?: boolean;
  catalogue?: ICatalogueItem[];
}

const EditFormField: React.FC<IEditFormField> = ({
  field,
  label,
  startValue,
  onChange,
  obligatory = false,
  catalogue = undefined,
}) => {
  const [value, setValue] = useState(startValue);

  const getTextFromSelect = (select): string => {
    try {
      return select.selectedOptions[0].text;
    } catch (error) {
      console.log(error);
    }
    return "";
  };

  const onValueChange = (e) => {
    setValue(e.target.value);
    if (field.Type === ControlType.Select && field.Selected !== undefined) {
      onChange([
        { FieldName: field.Selected, FieldValue: e.target.value },
        { FieldName: field.Field, FieldValue: getTextFromSelect(e.target) },
      ]);
    } else {
      onChange([{ FieldName: field.Field, FieldValue: e.target.value }]);
    }
  };

  let formField = <>{`\r\nField Type: ${field.Type} not Implemented`}</>;
  if (field.Type === ControlType.InputBoxEditable) {
    formField = (
      <Form.Group className="mb-3">
        <Form.Label style={UiUtils.GetValidationStyle(field.DataType, value)}>
          {UiUtils.ToObligatory(obligatory, label)}
        </Form.Label>
        <Form.Control
          value={value}
          placeholder={field.Placeholder}
          onChange={onValueChange}
        />
      </Form.Group>
    );
  } else if (
    field.Type === ControlType.Select &&
    field.Catalogue !== undefined
  ) {
    formField = (
      <Form.Group className="mb-3">
        <Form.Label style={UiUtils.GetSelectValidationStyle(+value)}>
          {UiUtils.ToObligatory(obligatory, label)}
        </Form.Label>
        <Form.Select id="catalogue" value={value} onChange={onValueChange}>
          {catalogue?.map((item: ICatalogueItem, index) => {
            return (
              <option key={index} value={item.Id}>
                {item.Description}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
    );
  }
  return formField;
};

export default EditFormField;
