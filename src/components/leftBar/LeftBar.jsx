import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="hidden lg:flex w-[19%] flex-col sticky top-12 h-[92vh] bg-gray-100 dark:bg-[#262626] text-gray-900 dark:text-gray-100">
      <div className="p-5">
        {/* User Section */}
        <div className="flex flex-col space-y-5">
          <div className="flex items-center space-x-3">
            <img
              src={currentUser?.profilePic || "https://via.placeholder.com/150"}
              alt="User Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <h2>{currentUser?.name || "User Name"}</h2>
          </div>
          <div className="flex items-center space-x-3">
            <img src={Friends} alt="Friends Icon" className="w-6" />
            <span>Friends</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={Groups} alt="Groups Icon" className="w-6" />
            <span>Groups</span>
          </div>
             <div className="flex items-center space-x-3">
            <img src={Market} alt="Marketplace Icon" className="w-8" />
            <span>Marketplace</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={Watch} alt="Watch Icon" className="w-6" />
            <span>Watch</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={Memories} alt="Memories Icon" className="w-6" />
            <span>Memories</span>
          </div>
        </div>

        <hr className="my-5 border-t border-gray-300 dark:border-gray-600" />

        {/* Shortcuts Section */}
        <div className="flex flex-col space-y-5">
          <span className="text-xs">Your shortcuts</span>
          <div className="flex items-center space-x-3">
            <img src={Gaming} alt="Gaming Icon" className="w-7" />
            <span>Gaming</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={Gallery} alt="Gallery Icon" className="w-7" />
            <span>Gallery</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={Videos} alt="Videos Icon" className="w-7" />
            <span>Videos</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={Messages} alt="Messages Icon" className="w-7" />
            <span>Messages</span>
          </div>
        </div>

        </div>
      </div>
  );
};

export default LeftBar;
