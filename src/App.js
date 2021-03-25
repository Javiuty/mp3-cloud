import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import NextSongs from "./components/NextSongs";
import Searchbar from "./components/Searchbar";
import Results from "./components/Results";
import { useState } from "react";

const App = () => {
  const [linkYoutube, setLinkYoutube] = useState("");

  return (
    <main className="grid grid-template-1fr-1fr-2fr">
      <Sidebar />
      <section className="flex flex-col bg-white">
        <Player />
        <NextSongs />
      </section>
      <section className="flex flex-col bg-gray-100">
        <Searchbar linkYoutube={linkYoutube} setLinkYoutube={setLinkYoutube} />
        <Results linkYoutube={linkYoutube} />
      </section>
    </main>
  );
};

export default App;
