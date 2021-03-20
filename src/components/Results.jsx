import { useState } from "react";
import Result from "../components/Result";

const Results = ({ cancionesYoutube }) => {
  // eslint-disable-next-line no-unused-vars
  const [filtro, setFiltro] = useState("Relevancia");

  const changeFilter = (e) => {
    setFiltro(e.target.textContent);
  };

  return (
    <section className="bg-white min-h-80 m-4 mt-14 relative border-t border-r border-l border-b">
      <div className="flex">
        <div className="absolute -top-10 -left-1px p-2 px-4 bg-white rounded-sm border-l border-t border-r">
          <h2 className="cursor-pointer">Todos los resultados</h2>
        </div>
        <div className="absolute -top-10 left-44 p-2 px-4">
          <h2 className="cursor-pointer">Filtrar resultados</h2>
        </div>
      </div>

      <h3 className="pl-4 pt-2" onClick={changeFilter}>
        Filtrar resultados por:{" "}
        <span className="font-bold cursor-pointer ">Relevancia</span> |{" "}
        <span className="cursor-pointer">Duración</span> |{" "}
        <span className="cursor-pointer">Favoritos</span> |{" "}
        <span className="cursor-pointer">Reproduciones</span> |{" "}
        <span className="cursor-pointer">Fecha de Creación</span>{" "}
      </h3>
      {cancionesYoutube.map((cancion, index) => (
        <Result key={index} cancion={cancion} />
      ))}
    </section>
  );
};

export default Results;
