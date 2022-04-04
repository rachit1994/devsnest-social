import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Home from "pages/Home";

const Routing: FC = () => (
  <Router basename="/devsnest-social">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </Router>
);

export default Routing;
