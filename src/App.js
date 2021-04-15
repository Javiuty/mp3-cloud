import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import NextSongs from "./components/NextSongs";
import Searchbar from "./components/Searchbar";
import Results from "./components/Results";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [canciones, setCanciones] = useState([]);
  const [linkYoutube, setLinkYoutube] = useState("");
  const [idCancionYoutube, setIdCancionYoutube] = useState("");
  const [selectImageSong, setSelectImageSong] = useState(0);

  const fetchSongs = async () => {
    const url = "http://localhost:8888/.netlify/functions/getSongs";

    const results = await axios.get(url);

    setCanciones(results.data);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <main className="flex">
      <Sidebar />
      <section style={{ width: "22%" }} className="flex flex-col bg-white">
        <Player canciones={canciones} selectImageSong={selectImageSong} />
        <NextSongs idCancionYoutube={idCancionYoutube} canciones={canciones} />
      </section>
      <section style={{ width: "57%" }} className="flex flex-col bg-gray-100">
        <Searchbar
          linkYoutube={linkYoutube}
          setLinkYoutube={setLinkYoutube}
          setIdCancionYoutube={setIdCancionYoutube}
          fetchSongs={fetchSongs}
        />
        <Results
          linkYoutube={linkYoutube}
          canciones={canciones}
          setCanciones={setCanciones}
          setSelectImageSong={setSelectImageSong}
          fetchSongs={fetchSongs}
        />
      </section>
    </main>
  );
};

export default App;
