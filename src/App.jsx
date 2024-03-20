import { BrowserRouter, NavLink, Outlet, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import './App.css'
import useLocalStorage from "use-local-storage";

import userDataContext from "./context/userDataContext";
import Dashboard from "./pages/Dashboard";
import BMICalculator from "./pages/BMICalculator";
import LandingEffect from "./component/LandingEffect";

import styled from "styled-components";
import Statistics from "./pages/Statistics";


const StyledText = styled.h1` 
    font-family: "Kode Mono", sans-serif; 
    font-size: 15px; 
`;

function LayoutLogOut() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="navbar-brand">
            EXCELR8
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />

    </>
  )
}

function LayoutRegister() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Container >
            <Nav>
              <Navbar.Brand href="/">
                Welcome to EXCELR8 <span className="custom-muted">- Your #1 Workout App!</span>
              </Navbar.Brand>
            </Nav>
          </Container>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

//listening to auth status

import { getAuth } from "firebase/auth";
import { useContext, useEffect } from "react";
import { AuthContext, AuthProvider } from "./component/AuthProvider";

import { useNavigate } from "react-router-dom";



function LayoutLogIn() {

  const auth = getAuth();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  //check if currentUser is logged in

  useEffect(() => {
    if (!currentUser) {
      navigate('/'); //redirect to login
    }

  }, [currentUser, navigate])

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <>


      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Container>
          <NavLink to="/home/dashboard" className="navbar-brand">EXCELR8</NavLink>
          <Nav className="me-auto">
            <NavLink to="/home/statistics" className="nav-link">Statistics</NavLink>
            <NavLink to="/home/BMICalculator" className="nav-link">BMI</NavLink>
          </Nav>
          <Nav>
            <NavLink
              onClick={handleLogout}
              className="nav-link">Log Out</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default function App() {

  const [userData, setUserData] = useLocalStorage('userData', []);


  return (
    <div className="gradient-background" >
      <StyledText>
        <AuthProvider>
          <BrowserRouter>

            <userDataContext.Provider value={{ userData, setUserData }} >
              <Routes>


                {/* LogOut Route */}
                <Route path='/' element={<LayoutLogOut />} >

                  <Route index element={
                    <>
                      <LandingEffect />
                      <Home />
                    </>
                  }></Route>
                  <Route path='/contact' element={<Contact />} ></Route>
                  <Route path='*' element={<ErrorPage />} ></Route>

                </Route>

                {/* Register Route */}
                <Route path="/register" element={<LayoutRegister />} >


                </Route>

                {/* Login Route */}
                <Route path="/home" element={
                  <LayoutLogIn />
                } >

                  <Route
                    path="/home/dashboard"
                    element={
                      <>


                        <Dashboard />

                      </>
                    } />

                  <Route
                    path="/home/BMICalculator"
                    element={

                      <BMICalculator />

                    } />

                  <Route
                    path="/home/statistics"
                    element={

                      <Statistics />

                    } />




                </Route>
              </Routes>

            </userDataContext.Provider>
          </BrowserRouter>
        </AuthProvider>
      </StyledText>
    </div>

  )
}