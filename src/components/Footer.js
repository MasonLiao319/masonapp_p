import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/linkedin.png';
import navIcon2 from '../assets/img/github.png';
import navIcon3 from '../assets/img/email.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}

          <Col size={12}  className="text-center text-sm-end"> 
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mason-liao-07037b181"><img src={navIcon1} alt="linkedin-Icon" /></a>
              <a href="https://github.com/MasonLiao319"><img src={navIcon2} alt="github-Icon" /></a>
              <a href="mailto:alienml@yahoo.com"><img src={navIcon3} alt="email-Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
