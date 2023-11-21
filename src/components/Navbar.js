
import React from 'react';

export default function Navbar({ onCreateContact }) {
  return (
    <div className="bg-blue-500">
      <div className="flex  md:justify-end p-4">
        <button
          className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 mx-2 md:mx-4 text-white font-semibold"
          onClick={() => onCreateContact()}
        >
          Create Contact
        </button>
      </div>
    </div>
  );
}