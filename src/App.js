import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import NextSongs from "./components/NextSongs";
import Searchbar from "./components/Searchbar";
import Results from "./components/Results";
import { useState } from "react";

const App = () => {
  const [canciones, setCanciones] = useState([]);
  const [linkYoutube, setLinkYoutube] = useState("");
  const [idCancionYoutube, setIdCancionYoutube] = useState("");

  return (
    <main className="grid grid-template-1fr-1fr-2fr">
      <Sidebar />
      <section className="flex flex-col bg-white">
        <Player canciones={canciones} />
        {/* <NextSongs idCancionYoutube={idCancionYoutube} canciones={canciones} /> */}
      </section>
      <section className="flex flex-col bg-gray-100">
        <Searchbar
          linkYoutube={linkYoutube}
          setLinkYoutube={setLinkYoutube}
          setIdCancionYoutube={setIdCancionYoutube}
        />
        <Results
          linkYoutube={linkYoutube}
          canciones={canciones}
          setCanciones={setCanciones}
        />
      </section>
    </main>
  );
};

export default App;
