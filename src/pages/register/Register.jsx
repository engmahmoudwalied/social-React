import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      // هنا يمكنك إضافة كود لتحميل الصورة إلى الخادم وتحديث AuthContext إذا لزم الأمر
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // تنفيذ الكود لإرسال البيانات إلى الخادم
    // يمكنك إضافة الكود لتحميل البيانات وصورة البروفايل إلى الخادم هنا
  };

  return (
    <div className="h-screen bg-purple-100 flex items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col-reverse md:flex-row bg-white rounded-lg min-h-[600px] overflow-hidden shadow-lg">
        {/* Left Side */}
        <div className="flex-1 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 bg-opacity-50 bg-cover bg-center p-8 md:p-12 text-white flex flex-col gap-8"
             style={{
               backgroundImage: `url("https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
             }}>
          <h1 className="text-4xl md:text-[100px] leading-tight md:leading-none">Social</h1>
          <p className="text-base md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam ipsa exercitationem dignissimos, error nam, consequatur.</p>
          <span className="text-sm">Do you have an account?</span>
          <Link to="/login">
            <button className="w-44 md:w-1/2 py-2 bg-white text-purple-700 font-bold cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-100 hover:text-purple-800 shadow-md hover:shadow-slate-600 hover:shadow-lg">Login</button>
          </Link>
        </div>
        {/* Right Side */}
        <div className="flex-1 p-8 md:p-12 flex flex-col gap-8 justify-center">
          <h1 className="text-gray-600 text-2xl md:text-4xl font-bold">Register</h1>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-b border-gray-300 py-2 px-4"
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-gray-300 py-2 px-4"
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b border-gray-300 py-2 px-4"
            />
            <input 
              type="text" 
              placeholder="Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b border-gray-300 py-2 px-4"
            />
            
            {/* Profile Picture Upload */}
            <div className="flex flex-col gap-2">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="border border-gray-300 py-2 px-4"
              />
              {profileImage && (
                <img 
                  src={profileImage} 
                  alt="Profile Preview" 
                  className="w-32 h-32 object-cover mt-2 border border-gray-300 rounded" 
                />
              )}
            </div>
            
            <button 
              type="submit" 
              className="w-full md:w-1/2 py-2 bg-purple-500 text-white font-bold cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600 shadow-md hover:shadow-slate-600 hover:shadow-lg"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
 