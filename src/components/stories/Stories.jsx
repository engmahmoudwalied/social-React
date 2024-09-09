import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { FaThumbsUp } from "react-icons/fa";

// مكون لتحميل الملفات
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const InputFileUpload = ({ onChange }) => (
  <Button
    component="label"
    role={undefined}
    variant="contained"
    tabIndex={-1}
    startIcon={<CloudUploadIcon />}
  >
    Upload files
    <VisuallyHiddenInput
      type="file"
      accept="image/*"
      onChange={onChange}
      multiple
    />
  </Button>
);

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const [selectedStory, setSelectedStory] = useState(null);
  const [stories, setStories] = useState([
    { id: 1, name: "John Doe", img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 2, name: "Jane Smith", img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 3, name: "Alice Johnson", img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 4, name: "Bob Williams", img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 5, name: "Sarah Brown", img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
  ]);

  const [newStory, setNewStory] = useState({ name: "", img: "" });
  const [likes, setLikes] = useState({}); // لتتبع الإعجابات لكل قصة

  const closePopup = () => setSelectedStory(null);

  const addStory = () => {
    if (newStory.img) {
      setStories([...stories, { id: stories.length + 1, name: currentUser.name, img: newStory.img }]);
      setNewStory({ name: "", img: "" });
      document.getElementById("story-form").classList.add("hidden");
    }
  };

  const handleLike = (id) => {
    setLikes({
      ...likes,
      [id]: (likes[id] || 0) + 1
    });
  };

  return (
    <div className="relative">
      <div className="flex snap-x snap-mandatory gap-3 h-40 md:h-48 lg:h-56 mb-8">
        {/* عرض الاستوري الخاص بالمستخدم */}
        <div className="snap-start flex-none w-24 h-full md:w-32 lg:w-36 relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 lg:rounded-sm">
          <img className="w-full h-full object-cover" src={currentUser.profilePic} alt="Your Story" />
          <span className="absolute bottom-2 left-2 text-white text-xs md:text-sm lg:text-base font-medium bg-black bg-opacity-50 px-2 py-1 rounded">
            {currentUser.name}
          </span>
          <button
            className="absolute bottom-4 right-4 bg-blue-500 text-white rounded-full w-8 h-8 lg:w-10 lg:h-10 text-lg flex items-center justify-center"
            onClick={() => document.getElementById("story-form").classList.toggle("hidden")}
          >
            +
          </button>
        </div>

        {/* عرض باقي الاستوريات */}
        {stories.map((story) => (
          <div
            className="snap-start flex-none w-24 h-full md:w-32 lg:w-36 relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 lg:rounded-md"
            key={story.id}
            onClick={() => setSelectedStory(story)}
          >
            <img className="w-full h-full object-cover" src={story.img} alt={story.name} />
            <span className="absolute bottom-2 left-2 text-white text-xs md:text-sm lg:text-base font-medium bg-black bg-opacity-50 px-2 py-1 rounded">
              {story.name}
            </span>
          </div>
        ))}
      </div>

      {/* عرض الـ popup إذا تم اختيار استوري */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-2xl mx-auto animate-scaleUp">
            <span
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
              onClick={closePopup}
            >
              &times;
            </span>
            <img
              className="w-full h-96 object-cover rounded-lg"
              src={selectedStory.img}
              alt={selectedStory.name}
            />
            <h2 className="text-center text-2xl font-semibold mt-4">{selectedStory.name}</h2>
            <button
              className="flex items-center justify-center mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => handleLike(selectedStory.id)}
            >
              <FaThumbsUp className="mr-2" /> {likes[selectedStory.id] || 0} Likes
            </button>
          </div>
        </div>
      )}

      {/* نموذج إضافة قصة جديدة */}
      <div id="story-form" className="fixed bottom-50 justify-center flex flex-col w-80 full gap-3 bg-white p-4 border-t border-gray-300 hidden">
        <h2 className="text-xl font-semibold mb-2">Add New Story</h2>
        <InputFileUpload
          onChange={(e) => {
            if (e.target.files[0]) {
              const reader = new FileReader();
              reader.onload = (e) => setNewStory({ ...newStory, img: e.target.result });
              reader.readAsDataURL(e.target.files[0]);
            }
          }}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addStory}
        >
          Add Story
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
          onClick={() => document.getElementById("story-form").classList.add("hidden")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Stories;
