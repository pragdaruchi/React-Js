import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth, db, provider } from "../../FfirebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

export default function Register() {
  const [formdata, setFormdata] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, formdata.email, formdata.password).then((res) => {
      setDoc(doc(db, "users", res.user.uid), formdata);
      navigate("/login");
    }
    );
  };

  const handleSignIn = async () => {
    await signInWithPopup(auth, provider).then((res) => {
      setDoc(doc(db, "users", res.user.uid), { name: res.user.displayName, email: res.user.email, photo: res.user.photoURL, });
      navigate("/dashboard");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e8edff] p-6">
      <div className="flex w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="w-1/2 bg-[#5d79ff] text-white p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Create Account</h1>
          <p className="text-white/80 mb-6">Join us and manage your files easily & securely with your new account.</p>
            {/* <button><h1 className="text-4xl bg-white text-[#5d79ff] rounded-full h-13 w-40 text-center py-0.5 font-semibold">Register</h1></button> */}
        </div>
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h2>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full mb-4 px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full mb-4 px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full mb-6 px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
          <button onClick={handleRegister} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">Register</button>
          <p className="text-center mt-5 text-gray-600">Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
          <div className="mt-6 text-center">
            <button onClick={handleSignIn} className="w-full border py-3 rounded-xl flex items-center justify-center gap-3  hover:bg-gray-100 transition">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Dt-mn7WpoqnoyioycXLnDQwMPzPbuPb9vw&s" className="w-6 mx-2"/>Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
