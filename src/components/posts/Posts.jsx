// posts/Posts.jsx
import Post from "../post/Post";
import "./posts.scss";
import { useState } from "react";
import Share from "../share/Share";

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      likes: 0,
      comments: [],
    },
    {
      id: 3,
      name: "Mahmoud Walied",
      userId: 2,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkdImF9xoSoIRwmRmmBCV19sCM76lW1qt0g&s",
      desc: "I love this",
      likes: 0,
      comments: [],
    },
  ]);

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add the new post to the beginning of the list
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId)); // Remove the post with the given id
  };

  return (
    <div className="posts">
      <Share addNewPost={addNewPost} />
      {posts.map((post) => (
        <Post post={post} key={post.id} onDelete={handleDeletePost} />
      ))}
    </div>
  );
};

export default Posts;
