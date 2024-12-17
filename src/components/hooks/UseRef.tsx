import { useRef, useState } from "react";
import { FaUserAlt } from "react-icons/fa";

export const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  const onClick = () => {
    inputRef.current.select();
  };

  const [userName, setUserName] = useState("");

  return (
    <section className="flex flex-col gap-4 items-center justify-center w-full px-4">
      <h1 className="fade-up w-full text-2xl font-semibold text-orange-400 bg-orange-50 py-2 px-12 rounded-lg shadow-sm">
        Formulario Simple con useRef
      </h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="fade-up flex flex-col p-4 gap-8 items-center justify-center w-full bg-orange-50 "
      >
        <div className="flex justify-between w-full">
          <button
            onClick={onClick}
            type="button"
            className="mt-2 w-full py-2 px-6 bg-orange-100 text-orange-500 rounded-full scale-95 transition-transform ease-in-out active:scale-105 hover:bg-orange-200"
          >
            Hazme clic para enfocar el input de Nombre de usuario
          </button>
        </div>

        <div className="flex items-center w-full border-b-2 bg-transparent border-orange-400 text-orange-400 placeholder-orange-400 outline-none focus-within:border-orange-600 transition duration-300">
          <FaUserAlt className="text-orange-400 m-2" />
          <input
            ref={inputRef}
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
            placeholder="Nombre de usuario"
            name="username"
            className="w-full px-2 py-2 bg-transparent outline-none placeholder-orange-400"
          />
        </div>

        <div
          className={`transition-all ease-in-out overflow-hidden p-4 w-full flex text-orange-400 bg-orange-100 rounded-lg shadow-sm`}
        >
          <h2
            className={`w-full text-2xl text-balance truncate text-ellipsis font-semibold`}
          >
            Hola {userName.length <= 0 ? '"Ingresa tu Nombre"' : userName}!
          </h2>
        </div>
      </form>
    </section>
  );
};
