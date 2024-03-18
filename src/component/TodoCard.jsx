import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/slices/todosSlice";
import UpdatePostModal from "./UpdatePostModal";



export default function TodoCard({ todo }) {
  const completed = todo.completed;
  const border = completed ? "success" : "danger";



  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const dispatch = useDispatch();


  const DeleteTodo = () => {
    dispatch(deleteTodo({ id: todo.id }))
  }

  const openUpdateModal = () => {
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
  }

  // timer logic
  const [elapsedTime, setElapsedTime] = useState(todo.time * 60000);
  const [isPaused, setIsPaused] = useState(true);
  const [savedInterval, setSavedInterval] = useState(null);

  const runTimer = () => {
    setIsPaused(false); //timer is now running
  }

  useEffect(() => {
    setElapsedTime(todo ? todo.time * 60000 : 0);
  }, [todo]); // updates the todo timer value when submit, it runs whenever todo array is updated


  useEffect(() => {
    if (!isPaused) {
      const intervalID = setInterval(() => {
        setElapsedTime((prevTime) => prevTime - 100)
      }, 100);
      setSavedInterval(intervalID)
    }
    return () => {
      clearInterval(savedInterval);  //prevents user from 'speeding' up the timer if spamming the play button
    };
  }, [isPaused])


  //updates the todo to completed if elapsed time is < 0
  useEffect(() => {
    if (elapsedTime < 0) {
      dispatch(updateTodo({
        id: todo.id,
        title: todo.title,
        description: todo.description,
        completed: true,
      }));
      clearInterval(savedInterval);
    }
  }, [elapsedTime])

  const pauseTimer = () => {
    setIsPaused(true);
    clearInterval(savedInterval);
    console.log(elapsedTime)
  }

  const resetTimer = () => {
    setIsPaused(true);
    clearInterval(savedInterval);
    setElapsedTime(todo.time * 60000);
    console.log(elapsedTime)
  }

  function convertMS({ elapsedTime }) {
    if (elapsedTime < 0) {
      return 0
    }
    return Math.floor((elapsedTime / 1000) % 60) //removes the decimal representation from displaying
  }


  function getMinutes({ elapsedTime }) {
    if (elapsedTime < 0) {
      return 0
    }
    return Math.floor(elapsedTime / 1000 / 60)
  }


  return (
    <>
      <Card style={{ borderWidth: '3px' }} border={border} className="my-3" >
        <Card.Header>{!completed && "Not"} Completed</Card.Header>
        <Card.Body>
          <Card.Title>{todo.title}</Card.Title>
          <Card.Text style={{ whiteSpace: 'pre-line' }} >{todo.description}</Card.Text>
          <p>Timer: {getMinutes({ elapsedTime })} minutes {convertMS({ elapsedTime })} seconds</p>

          <Button onClick={runTimer} >
            <i className='bi bi-play'></i>
          </Button>

          <Button onClick={pauseTimer} className="mx-2">
            <i className='bi bi-pause-fill'></i>
          </Button>

          <Button onClick={resetTimer} className='mx-2' >
            <i className='bi bi-arrow-clockwise'  ></i>
          </Button>

          <Button
            variant="secondary"
            onClick={openUpdateModal}
            className="ms-2" >
            <i className="bi bi-pencil" ></i>
          </Button>

          <Button variant="danger" onClick={DeleteTodo} className="ms-2" >
            <i className="bi bi-trash3"></i>
          </Button>

        </Card.Body>
      </Card >

      <UpdatePostModal
        show={showUpdateModal}
        handleClose={closeUpdateModal}
        todoId={todo.id}
      />

    </>
  )
}