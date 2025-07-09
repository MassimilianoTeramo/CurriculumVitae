import { Container, Row, Col, Pagination, Card, Button } from "react-bootstrap";
import { FaCss3, FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { DiJavascript } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiCloudinary } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { saveAs } from "file-saver";

export function DownloadFile() {
  const saveFile = () => {
    saveAs("/downloadCV/CvMTeramo2025.pdf", "CV_Massimiliano_Teramo.pdf");
  };
  return (
    <Button className="buttonMain" onClick={saveFile}>
      <MdOutlineFileDownload size={20} className="me-2" />
      Download CV
    </Button>
  );
}

const Main = () => {
  return (
    <Container>
      <Row className="firstSec">
        <Col md={8} className="text-start px-5">
          <div className="mainTitle">
            <div>
              <h1>Hi I'm Max</h1>
            </div>
            <Button className="me-2 d-flex align-items-center justify-content-around gap-2 openTo">
              <GoDotFill className="dotOpenTo" />
              OPEN TO WORK
            </Button>
          </div>
          <div className="descriptionMain">
            <p>
              I am a junior Full-Stack developer, with knowledges in HTML, CSS,
              Javascript, React, Bootstrap and MongoDB.
            </p>
            <p>
              I'm looking for a job as a Front-End developer, but I'm open to
              any opportunity to grow professionally.
            </p>
          </div>

          <div className="buttonMainDiv d-flex flex-column flex-md-row justify-content-start gap-2 gap-md-4 mt-4">
            <DownloadFile />
            <Button
              className="p-3 buttonMain"
              href="https://github.com/MassimilianoTeramo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </Button>
            <Button className="p-3 buttonMain">Contact</Button>
          </div>
        </Col>
        <Col
          xs={12}
          md={4}
          className="mb-4 mb-md-0 d-flex justify-content-center order-1 order-md-2"
        >
          <Card style={{ width: "18rem" }} className="cardMain">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Website created with React and Bootstrap.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};
export default Main;
