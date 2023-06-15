/* eslint-disable */

import "./App.css";
import styled from "styled-components";

const SimpleInput = styled.input`
  font-size: 16px;
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
`;

function App() {
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
        <SimpleBtn>Log in</SimpleBtn>
        <SimpleBtn>Sign Up</SimpleBtn>
        <p className="find-link-desc">Find Kakao Account or Password</p>
      </div>
    </div>
  );
}

export default App;
