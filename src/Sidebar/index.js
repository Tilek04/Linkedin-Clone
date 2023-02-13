import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20200805/pngtree-gradient-color-modern-design-with-curve-shapes-image_384229.jpg"
          alt="bg"
        />
        <Avatar
          className="sidebar__avatar"
          src="https://avatars.githubusercontent.com/u/74425100?v=4"
        />
        <h2>Tilek Dzhenishev</h2>
        <h4>tilek.dzenisev@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you </p>
          <p className="sidebar__Number">2,532</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post </p>
          <p className="sidebar__Number">2,442</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        Recent
        {recentItem("ReactJs")}
        {recentItem("Programming")}
        {recentItem("Software engeneering")}
        {recentItem("Design")}
        {recentItem("MobileDev")}
      </div>
    </div>
  );
}

export default Sidebar;
