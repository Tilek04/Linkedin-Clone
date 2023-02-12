import React from "react";
import "./Header.css";
import HeaderOption from './HeaderOption/index'

import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Header = () => {
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
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon } title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messageing'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>

        <HeaderOption avatar='https://avatars.githubusercontent.com/u/74425100?v=4' title='me'/>
      </div>
    </div>
  );
};
