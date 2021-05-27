import Spinner from "../spinners/Spinner";
import Success from "../../assets/success.png";
import ErrorIcon from "../../assets/error.png";

export const CorrectModal = ({ toggleModal, messagesModal }) => {
  if (toggleModal) return null;

  let PROCESANDO = <p className="self-center mt-8 font-bold">Procesando...</p>;
  let ADD_MESSAGE = (
    <div className="flex items-center mt-8 ml-8">
      <h2 className="self-center mr-4 font-bold">Completado con éxito</h2>{" "}
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
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
    </div>
  );

  let LOGO = messagesModal.err ? (
    <img className="w-16 h-auto mt-8" src={ErrorIcon} alt="Icono de Error" />
  ) : (
    <img className="w-16 h-auto mt-8" src={Success} alt="Icono de Éxito" />
  );

  return (
    <div className="w-screen h-screen absolute top-0 z-10 bg-transparent flex items-start justify-center">
      <div
        style={{ width: "327px", height: "226px" }}
        className="flex flex-col rounded-sm bg-white relative top-48"
      >
        <div className="self-center justify-self-center h-20">
          {Object.keys(messagesModal).length !== 1 ? LOGO : <Spinner />}
          {}
        </div>
        <div className="flex flex-col mt-4 items-center">
          {Object.keys(messagesModal).length !== 0 ? PROCESANDO : ADD_MESSAGE}
        </div>
      </div>
    </div>
  );
};
