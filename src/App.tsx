import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./components/mainPage/MainPage";
import RecipePage from "./components/recipesPage/recipePage";

function App() {
  return (
    <Router>
      <div style={{backgroundColor: "#FFF3E0",minHeight: "100vh" }}>
      <Navbar />
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/recipe" element={<RecipePage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
