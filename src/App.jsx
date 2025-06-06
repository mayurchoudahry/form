import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ValidationForm from "./components/ValidationForm"
import SuccessPage from "./components/SuccessPage"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ValidationForm />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
