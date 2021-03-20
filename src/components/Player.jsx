import ReactPlayer from "react-player";

const Player = () => {
  return (
    <article className="w-full">
      <ReactPlayer
        width="w-full"
        controls
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />
    </article>
  );
};

export default Player;
