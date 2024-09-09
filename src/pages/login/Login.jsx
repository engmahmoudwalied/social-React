import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="h-screen bg-purple-100 flex items-center  justify-center">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white rounded-lg min-h-[600px] overflow-hidden shadow-lg shadow-slate-600">
        {/* Left Side */}
        <div className="flex-1 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 bg-opacity-50 bg-cover bg-center p-8 md:p-12 text-white flex flex-col gap-8" 
             style={{
               backgroundImage: `url("https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
             }}>
          <h1 className="text-4xl md:text-[100px] leading-tight md:leading-none">Hello World.</h1>
          <p className="text-base md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam ipsa exercitationem dignissimos, error nam, consequatur.</p>
          <span className="text-sm">Don't you have an account?</span>
          <Link to="/register">
            <button className="w-44 md:w-1/2 py-2 bg-white text-purple-700 font-bold cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-100 hover:text-purple-800 shadow-md hover:shadow-slate-600 hover:shadow-lg">Register</button>
          </Link>
        </div>
        {/* Right Side */}
        <div className="flex-1 p-8 md:p-12 flex flex-col gap-8 justify-center">
          <h1 className="text-gray-600 text-2xl md:text-4xl font-bold	">Login</h1>
          <form className="flex flex-col gap-6">
            <input type="text" placeholder="Username" className="border-b border-gray-300 py-2 px-4"/>
            <input type="password" placeholder="Password" className="border-b border-gray-300 py-2 px-4"/>
            <button onClick={handleLogin} className="w-full md:w-1/2 py-2 bg-purple-500 text-white font-bold cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600 shadow-md hover:shadow-slate-600 hover:shadow-lg">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
