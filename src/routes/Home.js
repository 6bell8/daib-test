/* eslint-disable */

import "../App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";

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

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title-box">
        <p className="title">Welcome to KakaoTalk</p>
        <div className="desc-box">
          <p className="desc">If you have a Kakao Account,</p>
          <p className="desc">log in with your email or phone number.</p>
        </div>
      </div>
      <div className="input-box">
        <SimpleInput placeholder="Email or phone number"></SimpleInput>
        <SimpleInput placeholder="Password"></SimpleInput>
      </div>
      <div className="btn-box">
        <SimpleBtn onClick={() => navigate("/login")}>Log in</SimpleBtn>
        <SimpleBtn>Sign Up</SimpleBtn>
        <p className="find-link-desc">Find Kakao Account or Password</p>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Home;
