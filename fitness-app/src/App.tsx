// Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";
import EnterLogForm from "./Components/EnterLogForm/EnterLogForm";
import RegisterForm from "./Components/RegisterForm/RegisterForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/enterLogs" element={<EnterLogForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
      </Routes>
    </>
  );
}

export default App;
