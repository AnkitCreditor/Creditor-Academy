import React, { useState } from "react";
import axios from "axios";

// ✅ Admin Modal Component
const AdminModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [fullName, setFullName] = useState(""); // Register state (commented)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("session_token"));

  // const toggleMode = () => {
  //   setIsLogin(!isLogin);
  //   setError("");
  // };

  const handleLogout = () => {
    localStorage.removeItem("session_token");
    setIsLoggedIn(false);
    onClose && onClose();
    window.location.href = "/";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (isLogin) {
      // LOGIN
      try {
        const response = await axios.post("http://localhost:9000/api/auth/login", {
          email,
          password,
        });
        if (response.data.token) {
          localStorage.setItem("session_token", response.data.token);
          setIsLoggedIn(true);
          onClose && onClose();
          window.location.href = "/welcome"; // Redirect to welcome page after login
        } else {
          setError("Login failed. No token received.");
        }
      } catch (err) {
        setError(
          err.response?.data?.message || "Invalid email or password. Please try again."
        );
      } finally {
        setLoading(false);
      }
    } else {
      // REGISTER (basic, no OTP)
      // Register logic commented out
      // try {
      //   await axios.post("http://localhost:9000/api/auth/registerUser", {
      //     email,
      //     phone: "0000000000", // Placeholder, since phone is required in API
      //   });
      //   setIsLogin(true);
      //   setError("Registration successful. Please login.");
      // } catch (err) {
      //   setError(
      //     err.response?.data?.message || "Registration failed. Please try again."
      //   );
      // } finally {
      //   setLoading(false);
      // }
    }
  };

  if (!isOpen) return null;

  if (isLoggedIn) {
    return (
      <div className="fixed inset-0 w-screen h-screen bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]">
        <div className="animate-fadeIn transition-all">
          <div className="relative bg-white rounded-2xl px-7 pt-8 pb-6 min-w-[340px] max-w-[400px] shadow-2xl font-sans">
            <button className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-600" onClick={onClose}>&times;</button>
            <h2 className="text-2xl font-bold mb-5 text-center text-[#0D88C2]">You are logged in!</h2>
            <button className="w-full bg-[#0D88C2] text-white py-3 rounded-lg font-semibold text-lg mt-2 hover:bg-[#0b7ab0] transition-colors" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="animate-fadeIn transition-all">
        <div className="relative bg-white rounded-2xl px-7 pt-8 pb-6 min-w-[340px] max-w-[400px] shadow-2xl font-sans">
          <button className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-600" onClick={onClose}>&times;</button>

          <h2 className="text-2xl font-bold mb-5 text-center text-[#0D88C2]"> Welcome </h2>

          {error && (
            <div className="text-red-700 bg-red-50 border border-red-200 rounded-md p-2 mb-3 font-medium text-center">{error}</div>
          )}

          <form className="flex flex-col gap-4 mb-2" onSubmit={handleSubmit}>
            {/* Register fields commented out */}
            {/*
            <input
              type="text"
              placeholder=" Full Name"
              className="px-4 py-3 rounded-lg border border-gray-300 text-base mb-2 focus:outline-none font-sans"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              required
            />
            */}
            <input
              type="email"
              placeholder=" Email"
              className="px-4 py-3 rounded-lg border border-gray-300 text-base mb-2 focus:outline-none font-sans"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder=" Password"
              className="px-4 py-3 rounded-lg border border-gray-300 text-base mb-2 focus:outline-none font-sans"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="w-full bg-[#0D88C2] text-white py-3 rounded-lg font-semibold text-lg mt-2 hover:bg-[#0b7ab0] transition-colors" disabled={loading}>
              {loading ? "Logging in..." : "Login →"}
            </button>
          </form>

          {/* Register toggle commented out */}
          {/*
          <p className="text-center mt-3 text-gray-700 text-base">
            {isLogin ? "New here?" : "Already registered?"}{" "}
            <span className="text-[#0D88C2] cursor-pointer font-semibold underline ml-1" onClick={toggleMode}>
              {isLogin ? "Register Now" : "Login"}
            </span>
          </p>
          */}
        </div>
      </div>
    </div>
  );
};

export default AdminModal;
