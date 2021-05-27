import Logo from "../assets/logo.jpg";
import FotoProfile from "../assets/foto-profile.jpg";

const Sidebar = () => {
  return (
    <section style={{ width: "21%" }} className="bg-gray-100 h-screen">
      <div className="flex justify-center items-center bg-white m-4 mt-6 rounded-sm">
        <img className="py-2 w-12" src={Logo} alt="Logo" />
      </div>
      <article>
        <h2 className="px-8 font-bold">Mi App</h2>
        <div className="flex flex-col">
          <div className="flex px-8 py-2">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <h3 className="px-4 cursor-not-allowed">Buscar</h3>
          </div>
          <div className="flex px-8 py-2">
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
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <h3 className="px-4 cursor-not-allowed">
              Aplicación de Escritorio
            </h3>
          </div>
        </div>
        <hr className="w-9/12 m-auto my-8" />
      </article>

      <article>
        <h2 className="px-8 font-bold">Cuenta</h2>

        <div className="flex px-8 py-2">
          <img
            src={FotoProfile}
            alt="Foto perfil pequeña"
            className="rounded-full w-6"
          />
          <h3 className="flex items-center px-4 cursor-not-allowed">
            Invitado
          </h3>
        </div>
        <div className="flex px-8 py-2">
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
          <h3 className="px-4 cursor-not-allowed">Likes</h3>
        </div>
        <hr className="w-9/12 m-auto my-8" />
      </article>
      <article>
        <h2 className="px-8 font-bold">Lista de Reprodución</h2>
        <div className="flex px-8 py-2">
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
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h3 className="px-4 cursor-not-allowed">
            Agregar Lista de Reprodución
          </h3>
        </div>
        <hr className="w-9/12 m-auto my-8" />
      </article>
    </section>
  );
};

export default Sidebar;
