import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Send");
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully' });
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      setButtonText("Send");
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1 col-half">
                        <input type="text" value={formDetails.firstName} placeholder="First Name *" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1 col-half">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name *" onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1 col-half">
                        <input type="email" value={formDetails.email} placeholder="Email Address *" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1 col-half">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1 col-full">
                        <div className="date-wrapper">
                          <label>Select your preferred meeting date</label>
                          <input type="date" value={formDetails.date} min={getTodayDate()} onChange={(e) => onFormUpdate('preferredDate', e.target.value)} />
                        </div>
                      </Col>
                      <Col size={12} className="px-1 col-full">
                        <textarea rows="6" value={formDetails.message} placeholder="Message *" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
