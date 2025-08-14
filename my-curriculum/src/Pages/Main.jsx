import { Container, Row, Col, Pagination, Card, Button } from "react-bootstrap";
import { FaCss3, FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export function DownloadFile() {
  const saveFile = () => {
    saveAs("/downloadCV/Resume-Massimiliano-Teramo.pdf", "CV_Massimiliano_Teramo.pdf");
  };
  return (
    <Button className="buttonMain" onClick={saveFile}>
      <MdOutlineFileDownload size={20} className="me-2" />
      Download CV
    </Button>
  );
}

const upToWork = {
  animate: {
    scale: [1,  1.3,  1],
  },
  transition: {
    duration: 1.5,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 0.1,
  }
};

const Main = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row className="firstSec">
        <Col md={8} className="text-start px-5">
          <div className="mainTitle">
            <div className="me-3"> 
              <h1>Hi I'm Max</h1>
            </div>
            <Button className="me-2 d-flex align-items-center justify-content-around gap-2 openTo">
              <motion.div className="dotOpenTo">
                <motion.span
                  variants={upToWork}
                  animate="animate"
                  transition={upToWork.transition}
                  style={{ display: "inline-block" }}
                >
                  <GoDotFill className="dotOpenTo" />
                </motion.span>
              </motion.div>
              OPEN TO WORK
            </Button>
          </div>
          <div className="descriptionMain my-4">
            <p>
              I am a junior Full-Stack developer, with knowledges in HTML, CSS,
              Javascript, React, Bootstrap and MongoDB.
            </p>
            <p>
              I'm looking for a job as a Front-End developer, but I'm open to
              any opportunity to grow professionally.
            </p>
          </div>

          <div className="buttonMainDiv d-flex flex-md-row justify-content-center gap-2 gap-md-4 mt-5">
            <DownloadFile />
            <Button
              className="p-3 buttonMain"
              href="https://github.com/MassimilianoTeramo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </Button>
            <Button className="p-3 buttonMain" onClick={() => navigate(`/Contact`)}>Contact</Button>
          </div>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};
export default Main;
