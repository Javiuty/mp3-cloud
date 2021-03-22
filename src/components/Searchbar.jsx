import { useState } from "react";
// import axios from "axios";

const SearchBar = ({ setCancionesYoutube }) => {
  // eslint-disable-next-line no-unused-vars
  const [linkYoutube, setLinkYoutube] = useState("");

  const callingApi = () => {
    console.log("buscando canción...");
  };

  return (
    <section className="flex items-end">
      <input
        autoFocus
        className="w-10/12 h-11 block mt-6 ml-4 py-2 px-4 rounded-sm outline-none text-xl text-gray-700"
        type="text"
        placeholder="Busca aquí las canciones"
        onChange={(e) => setLinkYoutube(e.target.value.trim())}
      />
      <button
        className="flex justify-center border-0 items-center rounded-sm ml-4 w-16 h-11 color-primary-bg hover:opacity-70 transition-all duration-200"
        onClick={callingApi}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </section>
  );
};

export default SearchBar;
