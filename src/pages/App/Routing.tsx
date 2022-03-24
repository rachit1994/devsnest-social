import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import Signup from "pages/Signup";

const Routing: FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </Router>
);

export default Routing;
