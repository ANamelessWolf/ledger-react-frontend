import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

interface INoResultCard {
  message: string;
  footer?: string;
}

const NoResultCard: React.FC<INoResultCard> = ({ message, footer }) => {
  return (
    <Container style={{ marginTop: "20vh", maxWidth:"50%" }} data-bs-theme="dark">
      <Card className="text-center" text={"light"}>
        <Card.Header>No Results</Card.Header>
        <Card.Body >
          <Card.Text>{message}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          {footer !== undefined ? footer : ""}
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default NoResultCard;
