import { useContext } from "react";
import AuthContext from "../context/authContext";
import { Navigate } from "react-router-dom";



export default function Auth({ children }) {
  const token = useContext(AuthContext).token

  if (token) {
    return children
  } else {
    return <Navigate to='/login' />
  }
}