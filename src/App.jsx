import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import AddEmployee from "./Components/AddEmployee/AddEmployee";
import EditEmployee from "./Components/EditEmployee/EditEmployee";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/editEmployee/:id" element={<EditEmployee />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
