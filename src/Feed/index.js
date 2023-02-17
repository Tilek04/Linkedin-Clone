import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./inputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function Feed() {
  const [input, setInput] = useState("");

  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("post").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setPost(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("post").add({
      name: "Tilek Dzhenishev",
      description: "This id the test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('')
  };
console.log(sendPost);
  

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} typt="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {post.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
   
     
    </div>
  );
}

export default Feed;
