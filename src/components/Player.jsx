import ReactPlayer from "react-player";

const Player = ({ canciones }) => {
  if (!canciones.length > 0) return null;

  return (
    <article className="w-full">
      <ReactPlayer className="react-player" />
    </article>
  );
};

export default Player;
