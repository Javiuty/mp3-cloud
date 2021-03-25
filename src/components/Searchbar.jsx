import { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [linkYoutube, setLinkYoutube] = useState("");
  const [error, setError] = useState(false);

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
    // const options = {
    //   method: "GET",
    //   url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${idYoutube}&key=${process.env.REACT_APP_YOUTUBE_KEY}`,
    //   headers: {
    //     "Content-Type": "application/json; charset=UTF-8",
    //   },
    // };

    // await axios
    //   .request(options)
    //   .then((response) => (respuesta = response.data.items[0].snippet))
    //   .catch((err) => console.error(error));

    // console.log(respuesta);

    // Petición POST de objeto con: url, fecha formateada, titulo e imagen
    // const urlPost = "https://busca-canciones.herokuapp.com/agregar-cancion";

    // const InfoObj = {
    //   idYoutube: idYoutube,
    //   url: inputSong,
    //   fecha: parseFloat(Date.now()),
    //   title: items[0].snippet.title,
    //   image: items[0].snippet.thumbnails.high.url,
    //   enlace: "",
    // };

    // fetch(urlPost, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "include",
    //   body: JSON.stringify(InfoObj),
    // });

    // setExito(true);

    // setTimeout(() => {
    //   setExito(false);
    // }, 3000);

    // // Cambia el estado para renderizar la nueva canción añadida
    // setUrlInput(inputSong);

    // /* Reseteamos form y estado */
    // setInputSong("");
    // document.getElementById("enviar-form").reset();
  };

  // useEffect(() => {
  //   const gettingSongs = () => {
  //     const url = "https://busca-canciones.herokuapp.com/canciones";

  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((resultado) => setSongs(resultado));
  //   };

  //   gettingSongs();
  // }, [setSongs, error, exito]);

  return (
    <section className="flex items-end">
      <input
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
  );
};

export default SearchBar;
