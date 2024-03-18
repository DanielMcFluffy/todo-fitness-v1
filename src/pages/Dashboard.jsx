import { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown } from "react-bootstrap";
import AddPostModal from "../component/AddPostModal";
import { useDispatch, useSelector } from "react-redux";
import TodoCard from "../component/TodoCard";
import UpdatePostModal from "../component/UpdatePostModal";
import { arnoldSplitDay1, arnoldSplitDay2, arnoldSplitDay3, arnoldSplitDay4, customWorkout, pushPullLegDay1, pushPullLegDay2, pushPullLegDay3, upperLowerSplitDay1, upperLowerSplitDay2 } from "../features/slices/todosSlice";

export default function Dashboard() {

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const [showUpdatedModal, setShowUpdatedModal] = useState(false);
  const closeUpdatedModal = () => setShowUpdatedModal(false);
  // const openUpdatedModal = () => setShowUpdatedModal(true); 
  //pass in openUpdatedModal into the TodoCard

  const todos = useSelector(state => state.todos)

  useEffect(() => {
    setShowModal(false);
  }, [todos]) //closes modal after adding todo and add todo card


  const [selectedValue, setSelectedValue] = useState(null); //tracks our value for the dropdown component

  const handleSelect = (e) => {
    setSelectedValue(e.target.value);
  }; // it's the onselect event handler for the dropdown


  return (
    <>

      <Dropdown style={{ backgroundColor: 'grey', color: 'white', paddingLeft: '30px', display: 'flex', gap: '10px' }}>
        <select
          style={{ backgroundColor: 'grey', color: 'white', padding: '10px', paddingLeft: '30px', marginRight: '10px' }}
          onChange={handleSelect}
        >
          <option>Select your Workout Split</option>
          <option value="2 day split">Upper-Abs-Lower (2 Day Split)</option>
          <option value="3 day split">Push-Pull-Leg (3 Day Split)</option>
          <option value="4 day split">Arnold Split (4 Day Split)</option>
          <option value="custom workout">Custom Workout</option>
        </select>

        {(selectedValue === 'custom workout') && <>
          <Button onClick={() => {
            dispatch(customWorkout())
          }} >Clear Workout</Button>

        </>}


        {(selectedValue === '2 day split') && <>
          <Button onClick={() => {
            dispatch(upperLowerSplitDay1());
          }} >Day 1</Button>
          <Button onClick={() => {
            dispatch(upperLowerSplitDay2());
          }} >Day 2</Button>
        </>
        }
        {(selectedValue === '3 day split') && <>
          <Button onClick={() => {
            dispatch(pushPullLegDay1());
          }} >Day 1</Button>
          <Button onClick={() => {
            dispatch(pushPullLegDay2());
          }} >Day 2</Button>
          <Button onClick={() => {
            dispatch(pushPullLegDay3());
          }} >Day 3</Button>
        </>
        }
        {(selectedValue === '4 day split') && <>
          <Button onClick={() => {
            dispatch(arnoldSplitDay1());
          }} >Day 1</Button>
          <Button onClick={() => {
            dispatch(arnoldSplitDay2());
          }} >Day 2</Button>
          <Button onClick={() => {
            dispatch(arnoldSplitDay3());
          }} >Day 3</Button>
          <Button onClick={() => {
            dispatch(arnoldSplitDay4());
          }} >Day 4</Button>
        </>
        }
        <Button onClick={openModal} >Add a workout</Button>


      </Dropdown>


      <div style={{ display: 'flex', flexWrap: 'wrap' }} >

        {todos.map((todo) => (

          <Col style={{ width: 'auto' }} className="mx-2 my-3" md={3} key={todo.id}  >
            <TodoCard todo={todo} />
          </Col>

        ))}

        <Col >
          <Container>
            {/* modal to add todo */}
            <AddPostModal show={showModal} handleClose={closeModal} />

            {/* modal to update todo */}
            <UpdatePostModal show={showUpdatedModal} handleClose={closeUpdatedModal}

            />
          </Container>
        </Col>
      </div>

    </>
  )
}
