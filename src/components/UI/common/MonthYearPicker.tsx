import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../forms/DisabledForm.scss";
import { IChangeField } from "../common/IFieldItem";
import { ICatalogueItem } from "../../../context/ICatalogue";
import UiUtils from "../../../utils/UiUtils";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import MESSAGES from "../../../data/messages";
export interface IMonthYear {
  Month: number;
  Year: number;
}

interface IMonthYearPicker {
  Field: string;
  Label: string;
  Value: IMonthYear;
  onChange: (fields: IChangeField[]) => void;
  Obligatory?: boolean;
}

export const ParseExpirationDate = (date: string): IMonthYear => {
  const d = new Date();
  const year = d.getFullYear() - 2000;
  if (date === undefined) {
    return { Month: 1, Year: year + 2 };
  }
  const value = date.split("/");
  if (value.length === 2) {
    return { Month: +value[0], Year: +value[1] };
  }
  return { Month: +value[0], Year: year };
};

export const GetExpirationDate = (date: IMonthYear): string => {
  const month = String(date.Month).padStart(2, "0");
  const year = String(date.Year).padStart(2, "0");
  return `${month}/${year}`;
};

const months = [
  { Id: 1, Description: "01" },
  { Id: 2, Description: "02" },
  { Id: 3, Description: "03" },
  { Id: 4, Description: "04" },
  { Id: 5, Description: "05" },
  { Id: 6, Description: "06" },
  { Id: 7, Description: "07" },
  { Id: 8, Description: "08" },
  { Id: 9, Description: "09" },
  { Id: 10, Description: "10" },
  { Id: 11, Description: "11" },
  { Id: 12, Description: "12" },
];

const getYears = () => {
  const years: ICatalogueItem[] = [];
  const d = new Date();
  const stYear = d.getFullYear() - 2000;
  for (let y = stYear; y <= stYear + 12; y++) {
    years.push({ Id: y, Description: "" + y });
  }
  return years;
};

const years = getYears();

const MonthYearPicker: React.FC<IMonthYearPicker> = ({
  Field,
  Value,
  Label,
  onChange,
  Obligatory = false,
}) => {
  const [month, setMonth] = useState<number>(Value.Month);
  const [year, setYear] = useState<number>(Value.Year);

  const onMonthChange = (e) => {
    setMonth(e.target.value);
    const m = e.target.value;
    const value = GetExpirationDate({ Month: +m, Year: year });
    onChange([{ FieldName: Field, FieldValue: value }]);
  };

  const onYearChange = (e) => {
    setYear(e.target.value);
    const y = e.target.value;
    const value = GetExpirationDate({ Month: month, Year: +y });
    onChange([{ FieldName: Field, FieldValue: value }]);
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label style={UiUtils.GetSelectValidationStyle(+month)}>
        {UiUtils.ToObligatory(Obligatory, Label)}
      </Form.Label>
      <Container>
        <Row>
          <Col lg={1} className="monthYearLabel">
            <Form.Label>Mes</Form.Label>
          </Col>
          <Col>
            <Form.Select
              id="mont-catalogue"
              value={month}
              onChange={onMonthChange}
            >
              <option value={-1}>{MESSAGES.SELECT_OPTION}</option>
              {months?.map((item: ICatalogueItem, index) => {
                return (
                  <option key={index} value={item.Id}>
                    {item.Description}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
          <Col lg={1} className="monthYearLabel">
            <Form.Label>Año</Form.Label>
          </Col>
          <Col>
            <Form.Select
              id="year-catalogue"
              value={year}
              onChange={onYearChange}
            >
              <option value={-1}>{MESSAGES.SELECT_OPTION}</option>
              {years?.map((item: ICatalogueItem, index) => {
                return (
                  <option key={index} value={item.Id}>
                    {item.Description}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </Form.Group>
  );
};

export default MonthYearPicker;
