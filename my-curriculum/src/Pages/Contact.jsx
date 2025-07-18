import React, { useState, useRef } from "react";
import { Form, Button, Modal, Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import ContactMe from "../Components/EmailJS";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

export default function Contact() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      
      <h1 className="text-center my-5">Contact Me</h1>
      <p className="text-center">
        If you have any questions or would like to get in touch, please feel
        free to reach out!
      </p>
      <div className="d-flex justify-content-center my-5">
        <Button variant="danger" onClick={handleShow}>
          Email Me
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Me</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContactMe onClose={handleClose} />
          </Modal.Body>
        </Modal>
      </div>
      <div className="text-center mt-4">
        <p>Or connect with me on social media:</p>
        <div className="d-flex justify-content-center gap-3">
          <Button
            className="mb-3 footerGithub"
            href="https://github.com/MassimilianoTeramo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandGithubFilled size={27} />
          </Button>
          <Button
            className="mb-3 footerLinkedin"
            href="https://www.linkedin.com/in/massimiliano-teramo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={27} />
          </Button>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>Feel free to reach out for any inquiries or collaborations!</p>
        <p>Looking forward to hearing from you!</p>
        <p>Best regards,</p>
        <p>Massimiliano Teramo</p>
      </div>
    </Container>
  );
}
// This code defines a simple contact page with a header, a brief description, and buttons to contact via email or social media.
