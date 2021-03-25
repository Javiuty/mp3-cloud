import { useState } from "react";
import axios from "axios";
import Error from "./Error";

const SearchBar = ({ linkYoutube, setLinkYoutube }) => {
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);

  const handlingRequest = async (e) => {
    let respuesta;

    if (
      linkYoutube === "" ||
      !linkYoutube.includes("https://www.youtube.com") ||
      !linkYoutube.includes("v=")
    ) {
      setError(true);
      return null;
    }
    setError(false);

    // Conseguir id_yotube desde la url
    const idYoutube = linkYoutube.slice(32, 43);

    // LLamar api youtube con id y apikey
    const options = {
      method: "GET",
      url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${idYoutube}&key=${process.env.REACT_APP_YOUTUBE_KEY}`,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };

    await axios
      .request(options)
      .then((response) => (respuesta = response.data.items[0]))
      .catch((err) => console.error(error));

    // Petición POST de objeto con: url, fecha, titulo e imagen
    const urlPost = "http://localhost:8888/.netlify/functions/insertNewSong";

    await axios.post(urlPost, {
      id_youtube: idYoutube,
      url: linkYoutube,
      fecha: parseFloat(Date.now()), // formatear fecha
      title: respuesta.snippet.title,
      description: respuesta.snippet.description,
      tags: `${respuesta.snippet.tags[0]}, ${respuesta.snippet.tags[1]}, ${respuesta.snippet.tags[3]}`,
      image: respuesta.snippet.thumbnails.standard.url,
      enlace: "",
    });

    setExito(true);

    setTimeout(() => {
      setExito(false);
    }, 3000);

    // Reseteamos form y estado
    setLinkYoutube("");
    document.getElementById("input").value = null;

    // // Cambia el estado para renderizar la nueva canción añadida
    // setUrlInput(inputSong);
  };

  return (
    <>
      <section className="flex items-end">
        <input
          id="input"
          autoFocus
          className="w-10/12 h-11 block mt-6 ml-4 py-2 px-4 rounded-sm outline-none text-xl text-gray-700"
          type="text"
          placeholder="Copia aquí el link de youtube"
          onChange={(e) => setLinkYoutube(e.target.value.trim())}
        />
        <button
          className="flex justify-center border-0 items-center rounded-sm ml-4 w-16 h-11 color-primary-bg hover:opacity-70 transition-all duration-200"
          onClick={handlingRequest}
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
      {exito ? <Error type="exito" message="Link enviado con éxito" /> : null}
      {error ? <Error type="error" message="No es un enlace válido" /> : null}
    </>
  );
};

export default SearchBar;
