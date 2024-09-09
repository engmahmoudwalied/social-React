import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Share = ({ addNewPost }) => {
  const { currentUser } = useContext(AuthContext);
  const [text, setText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleShare = () => {
    // Check if there is either text or an image before allowing to share
    if (text.trim() === "" && !selectedImage) {
      alert("Please enter some text or select an image before sharing.");

      return;

    }

    const newPost = {
      id: Date.now(),
      name: currentUser.name,
      userId: currentUser.id,
      profilePic: currentUser.profilePic,
      desc: text,
      img: selectedImage,
      likes: 0,
      comments: [],
    };

    // Call the function to add the new post
    addNewPost(newPost);

    // Clear the input fields
    setText("");
    setSelectedImage(null);
  };

  return (
    <div className="shadow-2xl shadow-[#09090b] rounded-xl p-5 mb-5">
      <div className="flex items-center gap-5 mb-4">
        <img
          src={currentUser.profilePic}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder={`What's on your mind, ${currentUser.name}?`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-none outline-none p-2 bg-transparent w-full text-black dark:text-white"
        />
      </div>
      {selectedImage && (
        <div className="image-preview w-72 mb-4">
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
      <hr className="my-4 border-gray-200 dark:border-gray-600" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <label htmlFor="file">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={Image} alt="" className="h-5" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Add Image</span>
            </div>
          </label>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={Map} alt="" className="h-5" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Add Place</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={Friend} alt="" className="h-5" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Tag Friends</span>
          </div>
        </div>
        <div>
          <button
            onClick={handleShare}
            className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
