import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'

import "./App.css";
import Feed from "./Feed";
import { Header } from "./Header/Header";
import Login from "./Login/Login";
import { logout, selectUser } from "./redux/userSlice";
import Sidebar from "./Sidebar";
import { auth } from "./firebase";
import Widget from "./Widgets";

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
  auth.onAuthStateChanged((userAuth) => {
    if(userAuth){
       dispatch({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoURL: userAuth.photoURL,
       })
    }else{
      dispatch(logout());
    }
  })
  },[])

  return (
    <div className="app">
      <Header />
      {!user ? <Login/> : (
          <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget/>
        </div>
      )}
    
    </div>
  );
}

export default App;
