import { Modal, Col, Card, Button, Container, Row } from "react-bootstrap";
import CapstoneImage from "../Assets/Projects/CapstoneImg.png";
import BlogImage from "../Assets/Projects/BlogImg.png";

const projects = [
    {
    title: "Capstone Project",
    description: "Final project for the Full Stack Developer course at EPICODE. Realised in React, Node.js, Express, MongoDB and Bootstrap.",
    image: CapstoneImage,
    link: "https://capstone-project-blush-sigma.vercel.app",
    },
    {
    title: "Blog",
    description: "A blog application built with React and Node.js, allowing users to create, read, update, and delete posts.",
    image: BlogImage,
    link: "https://blog-epicode-2.vercel.app/",    
    }
]

function Projects() {
    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">Projects</h1>
            <Row className="justify-content-around">
                {projects.map((project, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="my-5">
                        <Card className="projectCard">
                            <Card.Img variant="top" src={project.image} className="projectImg" />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text className="my-4">{project.description}</Card.Text>
                                <Button 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    className="projectsBtn">
                                        <strong>Go to the website</strong>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row> 
            </Container>   
)}
export default Projects;