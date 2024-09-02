import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="absolute w-[450px] h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#000000B3] p-8 rounded-md text-white">
      <form action="">
        <h1 className="text-3xl font-bold mb-6">Sign In</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Email or mobile number"
            className="w-full p-3 bg-gray-800 rounded text-sm"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-gray-800 rounded text-sm"
          />
        </div>

        <button className="w-full py-3 bg-red-600 rounded text-sm font-bold mb-4 hover:bg-red-700">
          Sign In
        </button>

        <div className="text-center text-gray-400 text-sm mb-6">
          <a href="#" className="hover:underline">
            Forgot password?
          </a>
        </div>

        <div className="flex items-center mb-6">
          <input type="checkbox" className="mr-2" />
          <label className="text-sm">Remember me</label>
        </div>

        <div className="text-center text-gray-400 text-sm">
          New to Netflix?{" "}
          <Link to="/register" className="text-white hover:underline">
            Sign up now.
          </Link>
        </div>

        <div className="mt-6 text-center text-gray-500 text-xs">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Learn more.
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
