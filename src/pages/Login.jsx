import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import userDataContext from '../context/userDataContext';
import AuthContext from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import './Login.css'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginTitle, setLoginTitle] = useState('Login')
  const userData = useContext(userDataContext).userData;

  const setToken = useContext(AuthContext).setToken;


  // State for the alert message
  const [alertMessage, setAlertMessage] = useState('');

  //conditionally render welcome back (username) and Login title


  const navigate = useNavigate();

  function userLogIn() {
    //check user credentials = finding the userdata object that has the same as the email login form
    const emailLogin = userData.find((userDatum) =>
      userDatum.email === email
    )

    if (emailLogin) {
      if (emailLogin.email === email && emailLogin.password === password) {

        setLoginTitle(`Welcome Back ${emailLogin.username}!`);
        setToken(`${Math.random}`)
        setTimeout(() => {
          navigate('/home/dashboard');
        }, 2000)

      } else {
        setAlertMessage('Invalid Credentials!');
      }
    } else {
      setAlertMessage('User not found!');
    }
  }

  //when user logs in, create token

  return (
    <Container style={{ width: '400px', color: 'white' }}>
      <Form
        className='my-5'
        onSubmit={(e) => {
          e.preventDefault();
          userLogIn();
        }}
      >
        {/* Alert message */}
        {alertMessage && <div className="alert alert-danger">{alertMessage}</div>}

        {/* make it conditional */}

        <h1  >{loginTitle}</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label  >Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            <span style={{ color: 'white' }} > Not a member? You can register </span><a href='register'> here</a>
          </Form.Text>
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
          Jack In
        </Button>
      </Form>
    </Container>
  );
}

export default Login;