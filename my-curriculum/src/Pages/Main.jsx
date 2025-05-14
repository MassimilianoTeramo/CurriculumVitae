import { Container, Row, Col, Pagination, Card, Button } from "react-bootstrap";
import { FaCss3, FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { DiJavascript } from "react-icons/di";



const Main = () => {
  return (
    <Container>
      <Row className="my-5 py-5 d-flex justify-content-center">
        <Col md={8} className="text-start px-5">
            <div className="pb-5 d-flex justify-content-start gap-5 align-items-center">
          <h1>Hi I'm Max</h1>
          <Button className="me-2 d-flex align-items-center justify-content-around gap-2 openTo"><GoDotFill className="dotOpenTo"/>
          OPEN TO WORK</Button>
          </div>
          <p>I am a junior Full-Stack developer, with knowledges in HTML, CSS, Javascript, React, Bootstrap and MongoDB.</p>
            <p>I'm looking for a job as a Front-End developer, but I'm open to any opportunity.</p>
            <div className="d-flex justify-content-space-around gap-4 mt-4" >
            <Button className="mt-3 p-3 buttonMain"> <MdOutlineFileDownload size={20} className="me-2" />
            Download CV</Button>
            <Button className="mt-3 p-3 buttonMain"> <FaGithub size={24} /></Button>
            <Button className="mt-3 p-3 buttonMain">Contact</Button>
            </div>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr />
        <Row className="my-5 py-5 d-flex justify-content-center">
            <Col md={6} className="text-start px-5">
            <h1>Tools & Skills</h1>
            <p>Here are some of the tools and skills I have acquired during my studies and work experience.</p>
            <div className="d-flex flex-column gap-2">
            <h3 className="mt-4">Front-End</h3>
                <div className="d-flex justify-content-space-around gap-4 mt-2">
                <Button style={{color:"blue", border:"1px solid blue", boxShadow:"0px 0px 10px blue"}} className="mt-3 p-3 toolsBtn"> <FaReact size={35} /></Button>
                <Button className="mt-3 p-3 toolsBtn"> <FaHtml5 size={35} /></Button>
                <Button className="mt-3 p-3 toolsBtn"> <FaCss3 size={35} /></Button>
                <Button className="mt-3 p-3 toolsBtn"> <DiJavascript size={35} /></Button>
                </div>
            </div>
            </Col>
            <Col md={6} className="text-end"></Col>
        </Row>

    </Container>
  );
}
export default Main;