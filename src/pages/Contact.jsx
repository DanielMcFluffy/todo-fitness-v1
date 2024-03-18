import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";


export default function Contact() {
  //local useState; maybe can pass to global state manager (redux)
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  return (
    <Container className="my-3" style={{ color: "whitesmoke" }}>
      <h1>Contact us!</h1>
      <Form style={{ width: '80%' }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Write us a message:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="We are always reading your feedback to improve our services!"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        //add function
        >Submit</Button>
      </Form>
    </Container>
  );
}




