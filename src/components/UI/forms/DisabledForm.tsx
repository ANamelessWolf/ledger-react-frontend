import React from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { IShowViewBluePrint } from "../IBluePrint";
import "./DisabledForm.scss";
import { IFieldItem } from "../common/IFieldItem";
import DisabledFormField from "./DisabledFormField";
import { useNavigate } from "react-router-dom";

interface IDisabledForm {
  blueprint: IShowViewBluePrint;
  data: any;
}

const DisabledForm: React.FC<IDisabledForm> = ({ blueprint, data }) => {
  const navigate = useNavigate();
  return (
    <Container
      className="disabledForm"
      data-bs-theme="dark"
      style={{ marginTop: "5vh" }}
    >
      <Card className="formCard">
        <Card.Header>{blueprint.Header}</Card.Header>
        <Card.Body>
          <Form>
            {blueprint.Fields.map((item: IFieldItem, index) => (
              <DisabledFormField
                key={index}
                field={item}
                label={blueprint.getHeader(item.Field)}
                data={data}
              />
            ))}
            <Button variant="light" onClick={() => navigate(-1)}>
              Back
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DisabledForm;
