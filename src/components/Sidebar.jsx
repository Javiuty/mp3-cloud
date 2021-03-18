import Logo from "../assets/logo.jpg";
import FotoProfile from "../assets/foto-profile.jpg";

const Sidebar = () => {
  return (
    <section className="bg-gray-100 h-screen">
      <div className="flex justify-center items-center bg-white m-4 rounded-sm">
        <img className="py-2 w-12" src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col">
        <div className="flex px-8 py-2">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <h3 className="px-4">Buscar</h3>
        </div>
        <div className="flex px-8 py-2">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <h3 className="px-4">Aplicación de Escritorio</h3>
        </div>
      </div>
      <hr className="w-9/12 m-auto my-8" />
      <article>
        <h2 className="px-8">Cuenta</h2>

        <div className="flex px-8 py-2">
          <img
            src={FotoProfile}
            alt="Foto perfil pequeña"
            className="rounded-full w-6"
          />
          <h3 className="flex items-center px-4">Invitado</h3>
        </div>
        <div className="flex px-8 py-2">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
          <h3 className="px-4">Likes</h3>
        </div>
      </article>
    </section>
  );
};

export default Sidebar;
