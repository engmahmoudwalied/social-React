import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Comments = ({ comments, addComment }) => {
  const { currentUser } = useContext(AuthContext);
  const [newComment, setNewComment] = useState("");

  const handleSend = () => {
    if (newComment.trim()) {
      addComment({
        id: comments.length + 1,
        desc: newComment,
        name: currentUser.name,
        userId: currentUser.id,
        profilePicture: currentUser.profilePic,
      });
      setNewComment(""); // إفراغ الحقل بعد الإرسال
    }
  };

  return (
    <div className="comments">
      <div className="write flex items-center justify-between gap-5 my-5">
        <img
          src={currentUser.profilePic}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="write a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-md bg-transparent text-gray-900 dark:text-gray-300"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md" onClick={handleSend}>
          Send
        </button>
      </div>
      {comments.map((comment) => (
        <div key={comment.id} className="comment my-7 flex gap-5">
          <img
            src={comment.profilePicture}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className=" flex flex-col gap-1 flex-grow">
            <span className="font-medium">{comment.name}</span>
            <p className="text-gray-600 dark:text-gray-400">{comment.desc}</p>
          </div>
          <span className="date self-center text-sm text-gray-500">
            1 hour ago
          </span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
