/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { IEditViewBluePrint, IPayloadField } from "../IBluePrint";
import "./EditForm.scss";
import { IChangeField, IFieldItem } from "../common/IFieldItem";
import { useNavigate } from "react-router-dom";
import EditFormField from "./EditFormField";
import AppContext from "../../../context/AppContext";
import UiUtils from "../../../utils/UiUtils";
import { VerboseType } from "../../../utils/VerboseType";
import { toast } from "react-toastify";
import { POST, PUT } from "../../../utils/Http";

interface IEditForm {
  blueprint: IEditViewBluePrint;
  data: any;
  route: string;
  onChanged?: (data: any) => void;
}

const EditForm: React.FC<IEditForm> = ({
  blueprint,
  data,
  route,
  onChanged = undefined,
}) => {
  const navigate = useNavigate();
  const context = useContext(AppContext);
  const [formData, setFormData] = useState(data);
  const [formIsValid, setFormIsValid] = useState(false);
  const submitType = UiUtils.GetSubmitType(data.id);

  const validateForm = (data) => {
    //Create
    let fields: IPayloadField[] = [] as IPayloadField[];
    if (submitType === VerboseType.POST) {
      fields = blueprint.Payload.POST;
    }
    //Update
    else if (submitType === VerboseType.PUT) {
      fields = blueprint.Payload.PUT;
    }
    for (let index = 0; index < fields.length; index++) {
      const field = fields[index];
      const value = UiUtils.GetValue(data[field.Name], field.DataType);
      if (field.Obligatory) {
        const flag = UiUtils.Validate(value, field.DataType);
        if (!flag) {
          return false;
        }
      }
    }
    return true;
  };

  useEffect(() => {
    setFormIsValid(validateForm(formData));
  }, [formData]);

  const onChange = (fields: IChangeField[]) => {
    let dataCopy = { ...formData };
    for (let index = 0; index < fields.length; index++) {
      dataCopy[fields[index].FieldName] = fields[index].FieldValue;
    }
    setFormData(() => dataCopy);
    setFormIsValid(validateForm(dataCopy));
    if (onChanged !== undefined) {
      onChanged(dataCopy);
    }
  };

  const fetchHandler = (status: number, data: any) => {
    toast.info("La operación fue un exito");
    navigate(route);
  };

  const errorHandler = (message: string) => {
    toast.error("Ocurrio un error en la operación. Intente nuevamente.");
  };

  const getPayload = (fields: IPayloadField[], submitData: any) => {
    const payload = {};
    for (let index = 0; index < fields.length; index++) {
      const field = fields[index];
      const value = UiUtils.GetValue(submitData[field.Name], field.DataType);
      if (field.Map !== undefined) {
        payload[field.Map] = value;
      } else {
        payload[field.Name] = value;
      }
    }
    return payload;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let payload;
    //Create
    if (submitType === VerboseType.POST) {
      payload = getPayload(blueprint.Payload.POST, formData);
      POST(blueprint.Path, payload, fetchHandler, errorHandler);
    }
    //Update
    else if (submitType === VerboseType.PUT) {
      payload = getPayload(blueprint.Payload.PUT, formData);
      PUT(blueprint.Path, payload, fetchHandler, errorHandler);
    }
  };

  return (
    <Container
      className="EditForm"
      data-bs-theme="dark"
      style={{ marginTop: "5vh" }}
    >
      <Card className="formCard">
        <Card.Header>{blueprint.Header}</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {blueprint.Fields.map((item: IFieldItem, index) => {
              const header = blueprint.getHeader(item.Field);
              const value =
                item.Selected !== undefined
                  ? data[item.Selected]
                  : data[item.Field];
              if (item.Placeholder === undefined)
                item.Placeholder = blueprint.PlaceholderSintax.replace(
                  "@field",
                  header.toLowerCase()
                ).replace("@entity", blueprint.Header.toLowerCase());

              return (
                <EditFormField
                  key={index}
                  field={item}
                  label={header}
                  onChange={onChange}
                  startValue={value}
                  obligatory={item.Obligatory}
                  catalogue={
                    item.Catalogue !== undefined
                      ? context.catalogue[item.Catalogue]
                      : undefined
                  }
                ></EditFormField>
              );
            })}
            <ButtonGroup className="mb-2">
              <Button variant="primary" type="submit" disabled={!formIsValid}>
                Enviar
              </Button>
              <Button variant="light" onClick={() => navigate(-1)}>
                Regresar
              </Button>
            </ButtonGroup>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditForm;
