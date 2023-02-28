import React from "react";

const Navbar = ({ isFullScreen }) => {
  return (
    <div
      className={`relative ${
        isFullScreen ? "h-0" : "h-16"
      } bg-black flex justify-center items-center gap-4 `}
    >
      <img className="w-16" src="/logo.png" alt="logo" />
      <div className="text-white text-4xl ">
        <span className="font-bold">Code</span> Deck
      </div>
    </div>
  );
};

export default Navbar;
