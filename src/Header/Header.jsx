import React from "react";
import "./Header.css";
import HeaderOption from './HeaderOption/index'

import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../redux/userSlice";
import { auth } from "../firebase";

export const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon } title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messageing'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>

        <HeaderOption onClick={logoutOfApp} avatar={true} title='me'/>
      </div>
    </div>
  );
};
