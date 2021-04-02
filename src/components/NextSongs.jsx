import axios from "axios";
import { useEffect, useState } from "react";
import NextSong from "./NextSong";

const NextSongs = ({ idCancionYoutube, canciones }) => {
  const [relatedSongs, setRelatedSongs] = useState([]);

  const getRelatedSongs = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${
      idCancionYoutube ? idCancionYoutube : canciones[0].id_youtube
    }&type=video&key=${process.env.REACT_APP_YOUTUBE_KEY}`;

    const results = await axios.get(url);
    setRelatedSongs(
      results.data.items.filter((cancion) => cancion.hasOwnProperty("snippet"))
    );
  };

  useEffect(() => {
    if (canciones.length > 0) {
      getRelatedSongs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canciones.length]);

  return (
    <article className="border-t-8">
      <h2 className="px-4 py-4">Canciones Recomendadas</h2>
      {/* {relatedSongs.map((cancion, index) => (
        <NextSong key={index} cancion={cancion} />
      ))} */}
    </article>
  );
};

export default NextSongs;
