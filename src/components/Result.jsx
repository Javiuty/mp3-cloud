const Result = ({ cancion: { snippet } }) => {
  const {
    publishedAt,
    title,
    description,
    thumbnails: { high },
  } = snippet;

  return (
    <article className="flex border-b w-full">
      <div>
        <img className="w-56 h-36 p-6 rounded-sm" src={high.url} alt={title} />
      </div>
      <div className="grid grid-template-result">
        <div className="flex items-center mr-4">
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
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
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
      </div>
    </article>
  );
};

export default Result;
