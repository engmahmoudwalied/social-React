import { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from "../comments/Comments";
import "./post.scss";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes || 0);
  const [comments, setComments] = useState(post.comments || []);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.name,
          text: post.desc,
          url: window.location.href, // يمكنك استخدام رابط البوست أو الرابط الحالي للصفحة
        })
        .then(() => {
          console.log("Shared successfully");
        })
        .catch((error) => {
          console.error("Error sharing", error);
        });
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <div className="shadow-xl rounded-lg p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-5">
          <img
            src={post.profilePic}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <Link
              to={`/profile/${post.userId}`}
              className="font-medium no-underline"
            >
              {post.name}
            </Link>
            <span className="text-sm">1 min ago</span>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="mb-5">
        <p>{post.desc}</p>
        <img
          src={post.img}
          alt=""
          className="w-full max-h-96 object-cover mt-5"
        />
      </div>
      <div className="flex items-center border-y-2 border-[#18181b]	 p-3 space-x-60 gap-5">
        <div
          className="flex items-center gap-2 cursor-pointer text-sm"
          onClick={handleLike}
        >
          {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
          {likeCount} Likes
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer text-sm"
          onClick={() => setCommentOpen(!commentOpen)}
        >
          <TextsmsOutlinedIcon />
          {comments.length} Comments
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer text-sm"
          onClick={handleShare}
        >
          <ShareOutlinedIcon />
          Share
        </div>
      </div>
      {commentOpen && <Comments comments={comments} addComment={addComment} />}
    </div>
  );
};

export default Post;
