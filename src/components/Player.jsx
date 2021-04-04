const Player = ({ canciones }) => {
  if (!canciones.length > 0) return null;

  return (
    <article className="w-full">
      <div>
        <img className="w-full" alt="Poster Canción" src={canciones[0].image} />
        <audio className="w-full" controls />
      </div>
    </article>
  );
};

export default Player;
