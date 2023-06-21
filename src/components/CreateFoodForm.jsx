import { useState } from "react";
import foodService from "../services/food.service";
import { Button, Form, Modal } from "react-bootstrap";

export default function CreateFoodForm() {
  const [name, setName] = useState("");
  const [kcal, setKcal] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await foodService.create({ name, kcal });
      setName("");
      setKcal("");
      console.log("Food created successfully!");
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Crear Food
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="kcal">
              <Form.Label>Kcal:</Form.Label>
              <Form.Control
                type="number"
                value={kcal}
                onChange={(e) => setKcal(e.target.value)}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Crear
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
