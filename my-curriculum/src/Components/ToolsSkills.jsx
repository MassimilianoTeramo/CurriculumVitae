import { Container, Row, Col, Pagination, Card, Button } from "react-bootstrap";
import { FaCss3, FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
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





const Languages = [
    { name: "English", icon: <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg`} alt="UK" width={73} height={50} /> },
    { name: "Italian", icon: <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg`} alt="Italy" width={73} height={50} /> },
    { name: "Spanish", icon: <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg`} alt="Spanish" width={73} height={50} />  },
    { name: "German", icon: <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg`} alt="Spanish" width={73} height={50} /> },
    { name: "French", icon: <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg`} alt="Spanish" width={73} height={50} /> }
];

const DesignTools = [
    { name: "Affinity Designer", icon: <img src={AD} alt="Affinity Designer" width={65} height={65} /> },
    { name: "Affinity Photo", icon: <img src={AP} alt="Affinity Photo" width={65} height={65} /> },
    { name: "Adobe Illustrator", icon: <img src={Ill} alt="Adobe Illustrator" width={65} height={65} /> },
    { name: "Adobe Photoshop", icon: <img src={Pho} alt="Adobe Photoshop" width={65} height={65} /> },
    { name: "GIMP", icon: <img src={Gimp} alt="GIMP" width={65} height={65} /> }
]

const ToolsSkills = () => {
    return (
        <Container>
          <Row className="my-5 py-5 d-flex justify-content-center">
            <div className="text-start">
                <h2 className="mb-3">Tools & Skills</h2>
                <p className="mb-4">Here are some of the tools and skills I have acquired during my studies and work experience.</p>
                <Row className="d-flex">
                
                        <Col md={6} className="d-flex flex-column justify-content-space-around gap-4 mt-2">
                        <h3 className="mt-4">Front-End</h3>
                        <div className="d-flex justify-content-space-around gap-4 mt-2">
                            <Button className="mt-3 p-3 toolsBtn"> <FaReact size={35} /></Button>
                            <Button className="mt-3 p-3 toolsBtn"> <FaHtml5 size={35} /></Button>
                            <Button className="mt-3 p-3 toolsBtn"> <FaCss3 size={35} /></Button>
                            <Button className="mt-3 p-3 toolsBtn"> <DiJavascript size={35} /></Button>
                            <Button className="mt-3 p-3 toolsBtn"> <FaBootstrap size={35} /></Button>   
                        </div>
                    
                        </Col>
            

                        <Col md={6} className="d-flex flex-column justify-content-space-around gap-4 mt-2">
                        <h3 className="mt-4">Languages</h3>
                        <div className="d-flex justify-content-space-around gap-4 mt-2">
                            {Languages.map((lang, idx) => (
                                <Button
                                    key={lang.name}
                                    className="mt-3 p-3 langButton py-0 px-0"
                                    title={lang.name}>

                                    {lang.icon}
                                </Button>
                            ))}
                        </div>
                   
                        </Col>


            </Row>
            <Row className="d-flex flex-row align-items-center">
                <Col md={6} className="d-flex flex-column gap-2 mt-4">
                    <h3 className="mt-5">Back-End</h3>
                    <div className="d-flex justify-content-space-around gap-4 mt-2">
                        <Button className="mt-3 p-3 toolsBtn"> <FaNodeJs size={35} /></Button>
                        <Button className="mt-3 p-3 toolsBtn"> <BiLogoMongodb size={35} /></Button>
                        <Button className="mt-3 p-3 toolsBtn"> <SiCloudinary size={35} /></Button>
                    </div>
                </Col>
                 <Col md={6} className="d-flex flex-column gap-2 mt-5">
                        <h3 className="mt-4">Design</h3>
                        <div className="d-flex justify-content-space-around gap-4 mt-2">
                            {DesignTools.map((Dts) => (
                                <Button
                                    key={Dts.name}
                                    className="mt-3 p-3 langButton py-0 px-0"
                                    title={Dts.name}>

                                    {Dts.icon}
                                </Button>
                            ))}
                        </div>
                   
                        </Col>
            </Row>
           
            </div>
            <Col md={6} className="text-end"></Col>
        </Row>
        <hr className="my-5"></hr>
        </Container>
    );
}
export default ToolsSkills;
