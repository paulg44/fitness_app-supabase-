// Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
