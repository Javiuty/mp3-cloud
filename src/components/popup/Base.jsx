import React from "react";

const basePopUp = ({ title }) => {
  return (
    <div className="w-screen h-screen absolute top-0 z-10 bg-transparent flex items-start justify-center">
      <div className="w-1/3 h-1/3 bg-white relative top-48">
        <div>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            ></path>
          </svg>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default basePopUp;
