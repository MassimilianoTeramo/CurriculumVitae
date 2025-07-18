import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';


const ContactMe = ({onClose}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qx5b9fi", "template_92miaya", form.current, {
        publicKey: "irfnrJbAowwssujYN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
            onClose();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message, please try again later.");
        }
      );
    e.target.reset();
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="textarea" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <InputGroup>
          <Form.Control as="textarea" name="message" />
        </InputGroup>
      </Form.Group>
      <Button type="submit" value="Send" variant="success">
        Send
      </Button>
    </Form>
  );
};

export default ContactMe;
