"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Dummy user profile info (Replace with real auth logic)
  const user = { name: "John Doe", avatar: "/profile.png" };

  return (
    <div className="flex justify-between items-center w-[95%] mx-auto bg-gray-800 p-4 text-white">
      {/* Left: Logo */}
      <div className="text-xl font-bold">
        <Link href="/">MyWebsite</Link>
      </div>

      {/* Right: Conditional Rendering */}
      <div>
        {isLoggedIn ? (
          // Show User Profile if logged in
          <div className="flex items-center gap-4">
            <span>{user.name}</span>
            <img
              src={user.avatar}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-red-500 px-4 py-2 rounded-md"
            >
              Logout
            </button>
          </div>
        ) : (
          // Show Sign In & Sign Up buttons if not logged in
          <div className="flex gap-4">
            <Link href="/signin">
              <button className="bg-blue-500 px-4 py-2 rounded-md hover:scale-110 duration-150">Sign In</button>
            </Link>
            <Link href="/signup">
              <button className="bg-green-500 px-4 py-2 rounded-md hover:scale-110 duration-150">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
