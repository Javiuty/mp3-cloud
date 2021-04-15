const Player = ({ canciones, selectImageSong }) => {
  if (!canciones.length > 0) return null;

  const songById = canciones.find((song) => song.id === selectImageSong);

  return (
    <article style={{ height: "66%" }} className="w-full">
      <div>
        <img
          style={{ height: "65%" }}
          alt="Poster Canción"
          src={canciones[0].image}
          // src={selectImageSong ? songById.image : canciones[0].image}
        />
      </div>
    </article>
  );
};

export default Player;
