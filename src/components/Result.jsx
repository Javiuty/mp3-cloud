import { shortString } from "../helpers";

const Result = ({ cancion }) => {
  const {
    enlace,
    fecha,
    id,
    image,
    title,
    description,
    tags,
    url,
    views,
    favoritos,
  } = cancion;

  return (
    <article className="flex border-b w-full">
      <div>
        <img className="w-44 h-auto p-4" src={image} alt={title} />
      </div>
      <div className="flex flex-col justify-center pr-4">
        <svg
          className="w-6 h-6 mb-8 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
        <svg
          class="w-6 h-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
          ></path>
        </svg>
      </div>
      <div>
        <div className="pt-4">
          <h3 className="font-bold">{title}</h3>
          <h4>{shortString(description)}</h4>
        </div>
        <div className="pt-4">
          <p className="italic">{tags}</p>
        </div>
      </div>
      {/*
  
        <div>
          <h2 className="font-bold">{title}</h2>
          <p>{description ? description : "No hay descripción del vídeo"}</p>
        </div>
        <div className="flex items-center">
          <svg
            className="w-6 h-6 cursor-pointer"
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
      </div> */}
    </article>
  );
};

export default Result;
