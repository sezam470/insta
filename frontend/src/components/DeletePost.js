import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FeedContext } from "../context/FeedContext";
import { client } from "../utils";

const DeletePost = ({ postId, closeModal, goToHome }) => {
  const { feed, setFeed } = useContext(FeedContext);
  const navigate = useNavigate();

  const handleDeletePost = () => {
    closeModal();

    if (goToHome) {
      navigate(`/`);
    }

    setFeed(feed.filter((post) => post._id !== postId));
    toast.success("Your post has been deleted successfully");
    client(`/posts/${postId}`, { method: "DELETE" });
  };

  return (
    <span className="danger" onClick={handleDeletePost}>
      Delete Post
    </span>
  );
};

export default DeletePost;
