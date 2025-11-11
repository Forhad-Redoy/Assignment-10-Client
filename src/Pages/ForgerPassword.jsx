import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const ForgerPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  // Get email passed from Login page
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email to reset password.");
      return;
    }

    toast.info("Redirecting to Gmail...");
    setTimeout(() => {
      window.open("https://mail.google.com", "_blank");
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-indigo-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-4">Reset Password</h2>
        <p className="text-center text-white/80 mb-6">
          Enter your email address below. You’ll be redirected to Gmail to check your reset link.
        </p>

        <form onSubmit={handleReset} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
          >
            Reset Password
          </button>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="w-full text-sm text-white/80 mt-2 hover:underline"
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgerPassword;
