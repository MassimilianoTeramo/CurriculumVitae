import epicodeLogo from "../Assets/logoEPIC.png";
import lifeLogo from "../Assets/logo-life-learning.png";
import uniLogo from "../Assets/uniLogo.png";
import Experience from "../Components/JobExperience";
import Cambridge from "../Assets/firstCambridge.png";
import { useState } from "react";
import { Container, Col, Row, Table } from "react-bootstrap";

function Career() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-center mt-5 mb-3">My Career path</h1>
      <p className="text-center mb-5">
        Here you can find information about my professional journey, skills, and
        experiences.
      </p>
      <Row>
        <Col className="profEx col-md-12">
          <h2 className="mt-4">Professional Experience</h2>
          <Experience />
        </Col>
        <Col className="education col-md-12 mb-5 pt-2 d-flex flex-column align-items-center justify-content-center">
          <h2>Education</h2>
          <div className="table-container">
            <Table
              striped bordered hover variant="dark"
              className="table mt-4 w-50 text-center"
              style={{ borderRadius: "6px", overflow: "hidden" }}
            >
              <thead>
                <tr className="table-dark">
                  <th scope="col">Institution</th>
                  <th scope="col">Year</th>
                  <th scope="col">Course</th>
                </tr>
              </thead>
              <tbody className="text-center align-middle">
                <tr className=" table-group-divider">
                  <td>
                   <span>EPICODE</span>
                  </td>
                  <td>2025</td>
                  <td className="desc">
                    <span>Bootcamp Full Stack Web Development</span>
                  </td>
                </tr>
                <tr>
                  <td>
                   <span>Life Learning</span>
                  </td>
                  <td>2018</td>
                  <td className="desc">
                    Master in Programming and web development
                  </td>
                </tr>
                <tr>
                  <td>
                   <span>Universitá degli Studi della Tuscia</span>
                  </td>
                  <td>2014</td>
                  <td className="desc">
                    Master in Business Communication and Marketing
                  </td>
                </tr>
                <tr>
                  <td>
                   <span>Cambridge Institute</span>
                  </td>
                  <td>2011</td>
                  <td className="desc">
                    Certificate of English (FCE) - B2 Level
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Career;
