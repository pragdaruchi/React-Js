import { signInWithEmailAndPassword} from "firebase/auth";
import React, { useState } from "react";
import { auth, provider } from "../../FfirebaseConfig";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [formdata, setFormdata] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, formdata.email, formdata.password).then(() => 
      navigate("/dashboard"));
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e8edff] p-6">
      <div className="flex w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="w-1/2 bg-[#5d79ff] text-white p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Welcome Back</h1>
          <p className="text-white/80 mb-6">Login to continue accessing your storage dashboard securely.</p>
        </div>
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full mb-4 px-4 py-3 bg-gray-50 border rounded-xl  focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full mb-4 px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
          <div className="flex justify-between text-sm mb-4 text-gray-600">
            <label>
              <input type="checkbox" className="mr-1" /> Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">Log In</button>
          <p className="text-center mt-6 text-gray-600">Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
