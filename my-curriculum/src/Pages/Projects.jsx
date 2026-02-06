import { Modal, Col, Card, Button, Container, Row } from "react-bootstrap";
import CapstoneImage from "../Assets/Projects/CapstoneImg.png";
import BlogImage from "../Assets/Projects/BlogImg.png";
import RestaurantImage from "../Assets/Projects/restaurant.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
    {
        title: "Capstone Project",
        description: "Final project for the Full Stack Developer course at EPICODE. Realised in React, Node.js, Express, MongoDB and Bootstrap.",
        image: CapstoneImage,
        link: "https://capstone-project-blush-sigma.vercel.app",
        gitHubLink: "https://github.com/MassimilianoTeramo/Capstone-Project.git",
    },
    {
        title: "Blog",
        description: "A blog application built in React and Node.js, allowing users (once logged in) to create, read, update, and delete posts and comments.",
        image: BlogImage,
        link: "https://blog-epicode-2.vercel.app/",
        gitHubLink: "https://github.com/MassimilianoTeramo/Blog-Epicode-2.git",
    },
    {
        title: "Restaurant Website",
        description: "A modern, responsive restaurant website built in React and Node.js, featuring seamless user experience and professional design.",
        image: RestaurantImage,
        link: "https://my-restaurant-ruddy.vercel.app/",
        gitHubLink: "https://github.com/MassimilianoTeramo/MyRestaurant.git",
    }
]

function Projects() {
    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">My Projects</h1>
            <Row className="projectsRow">
                {projects.map((project, index) => (
                    <Col key={index} xs={12} sm={12} md={6} lg={4} className="my-5 p-0">
                        <Card className="projectCard">
                            <Card.Img variant="top" src={project.image} className="projectImg" />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text className="my-4">{project.description}</Card.Text>
                                <div className="d-flex justify-content-between align-items-center my-3">
                                    <Button
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="projectsBtn">
                                        <strong>Go to the website</strong>
                                    </Button>

                                    <FaGithub
                                        size={35}
                                        className="projectGithub"
                                        onClick={() => window.open(project.gitHubLink, "_blank")}
                                    />
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
export default Projects;