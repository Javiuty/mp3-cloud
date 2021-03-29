import ReactPlayer from "react-player";

const Player = () => {
  return (
    <article className="w-full">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="100%"
        controls="true"
      />
    </article>
  );
};

export default Player;
