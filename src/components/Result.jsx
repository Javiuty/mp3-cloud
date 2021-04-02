import { shortString, separateTags } from "../helpers";
// import moment from "moment";
import { useState } from "react";
import axios from "axios";

const Result = ({ cancion, setIdSong }) => {
  const {
    enlace,
    // fecha,
    id,
    image,
    title,
    description,
    tags,
    // url,
    views,
    favoritos,
  } = cancion;

  const [like, setLike] = useState(false);

  const handleLike = () => {
    like ? setLike(false) : setLike(true);
  };

  const deleteSong = async (idSong) => {
    const url = "http://localhost:8888/.netlify/functions/deleteSong";

    const data = {
      id: idSong,
    };

    await axios.delete(url, { data });

    setIdSong(idSong);
  };

  // https://ytmp3.cc/youtube-to-mp3/

  return (
    <article className="flex border-b w-full relative container-song hover:bg-gray-100 cursor-pointer transition-all duration-300">
      <p
        className="delete-btn absolute right-6 -top-6 text-4xl text-red-600 opacity-0 font-bold"
        id={id}
        onClick={() => deleteSong(id)}
      >
        &times;
      </p>
      <div>
        <img className="w-44 h-auto p-4" src={image} alt={title} />
      </div>

      <div className="flex flex-col justify-center pr-4">
        <svg
          className="w-6 h-6 mb-8"
          fill={like ? "red" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleLike}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
        {enlace ? (
          <a
            href={enlace}
            target="_blank"
            rel="noopener noreferrer cursor pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="green"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              ></path>
            </svg>
          </a>
        ) : (
          <svg
            className="w-6 h-6 cursor-not-allowed"
            fill="none"
            stroke="red"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
            ></path>
          </svg>
        )}
      </div>

      <div>
        <div className="pt-4">
          <h3 className="font-bold">{title}</h3>
          <h4 className="text-sm">
            {shortString(description) || "No hay descripción para este vídeo"}
          </h4>
        </div>
        <div className="my-1">
          <p className="text-sm">
            #tags:
            <span className="italic ml-1">{separateTags(tags)}</span>
          </p>
        </div>
        <div className="mt-2">
          <ul className="flex items-center">
            <li className="flex mr-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              {views}
            </li>
            <li className="flex">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                ></path>
              </svg>
              {favoritos}
            </li>
            <li className="ml-4 text-sm text-gray-400">
              {/* Añadido: <span>{moment().startOf("day").fromNow()}</span> */}
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute centered-end border py-1 cursor-not-allowed">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          ></path>
        </svg>
      </div>
    </article>
  );
};

export default Result;
