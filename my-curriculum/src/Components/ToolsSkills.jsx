import { Container, Row, Col, Pagination, Card, Button } from "react-bootstrap";
import { FaCss3, FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { DiJavascript } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiCloudinary } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

const ToolsSkills = () => {
    return (
        <Container>
          <Row className="my-5 py-5 d-flex justify-content-center">
            <Col md={6} className="text-start px-5">
            <h2>Tools & Skills</h2>
            <p>Here are some of the tools and skills I have acquired during my studies and work experience.</p>
            <div className="d-flex flex-column gap-2">
            <h3 className="mt-4">Front-End</h3>
                <div className="d-flex justify-content-space-around gap-4 mt-2">
                <Button className="mt-3 p-3 toolsBtn"> <FaReact size={35} /></Button>
                <Button className="mt-3 p-3 toolsBtn"> <FaHtml5 size={35} /></Button>
                <Button className="mt-3 p-3 toolsBtn"> <FaCss3 size={35} /></Button>
                <Button className="mt-3 p-3 toolsBtn"> <DiJavascript size={35} /></Button>
                <Button className="mt-3 p-3 toolsBtn"> <FaBootstrap size={35} /></Button>
                </div>
            </div>
            <div className="d-flex flex-column gap-2 mt-5">
            <h3 className="mt-4">Back-End</h3>
                <div className="d-flex justify-content-space-around gap-4 mt-2">
                <Button className="mt-3 p-3 toolsBtn"> <FaNodeJs size={35} /></Button>
                <Button className="mt-3 p-3 toolsBtn"> <BiLogoMongodb size={35} /></Button>
                <Button className="mt-3 p-3 toolsBtn"> <SiCloudinary size={35} /></Button>
                </div>
            </div>
            </Col>
            <Col md={6} className="text-end"></Col>
        </Row>
        <hr className="my-5"></hr>
        </Container>
    );
}
export default ToolsSkills;
