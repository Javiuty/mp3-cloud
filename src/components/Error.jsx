const Error = ({ type, message }) => {
  return (
    <p
      className={`w-10/12 ml-4 mt-4 px-4 py-2 ${
        type === "error" ? "bg-red-600" : "bg-green-600"
      } text-white font-bold text-center rounded-sm`}
    >
      {message}
    </p>
  );
};

export default Error;
