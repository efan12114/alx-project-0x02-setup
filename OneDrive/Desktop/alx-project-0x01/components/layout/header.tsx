import React from "react";

const Header: React.FC = () => (
  <header className="w-full bg-white shadow-sm sticky top-0 z-50">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      {/* Left: logo */}
      <div className="text-2xl font-bold text-blue-700">ALX-Stay</div>

      {/* Middle: nav links */}
      <nav className="hidden md:flex gap-6 text-gray-700">
        <a href="#" className="hover:text-blue-600">Rooms</a>
        <a href="#" className="hover:text-blue-600">Mansions</a>
        <a href="#" className="hover:text-blue-600">Countryside</a>
      </nav>

      {/* Right: auth buttons */}
      <div className="flex gap-2">
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
          Sign In
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </div>
  </header>
);

export default Header;