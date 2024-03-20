import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";


//firebase auth modules


import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";



export default function ModalHome({ setShow, onHide, modal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  //login and signup handlers

  const auth = getAuth();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      navigate('/home');
    }
  }, [currentUser, navigate])


  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(res.user)
    } catch (error) {
      console.error(error)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Modal show={setShow} onHide={onHide} centered animation={false}  >
        <Modal.Body className="p-4" >
          <h2>{modal === 'SignUp' ? 'Create an account' : 'Login'}</h2>
          <Form
            onSubmit={modal === 'SignUp' ? handleSignUp : handleLogin}
          >
            <Form.Group className="my-3" >
              <Form.Control
                required
                type='email'
                controlId='basicEmailForm'
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="my-3" >
              <Form.Control
                required
                type='password'
                controlId='basicPasswordForm'
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button className="rounded-pill" type="submit">{modal === 'SignUp' ? 'Sign Up' : 'Login'}</Button>
          </Form>
        </Modal.Body>

      </Modal>
    </>
  )
}