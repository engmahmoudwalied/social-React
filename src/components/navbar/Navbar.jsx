import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import Post from "../post/Post";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className={`flex items-center justify-between p-4 md:p-5 h-14 max-sm:w-[122.6%] sticky top-0 z-50 ${darkMode ? 'bg-[#18181b] text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}>
      <div className="flex items-center gap-4 md:gap-8">
        <Link to="/" className="text-xl font-bold">
          lamasocial
        </Link>
        <Link to="/" className="hidden md:block">
          <HomeOutlinedIcon />
        </Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} className="cursor-pointer" />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} className="cursor-pointer" />
        )}
        <div className="flex items-center gap-2 border border-gray-300 rounded-md p-1 w-full max-w-md">
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="Search..."
            className="border-none bg-transparent text-gray-900 placeholder-gray-500 w-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-6 hidden md:flex">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <Link to={`/profile/${Post.userId}`} className="flex items-center gap-2 font-medium">
          <img
            src={currentUser.profilePic}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{currentUser.name}</span>
        </Link>
      </div>
    </div>
    
  );
};

export default Navbar;
