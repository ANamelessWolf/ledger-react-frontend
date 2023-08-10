import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer>
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          {/* <FontAwesomeIcon icon={faTwitter} fontSize={"4em"} /> */}
        </Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">
          3 of 3
        </Col>
      </Row>
    </Container>
    </footer>
    // <MDBFooter className='bg-dark text-center text-white'>
    //   <MDBContainer className='p-4 pb-0'>
    //     <section className='mb-4'>
    //       <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //         <MDBIcon fab icon='facebook-f' />
    //       </MDBBtn>

    //       <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //         <MDBIcon fab icon='twitter' />
    //       </MDBBtn>

    //       <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //         <MDBIcon fab icon='google' />
    //       </MDBBtn>
    //       <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //         <MDBIcon fab icon='instagram' />
    //       </MDBBtn>

    //       <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //         <MDBIcon fab icon='linkedin-in' />
    //       </MDBBtn>

    //       <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //         <MDBIcon fab icon='github' />
    //       </MDBBtn>
    //     </section>
    //   </MDBContainer>

    //   <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    //     © 2020 Copyright:
    //     <a className='text-white' href='https://mdbootstrap.com/'>
    //       MDBootstrap.com
    //     </a>
    //   </div>
    // </MDBFooter>
  );
}
