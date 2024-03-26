import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Authentication/Login/Login";
import Homepage from "./Components/Home/Home";
import Students from "./Components/Home/Student/Student";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Homepage />}
    </>
  );
}

export default App;
