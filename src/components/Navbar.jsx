import React from "react"
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";


function clickhandler(){
  navigate("/login")
}

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="text-xl font-bold">
          <a href="/" className="text-gray-800 hover:text-gray-900">
            HOV
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/find-talent" className="text-gray-600 font-medium hover:text-black transition-colors duration-200">
            Find Talent
          </a>
          <a href="/find-work" className="text-gray-600 font-medium hover:text-black transition-colors duration-200">
            Find Work
          </a>
          <a href="/why-upwork" className="text-gray-600 font-medium hover:text-black transition-colors duration-200">
            Himanshu
          </a>
          <a href="/enterprise" className="text-gray-600 font-medium hover:text-black transition-colors duration-200">
            Vishal
          </a>
          <a href="/pricing" className="text-gray-600 font-medium hover:text-black transition-colors duration-200">
            Om
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <NavLink to="/login" className="text-gray-600 hover:text-gray-900 transition-colors duration-200" >Login</NavLink>

          <a href="/signup" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-200">
            Sign Up
          </a>
        </div>
      </nav>
      <div className="pt-20"></div>
    </div>
  )
}

export default Navbar
