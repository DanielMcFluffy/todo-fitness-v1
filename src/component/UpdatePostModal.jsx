import { useState } from "react";
import { Col, Button, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../features/slices/todosSlice";


export default function UpdatePostModal({ show, handleClose, todoId }) {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [time, setTime] = useState(0);

  const todo = useSelector(state => state.todos.find((todo) => todo.id === todoId))


  // useEffect(() => {
  //   if (!show) {
  //     setTitle('');
  //     setDescription('');
  //     setCompleted(false);
  //     setTime(null);
  //   }
  // }, [show]);



  return (
    <Modal show={show} onHide={handleClose} size="lg" >
      <Modal.Header>
        <Modal.Title>Edit your workout</Modal.Title>
      </Modal.Header>
      <Form
        onSubmit={
          (e) => {
            e.preventDefault();
            if (todo) {
              dispatch(
                updateTodo({
                  id: todo.id,
                  title: title,
                  description: description,
                  completed: completed,
                  time: time,
                })
              );
              handleClose();
            }
          }
        }
      >
        <Modal.Body>
          <Row>
            <Col >
              {/* // add error message below */}
              {/* <span className="ms-3" >test</span> */}
              <Form.Control
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="my-3"
                placeholder="Workout name"
              />

              <Form.Control
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="my-3"
                as='textarea'
                rows={3}
                placeholder="Workout reps/sets etc"
              />

              <Form.Control
                style={{ width: 'auto' }}
                required
                value={time}
                onChange={(e) => {
                  setTime(e.target.value)
                }}
                className="my-3"
                as='input'
                type="number"
                // rows={3}
                placeholder="Enter time in (mins)"
              />

              <Form.Check
                type="checkbox"
                id="completed"
                label="Mark as completed"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
                className="mb-3"
              >
              </Form.Check>
              <Button type="submit" style={{ width: '100%' }} >
                Save Changes
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Form>
    </Modal>
  );
}