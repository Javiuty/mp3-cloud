import { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = ({ setCancionesYoutube }) => {
  const [cancion, setCancion] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [numberOfSongShowed, setNumberOfSongsShowed] = useState(6);

  const fetchingSongs = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${cancion}&maxResults=${numberOfSongShowed}&key=${process.env.REACT_APP_YOUTUBE_KEY}`;

    const resultado = await axios.get(url);

    setCancionesYoutube(resultado.data.items);
  };

  useEffect(() => {
    if (cancion) return fetchingSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cancion]);

  return (
    <section>
      <input
        autoFocus
        className="w-11/12 block mt-6 mx-auto py-2 px-4 rounded-sm outline-none text-xl text-gray-700 relative"
        type="text"
        placeholder="Busca aquí las canciones"
        onChange={(e) => setCancion(e.target.value)}
      />
      <svg
        className="w-6 h-6 absolute top-9 right-16"
        fill="none"
        stroke="currentColor"
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
    </section>
  );
};

export default SearchBar;
