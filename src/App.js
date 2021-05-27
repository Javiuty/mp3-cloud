import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import NextSongs from "./components/NextSongs";
import Searchbar from "./components/Searchbar";
import Results from "./components/Results";
import { useEffect, useState } from "react";
import axios from "axios";
import { CorrectModal } from "./components/popup/CorrectModal";

let RANGE_START = 0;
let RANGE_END = 5;

const App = () => {
  const [canciones, setCanciones] = useState([]);
  const [linkYoutube, setLinkYoutube] = useState("");
  const [idCancionYoutube, setIdCancionYoutube] = useState("");
  const [selectImageSong, setSelectImageSong] = useState(0);

  const [toggleModal, setToggleModal] = useState(false);
  const [messagesModal, setMessagesModal] = useState({});
  const [lengthCanciones, setLengthCanciones] = useState(0);

  const fetchSongs = async (operator) => {
    if (operator === "suma" && lengthCanciones > RANGE_END) {
      RANGE_START = RANGE_START + 5;
      RANGE_END = RANGE_END + 5;
    } else if (operator === "resta" && RANGE_START !== 0) {
      RANGE_START = RANGE_START - 5;
      RANGE_END = RANGE_END - 5;
    }

    const url = "http://localhost:8888/.netlify/functions/getSongs";

    const results = await axios.get(url);

    setLengthCanciones(results.data.length);

    let filterResults = results.data.slice(RANGE_START, RANGE_END);

    setCanciones(filterResults);
  };

  useEffect(() => {
    fetchSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CorrectModal toggleModal={toggleModal} messagesModal={messagesModal} />
      <main className="flex">
        <Sidebar />
        <section style={{ width: "22%" }} className="flex flex-col bg-white">
          <Player canciones={canciones} selectImageSong={selectImageSong} />
          <NextSongs
            idCancionYoutube={idCancionYoutube}
            canciones={canciones}
          />
        </section>
        <section style={{ width: "57%" }} className="flex flex-col bg-gray-100">
          <Searchbar
            linkYoutube={linkYoutube}
            messagesModal={messagesModal}
            setLinkYoutube={setLinkYoutube}
            setIdCancionYoutube={setIdCancionYoutube}
            fetchSongs={fetchSongs}
            setToggleModal={setToggleModal}
            setMessagesModal={setMessagesModal}
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
    </>
  );
};

export default App;
