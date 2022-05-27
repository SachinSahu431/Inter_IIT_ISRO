import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
import pdf from "../static/User_Manual_T9.pdf";

export default (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href={pdf} target="_blank" rel="noreferrer">
        User Manual
      </a>
    </Menu>
  );
};
