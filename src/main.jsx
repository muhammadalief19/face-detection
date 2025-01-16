import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./pages/Home.jsx";

const value = {
  appendTo: "self",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App cmp={<Home />} />} />
      </Routes>
    </Router>
  </StrictMode>
);
