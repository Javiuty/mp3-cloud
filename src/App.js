import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import NextSongs from "./components/NextSongs";
import Searchbar from "./components/Searchbar";
import Results from "./components/Results";

const App = () => {
  return (
    <main className="grid grid-template-1fr-1fr-2fr">
      <Sidebar />
      <section className="flex flex-col bg-blue-300">
        <Player />
        <NextSongs />
      </section>
      <section className="flex flex-col bg-gray-100">
        <Searchbar />
        <Results />
      </section>
    </main>
  );
};

export default App;
