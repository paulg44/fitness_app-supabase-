// Imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default App;
