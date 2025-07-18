import { Container, Row, Col, Pagination, Card, Button } from "react-bootstrap";
import { FaCss3, FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiCloudinary } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import AP from "../Assets/AP.svg.png";
import AD from "../Assets/AD.svg.png";
import Ill from "../Assets/Ill.svg.png";
import Pho from "../Assets/Pho.svg.png";
import Gimp from "../Assets/gimp.svg.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Languages = [
  {
    name: "English",
    icon: (
      <img
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg`}
        alt="UK"
        width={73}
        height={50}
      />
    ),
  },
  {
    name: "Italian",
    icon: (
      <img
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg`}
        alt="Italy"
        width={73}
        height={50}
      />
    ),
  },
  {
    name: "Spanish",
    icon: (
      <img
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg`}
        alt="Spanish"
        width={73}
        height={50}
      />
    ),
  },
  {
    name: "German",
    icon: (
      <img
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg`}
        alt="Spanish"
        width={73}
        height={50}
      />
    ),
  },
  {
    name: "French",
    icon: (
      <img
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg`}
        alt="Spanish"
        width={73}
        height={50}
      />
    ),
  },
];

const DesignTools = [
  {
    name: "Affinity Designer",
    icon: <img src={AD} alt="Affinity Designer" width={65} height={65} />,
  },
  {
    name: "Affinity Photo",
    icon: <img src={AP} alt="Affinity Photo" width={65} height={65} />,
  },
  {
    name: "Adobe Illustrator",
    icon: <img src={Ill} alt="Adobe Illustrator" width={65} height={65} />,
  },
  {
    name: "Adobe Photoshop",
    icon: <img src={Pho} alt="Adobe Photoshop" width={65} height={65} />,
  },
  { name: "GIMP", icon: <img src={Gimp} alt="GIMP" width={65} height={65} /> },
];
const lastDesignIdx = DesignTools.length - 1;


const FrontEndTools = [
  { name: "React", type: "Front-End", icon: <FaReact size={35} /> },
  { name: "HTML5", type: "Front-End", icon: <FaHtml5 size={35} /> },
  { name: "CSS3", type: "Front-End", icon: <FaCss3 size={35} /> },
  { name: "JavaScript", type: "Front-End", icon: <DiJavascript size={35} /> },
  { name: "Bootstrap", type: "Front-End", icon: <FaBootstrap size={35} /> },
];

const BackEndTools = [
  {
    name: "NodeJS",
    type: "Back-End",
    icon: <FaNodeJs size={35} />,
  },
  {
    name: "MongoDB",
    type: "Back-End",
    icon: <BiLogoMongodb size={35} />,
  },
  {
    name: "Cloudinary",
    type: "Back-End",
    icon: <SiCloudinary size={35} />,
  },
];

const ToolsSkills = () => {
  const [activeButton, setActiveButton] = useState(null);
  return (
    <Container>
      <Row className="py-4 d-flex justify-content-center align-items-center">
        <div className="text-start py-4">
          <h2 className="mb-3">Tools & Skills</h2>
          <p className="mb-4">
            Here are some of the tools and skills I have acquired during my
            studies and work experience.
          </p>
          <Row className="d-flex align-items-center">
            <Col
              md={6}
              className="d-flex flex-column justify-content-space-around gap-4 mt-2"
            >
              <h3 className="mt-4">Front-End</h3>
              <div className="toolsCont d-flex justify-content-space-around gap-4 mt-2">
                <AnimatePresence>
                  {FrontEndTools.map((tool, idx) => (
                    <Button
                      key={idx}
                      className="mt-3 p-3 toolsBtn"
                      title={tool.type}
                      onMouseEnter={() => setActiveButton(tool.name)}
                      onMouseLeave={() => setActiveButton(null)}
                      style={{ position: "relative" }}
                    >
                      {tool.icon}
                      <AnimatePresence>
                        {activeButton === tool.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 15 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="toolLabel"
                          >
                            {activeButton}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>
                  ))}
                </AnimatePresence>
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex flex-column gap-4 mt-2 justify-content-space-around"
            >
              <h3 className="mt-4">Back-End</h3>
              <div className="toolsCont d-flex justify-content-space-around flex-wrap gap-4 mt-2">
                <AnimatePresence>
                  {BackEndTools.map((tool, idx) => (
                    <Button
                      key={idx}
                      className="mt-3 p-3 toolsBtn"
                      title={tool.type}
                      onMouseEnter={() => setActiveButton(tool.name)}
                      onMouseLeave={() => setActiveButton(null)}
                      style={{ position: "relative" }}
                    >
                      {tool.icon}
                      <AnimatePresence>
                        {activeButton === tool.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 15 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="toolLabel"
                          >
                            {activeButton}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>
                  ))}
                </AnimatePresence>
              </div>
            </Col>
          </Row>
          <Row className="d-flex flex-row align-items-center pb-3">
            <Col
              md={6}
              className="d-flex flex-column justify-content-space-around gap-4 mt-4"
            >
              <h3 className="mt-4">Languages</h3>
              <div className="toolsCont d-flex justify-content-space-around gap-4 mt-2">
                {Languages.map((lang, idx) => (
                  <Button
                    key={lang.name}
                    className="mt-3 p-3 langButton py-0 px-0"
                    title={lang.name}
                  >
                    {lang.icon}
                  </Button>
                ))}
              </div>
            </Col>
            <Col md={6} className="d-flex flex-column gap-2 mt-4">
              <h3 className="mt-4">Design</h3>
              <div className="toolsCont d-flex justify-content-space-around gap-4 mt-2">
                <AnimatePresence>
                  {DesignTools.map((Dts, idx) => (
                    <Button
                      key={Dts.name}
                      className="mt-3 p-3 desigButton py-0 px-0"
                      title={Dts.name}
                      onMouseEnter={() => setActiveButton(Dts.name)}
                      onMouseLeave={() => setActiveButton(null)}
                      style={{ position: "relative" }}
                    >
                      {Dts.icon}
                      <AnimatePresence>
                        {activeButton === Dts.name && (
                          <motion.div
                            initial={
                              idx === lastDesignIdx
                                ? { opacity: 1, y: -10 }
                                : { opacity: 1, y: 30 }
                            }
                            animate={
                              idx === lastDesignIdx
                                ? { opacity: 1, y: 0 }
                                : { opacity: 1, y: 15 }
                            }
                            exit={
                              idx === lastDesignIdx
                                ? { opacity: 0, y: -30 }
                                : { opacity: 0, y: -20 }
                            }
                            className="toolLabel2"
                          >
                            {activeButton}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>
                  ))}
                </AnimatePresence>
              </div>
            </Col>
          </Row>
        </div>
        <Col md={6} className="text-end"></Col>
      </Row>
      <hr />
    </Container>
  );
};
export default ToolsSkills;
