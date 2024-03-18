import { BrowserRouter, NavLink, Outlet, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css'
import useLocalStorage from "use-local-storage";
import AuthContext from "./context/authContext";
import userDataContext from "./context/userDataContext";
import Auth from "./Auth/Auth";
import Dashboard from "./pages/Dashboard";
import { useContext } from "react";
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
            <NavLink to="/login" className="nav-link">Login</NavLink>
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

function LayoutLogIn() {
  const setToken = useContext(AuthContext).setToken;


  return (
    <>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/home/dashboard" className="navbar-brand">EXCELR8</NavLink>
          <Nav className="me-auto">
            <NavLink to="/home/profile" className="nav-link">Profile</NavLink>
            <NavLink to="/home/add" className="nav-link">Workout</NavLink>
            <NavLink className="nav-link">Log Out</NavLink>
          </Nav>
        </Container>
      </Navbar> */}

      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Container>
          <NavLink to="/home/dashboard" className="navbar-brand">EXCELR8</NavLink>
          <Nav className="me-auto">
            <NavLink to="/home/statistics" className="nav-link">Statistics</NavLink>
            <NavLink to="/home/BMICalculator" className="nav-link">BMI</NavLink>
          </Nav>
          <Nav>
            <NavLink
              onClick={() => {
                setToken(null);
              }
              }
              className="nav-link">Log Out</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default function App() {
  const [token, setToken] = useLocalStorage('token', null);
  const [userData, setUserData] = useLocalStorage('userData', []);


  return (
    <div className="gradient-background" >
      <StyledText>
        <BrowserRouter>
          <AuthContext.Provider value={{ token, setToken }} >
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
                  <Route path='/login' element={<Login />} ></Route>
                  <Route path='/contact' element={<Contact />} ></Route>
                  <Route path='*' element={<ErrorPage />} ></Route>

                </Route>

                {/* Register Route */}
                <Route path="/register" element={<LayoutRegister />} >

                  <Route path="/register" element={<Register />} ></Route>

                </Route>

                {/* Login Route */}
                <Route path="/home" element={
                  <LayoutLogIn />
                } >

                  <Route
                    path="/home/dashboard"
                    element={
                      <>

                        <Auth>
                          <Dashboard />
                        </Auth>
                      </>
                    } />

                  <Route
                    path="/home/BMICalculator"
                    element={
                      <Auth>
                        <BMICalculator />
                      </Auth>
                    } />

                  <Route
                    path="/home/statistics"
                    element={
                      <Auth>
                        <Statistics />
                      </Auth>
                    } />




                </Route>
              </Routes>

            </userDataContext.Provider>
          </AuthContext.Provider>
        </BrowserRouter>
      </StyledText>
    </div>

  )
}