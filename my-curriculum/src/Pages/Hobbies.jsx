import Cartina from "../Assets/Hobbies/alien.jpg";
import GnR from "../Assets/Hobbies/gnr.jpg";
import Cartina2 from "../Assets/Hobbies/cartina2.jpg";
import Cartina3 from "../Assets/Hobbies/cartina3.jpg";
import Door from "../Assets/Hobbies/door.jpg";
import Daft from "../Assets/Hobbies/daft.jpg";
import Street from "../Assets/Hobbies/street.jpg";
import Mia from "../Assets/Hobbies/mia.jpg";
import { Modal, Col, Card, Button } from "react-bootstrap";
import { RiInstagramFill } from "react-icons/ri";

import { useState } from "react";

const hobbies = [
  {
    id: 1,
    title: "CartAlien",
    image: Cartina,
  },
  {
    id: 2,
    title: "Guns N' Roses",
    image: GnR,
  },
  {
    id: 3,
    title: "Cartina 2",
    image: Cartina2,
  },
  {
    id: 4,
    title: "Cartina 3",
    image: Cartina3,
  },
  {
    id: 5,
    title: "Door",
    image: Door,
  },
  {
    id: 6,
    title: "Daft Punk",
    image: Daft,
  },
  {
    id: 7,
    title: "Street Art",
    image: Street,
  },
  {
    id: 8,
    title: "Mia Wallace",
    image: Mia,
  },
];

function Hobbies() {
  const [show, setShow] = useState(false);
  const [selectedHobby, setSelectedHobby] = useState(null);
  const handleClose = () => {
    setShow(false);
    setSelectedHobby(null);
  };
  const handleShow = (hobby) => {
    setSelectedHobby(hobby);
    setShow(true);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Hobbies</h1>
      <p className="text-center mt-3">
        Fun projects I made for family and friends
      </p>
      <div className="d-flex flex-wrap justify-content-around gap-5 mt-4">
        <div className="w-100">
          <div className="row">
            {hobbies.map((hobby) => (
              <Col key={hobby.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card className="mb-3 hobbyCard mx-auto">
                  <Card.Img
                    src={hobby.image}
                    alt={hobby.title}
                    className="hobbyImg"
                    onClick={() => handleShow(hobby)}
                  />
                  <Card.Body>
                    <Card.Title>{hobby.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </div>
        </div>
      </div>
      {selectedHobby && (
        <Modal
          show={show}
          onHide={handleClose}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {selectedHobby.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedHobby.image}
              alt={selectedHobby.title}
              style={{ width: "100%" }}
            />
          </Modal.Body>
        </Modal>
      )}
      <hr />
      <div className="text-center mt-5">
        <h4>If you want to see more, visit my instagram page:</h4>
        <Button className="mt-3 BtnInsta" href="https://www.instagram.com/massimiliano_teramo/" target="_blank" rel="noopener noreferrer">
          <RiInstagramFill className="InstaIcon" size={35}/>
        </Button>
        </div>
    </div>
  );
}

export default Hobbies;
