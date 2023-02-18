import React from "react";
import {useSelector} from 'react-redux'

import "./App.css";
import Feed from "./Feed";
import { Header } from "./Header/Header";
import { selectUser } from "./redux/userSlice";
import Sidebar from "./Sidebar";

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
