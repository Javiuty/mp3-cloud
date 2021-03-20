const Results = () => {
  return (
    <section className="bg-white h-4/5 m-4">
      <h3 className="pl-4 pt-2">
        Filtrar resultados por:{" "}
        <span className="font-bold cursor-pointer ">Relevancia</span> |{" "}
        <span className="cursor-pointer">Duración</span> |{" "}
        <span className="cursor-pointer">Favoritos</span> |{" "}
        <span className="cursor-pointer">Reproduciones</span> |{" "}
        <span className="cursor-pointer">Fecha de Creación</span>{" "}
      </h3>
    </section>
  );
};

export default Results;
