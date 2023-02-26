import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOption from "./inputOption";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

const Post = forwardRef(({ description, message, name, photoUrl }, ref) => {
  const user = useSelector(selectUser);
  return (
    <div ref={ref} className="Post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" />
        <InputOption Icon={SendOutlinedIcon} title="Send" />
      </div>
    </div>
  );
});
export default Post;
