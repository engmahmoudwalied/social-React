import React, { useState, useContext } from 'react';
import { AuthContext } from "../../context/authContext";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from "../../components/posts/Posts";

import "./Profile.scss";

const Profile = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  );
  
  const { currentUser, updateProfilePicture } = useContext(AuthContext);

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updateProfilePicture(imageUrl); // تحديث صورة الملف الشخصي في AuthContext
    }
  };

  return (
    <div className="profile">
      <div
        className="relative w-full h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <input
          type="file"
          id="background-file"
          className="hidden"
          onChange={(event) => {
            const file = event.target.files[0];
            if (file) {
              const imageUrl = URL.createObjectURL(file);
              setBackgroundImage(imageUrl);
            }
          }}
        />
        <label htmlFor="background-file" className="absolute inset-0 flex items-center justify-center cursor-pointer">
          <div className="bg-gray-800 bg-opacity-50 text-white p-2 rounded-md">
            Change Background
          </div>
        </label>
      </div>

      <div className="relative w-full h-80 mt-[-160px] flex justify-center items-end">
        <input
          type="file"
          id="profile-file"
          className="hidden"
          onChange={handleProfileImageChange}
        />
        <label htmlFor="profile-file" className="absolute cursor-pointer">
          <img
            src={currentUser?.profilePic || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-52 h-52 rounded-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 text-center">
            <span className="bg-gray-800 text-white px-2 py-1 rounded-md">Change Profile Picture</span>
          </div>
        </label>
      </div>

      <div className="p-5 md:px-20 mt-[-10px]">
        <div className="bg-white text-gray-900 shadow-lg rounded-lg p-12 flex flex-col md:flex-row items-center justify-between mb-5">
          <div className="flex gap-4">
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large" className="text-gray-500" />
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon fontSize="large" className="text-gray-500" />
            </a>
          </div>
          <div className="flex flex-col items-center gap-2 text-center md:text-left">
            <span className="text-2xl font-medium">{currentUser?.name || "User Name"}</span>
            <div className="flex gap-10 text-gray-500">
              <div className="flex items-center gap-1">
                <PlaceIcon />
                <span className="text-xs">USA</span>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-md">
              Follow
            </button>
          </div>
          <div className="flex gap-3 text-gray-500">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
