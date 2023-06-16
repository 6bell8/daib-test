/* eslint-disable */

import "./App.css";
import { Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Login from "./routes/Login";
import Home from "./routes/Home";

const SimpleInput = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 20px 5px;
  border: none;
  border-bottom: 1px solid #a8a8a8;
`;

const SimpleBtn = styled.button`
  font-size: 14px;
  width: 100%;
  padding: 20px 5px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
`;

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      {/* <Home/> */}
      <Route path="/" element={<Home />} />
      {/* <Login /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
