/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { RxMagnifyingGlass } from "react-icons/rx";
import { HiOutlineMusicNote } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";
import { BsChat, BsThreeDots, BsFillChatFill } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";

const Simplespan = styled.span`
  font-size: 11px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 20px;
  display: flex;
  width: 20px;
  height: 20px;
  background: #ff5400;
  margin-left: auto;
`;

const Login = () => {
  return (
    <div className="container">
      <header className="chats-box">
        <p className="chats-title">Chats</p>
        <div className="chats-icon-box">
          <RxMagnifyingGlass size={25} />
          <BsChat size={25} />
          <HiOutlineMusicNote size={25} />
          <LuSettings size={25} />
        </div>
      </header>
      <div className="chat-wrap">
        <div className="kakao-icon">
          <RiKakaoTalkFill size={35} />
        </div>
        <div className="chat-box">
          <p className="chat-title">KakaoTalk</p>
          <p className="chat-desc">Please check My Kakao Account Info</p>
        </div>
        <div className="chat-sub-box">
          <p className="chat-sub-desc">21:22</p>
          <Simplespan>1</Simplespan>
        </div>
      </div>
      <div className="menu-box">
        <ul className="menu-list">
          <li className="menu-icon">
            <AiOutlineUser size={25} />
          </li>
          <li className="menu-icon">
            <Simplespan className="menu-icon-chat">1</Simplespan>
            <BsFillChatFill size={23} />
          </li>
          <li className="menu-icon">
            <RxMagnifyingGlass size={25} />
          </li>
          <li className="menu-icon">
            <BsThreeDots size={25} />
            <span className="red-dot"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
