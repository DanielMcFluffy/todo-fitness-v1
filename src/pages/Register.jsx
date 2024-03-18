import { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import userDataContext from '../context/userDataContext';
import { useNavigate } from 'react-router-dom';
// import AuthContext from '../context/authContext';


function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userData = useContext(userDataContext).userData;
  const setUserData = useContext(userDataContext).setUserData;
  const navigate = useNavigate();

  // State for the alert message
  const [alertMessage, setAlertMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  function registerUser() {
    const emailPresent = userData.find((userDatum) => userDatum.email === email);
    const usernamePresent = userData.find((userDatum) => userDatum.username === username);

    if (!emailPresent && !usernamePresent) {
      setUserData([...userData,
      { username: username, email: email, password: password }
      ]);
      setSuccessMessage(`Registration successful!\nRedirecting to login page...`);
      setAlertMessage(''); // Clear alert message if there's any
    } else if (usernamePresent && !emailPresent) {
      setAlertMessage('Username is already taken!');
    }
    else {
      setAlertMessage('Email is already registered!')
    }
  }

  useEffect(() => {
    setAlertMessage('');
    setUsername('');
    setPassword('');
    setEmail('');

    if (successMessage) {
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    }

  }, [userData, navigate, successMessage])


  return (
    <Container style={{ width: '400px', color: 'white' }}>
      <Form
        className='my-5'
        onSubmit={(e) => {
          e.preventDefault();
          setSuccessMessage('');
          registerUser()
        }}
      >
        {/* Alert message */}
        {alertMessage && <div className="alert alert-danger">{alertMessage}</div>}

        {successMessage && <div className="alert alert-success">{successMessage}</div>}

        <h1>Create an account</h1>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Create Username</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container >
  );
}

export default Register;