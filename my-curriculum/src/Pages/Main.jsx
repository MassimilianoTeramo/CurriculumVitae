import { Container, Row, Col, Pagination, Card, Button } from "react-bootstrap";
import { FaCss3, FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { DiJavascript } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiCloudinary } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";



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
            <p>I'm looking for a job as a Front-End developer, but I'm open to any opportunity to grow professionally.</p>
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
                Website created with React and Bootstrap.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr />
      

    </Container>
  );
}
export default Main;