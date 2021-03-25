import Result from "./Result";
import axios from "axios";
import { useEffect, useState } from "react";

const Results = () => {
  const [canciones, setCanciones] = useState([]);

  const fetchSongs = async () => {
    const url = "http://localhost:8888/.netlify/functions/getSongs";

    const results = await axios.get(url);

    setCanciones(results.data);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <section className="bg-white min-h-80 m-4 mt-14 relative border-t border-r border-l border-b">
      <div className="flex">
        <div className="absolute -top-10 -left-1px p-2 px-4 bg-white rounded-sm border-l border-t border-r">
          <h2 className="cursor-pointer">Todos los resultados</h2>
        </div>
        <div className="absolute -top-10 left-44 p-2 px-4">
          <h2 className="cursor-not-allowed">Filtrar resultados</h2>
        </div>
      </div>

      {/* <h3 className="pl-4 pt-2 mb-4">
        Filtrar resultados por:{" "}
        <span className="font-bold cursor-pointer ">Relevancia</span> |{" "}
        <span className="cursor-pointer">Duración</span> |{" "}
        <span className="cursor-pointer">Favoritos</span> |{" "}
        <span className="cursor-pointer">Reproduciones</span> |{" "}
        <span className="cursor-pointer">Fecha de Creación</span>{" "}
      </h3> */}
      {canciones.map((cancion, index) => (
        <Result key={index} cancion={cancion} />
      ))}
    </section>
  );
};

export default Results;
