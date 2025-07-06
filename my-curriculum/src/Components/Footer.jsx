import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useState } from "react";


function GmailForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
}

function FooterM() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  <GmailForm show={show} handleClose={handleClose} />;

  return (
    <footer className="page-footer font-small blue pt-5">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mt-md-0 mt-3">
            <h5>CV of Massimiliano Teramo</h5>
            <p>Website created with React and Bootstrap.</p>
          </div>

          <div className="col-md-4 mb-md-0 mb-3 usefulLinks">
            <h5 className="text-uppercase">Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <Button variant="link" onClick={() => navigate("/Career")} style={{ padding: 0, color: "var(--primary-color)", textDecoration: "none" }}>
                  Career
                </Button>
              </li>
              <li>
                <Button variant="link" onClick={() => navigate("/Hobbies")} style={{ padding: 0, color: "var(--primary-color)", textDecoration: "none" }}>
                  Hobbies
                </Button>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-md-0 mb-3">
            <h5 className="text-uppercase">Contacts</h5>
            <div className="contacts" style={{ color: "black" }}>
              <Button className="my-3 footerButton" onClick={handleShow}>
                <BiLogoGmail size={27} />
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                  <Modal.Title>Contact Me</Modal.Title>
                </Modal.Header>
                <Form className="p-3">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Object</Form.Label>
                    <Form.Control type="text" rows={3} />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Send
                  </Button>
                </Modal.Footer>
              </Modal>
              <Button className="mb-3 footerLinkedin"
                href="https://www.linkedin.com/in/massimiliano-teramo"
              target="_blank"
              rel="noopener noreferrer">
                  <FaLinkedinIn size={27} />
               
              </Button>
              <Button className="mb-3 footerGithub">
                
                  <TbBrandGithubFilled size={27} />
                
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2025 Copyright: Massimiliano Teramo 
      </div>
    </footer>
  );
}

export default FooterM;
