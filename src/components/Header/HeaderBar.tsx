import "./HeaderBar.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import MESSAGES from "../../data/messages";

export interface ILinkItem {
  link: string;
  header: string;
}

export default function HeaderBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const adminLinks: ILinkItem[] = [
    { link: "/financing_entity", header: MESSAGES.SECTION_FINANCING_ENT },
    { link: "/credit_card", header: MESSAGES.SECTION_CREDIT_CARD },
    { link: "/category", header: MESSAGES.SECTION_CATEGORY },
    { link: "/subcategory", header: MESSAGES.SECTION_SUBCATEGORY },
    { link: "/vendor", header: MESSAGES.SECTION_VENDOR },
  ];

  return (
    <header>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="48"
              height="48"
              className="d-inline-block align-center"
            />{" "}
            Ledger
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                {adminLinks.map((item, index) => {
                  return (
                    <NavDropdown.Item
                      key={index}
                      onClick={() => navigate(item.link)}
                    >
                      {item.header}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
