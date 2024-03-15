import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function BackButton({ destination = "/", buttonText = "" }) {
  return (
    <div className="flex items-center">
      <Link
        to={destination}
        className="bg-sky-800 text-white px-4 py-1 rounded-lg"
      >
        {buttonText}
        <BsArrowLeft className="text-2xl ml-2" />
      </Link>
    </div>
  );
}

export default BackButton;
