import { Button, Col, Row } from "react-bootstrap"
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import ModalHome from "../component/ModalHome";

//google & facebook sign in auth modules
import {
  GoogleAuthProvider,
  // FacebookAuthProvider,
  getAuth,
  signInWithPopup
} from "firebase/auth";


//located at '/' route
export default function Home() {

  //sign in instances
  const googleProvider = new GoogleAuthProvider();
  // const facebookProvider = new FacebookAuthProvider();
  const auth = getAuth();

  //google sign in handler

  const handleGoogleSignUp = async () => {
    try {
      const res = await signInWithPopup(
        auth,
        googleProvider
      );
      GoogleAuthProvider.credentialFromResult(res);
      // const token = credential.accessToken;
      console.log(res.user);
    } catch (error) {
      console.error(error)
    }
  }
  // //facebook sign in handler
  // const handleFacebookSignUp = async () => {
  //   try {
  //     const res = await signInWithPopup(
  //       auth,
  //       facebookProvider
  //     );
  //     FacebookAuthProvider.credentialFromResult(res);
  //     // const token = credential.accessToken;
  //     console.log(res.user);
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  /////////////////////////////////////



  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  const [showModal, setShowModal] = useState(null);

  const handleSignUp = () => {
    setShowModal('SignUp');
  }

  const handleLogin = () => {
    setShowModal('Login');
  }

  const handleClose = () => {
    setShowModal(null);
  }
  return (

    <Container fluid style={{ color: 'whitesmoke' }}>
      <Row>
        <Col sm={6} >

          <Container  >
            <div

              style={{
                padding: '30px'
              }}>
              <h2 style={{ color: 'white' }}>
                Workout Statistics and News
              </h2>
              <h2 style={{ color: 'grey' }} >Interesting Gym Statistics 2023</h2>
              <Carousel activeIndex={index}
                onSelect={handleSelect}>
                <Carousel.Item interval={2000}>
                  <img className="d-block w-100" src=
                    "https://origympersonaltrainercourses.co.uk/files/img_cache/2111/450_450__1554909083_gymmeme11.jpg"
                    alt="gym guy" />

                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img className="d-block w-100" src=
                    "https://origympersonaltrainercourses.co.uk/files/img_cache/2114/450_450__1554909083_gymmeme14.jpg"
                    alt="lmao" />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img className="d-block w-100" src=
                    "https://scontent.fmkz1-2.fna.fbcdn.net/v/t1.6435-9/49785950_2550102575026966_6611081826876260352_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=qL300ZwnGy0AX8ncywz&_nc_pt=1&_nc_ht=scontent.fmkz1-2.fna&oh=00_AfAxVymzEpfkesZcCPwaO_CN5lTfko3uHldJATWdRtl5rQ&oe=66082969"
                    alt="bruh" />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img className="d-block w-100" src=
                    "https://www.bodybuildingmealplan.com/wp-content/uploads/Rest-Muscle-Meme.jpg " />
                </Carousel.Item>
              </Carousel>
            </div>
          </Container>

        </Col>
        <Col sm={6} >

          <Col>
            <h1>EXCELR8 your progress.</h1>

            <p style={{ fontSize: '40px' }} className="mt-5" >What are you waiting for?</p>

            <p style={{ fontSize: '32px', fontWeight: 'bold' }} className="mt-5" >Join today.</p>

            <Col className="d-flex flex-column align-items-center justify-content-center" >

              <Button style={{ width: '260px' }} variant="light" className="rounded-pill mb-3"
                onClick={handleGoogleSignUp}
              ><i className="bi bi-google"></i> Sign Up with Google</Button>

              {/* <Button style={{ width: '260px' }} variant="light" className="rounded-pill mb-4"
                onClick={handleFacebookSignUp}
              ><i className="bi bi-facebook"></i> Sign Up with Facebook</Button> */}
              <p>or</p>
              <Button
                style={{ width: '240px' }}
                variant="light"
                className="rounded-pill my-2"
                onClick={handleSignUp}
              >Create an account</Button>
              <p style={{ width: '240px', fontSize: '10px' }} >By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
              <p>Already have an account?</p>

              <Button
                style={{ width: '240px' }}
                variant="dark"
                className="rounded-pill my-2"
                onClick={handleLogin}
              >Sign In</Button>
            </Col>
          </Col>
          <ModalHome
            setShow={showModal !== null}
            onHide={handleClose}
            modal={showModal}
          />
        </Col>
      </Row>
    </Container>
  )
}