import { useEffect, useState } from "react";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";

export const UseEffect = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  type ErrorState = {
    [key: string]: { message: string; isError: boolean };
  };

  const [errors, setErrors] = useState<ErrorState>({
    username: { message: "Nombre de usuario no válido", isError: false },
    email: { message: "Correo no válido", isError: false },
  });

  const { email, username } = formState;

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: { ...prev[name], isError: false },
    }));
  };

  const validateField = (name: string, value: string) => {
    const validations: Record<string, RegExp> = {
      username: /^[a-zA-Z0-9_]{3,16}$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    };

    return validations[name]?.test(value) || false;
  };

  const handleReset = () => {
    setFormState({ username: "", email: "" });
    setErrors({
      username: { message: "Nombre de usuario no válido", isError: false },
      email: { message: "Correo no válido", isError: false },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      username: {
        message: "Nombre de usuario no válido, debe incluir al menos 3 caracteres",
        isError: !validateField("username", formState.username),
      },
      email: {
        message: "Correo no válido, debe incluir un @ y un dominio",
        isError: !validateField("email", formState.email),
      },
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error.isError)) {
      return;
    }

    alert(`Username: ${formState.username} \nEmail: ${formState.email}`);
    handleReset();
  };

  useEffect(() => {
    // console.log("Componente montado");
  }, []);

  useEffect(() => {
    // console.log("Componente FormState actualizado");
  }, [formState]);

  useEffect(() => {
    // console.log("email actualizado");
  }, [email]);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section className="flex flex-col gap-4 items-center justify-center w-full px-4">
      <h1 className="w-full text-2xl font-semibold text-violet-400 bg-violet-50 py-2 px-12 rounded-lg shadow-sm">
        Formulario Simple
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 items-start justify-center p-4 bg-violet-50 rounded-md shadow-sm"
      >
        <div className="flex items-center w-full border-b-2 bg-transparent border-violet-400 text-violet-400 placeholder-violet-400 outline-none focus-within:border-violet-600 transition duration-300">
          <FaUserAlt className="text-violet-400 m-2" />
          <input
            type="text"
            placeholder="Nombre de usuario"
            name="username"
            className="w-full px-2 py-2 bg-transparent outline-none placeholder-violet-400"
            value={username}
            onChange={onInputChange}
            
          />
        </div>
        <p
          className={`text-red-400 text-sm -mt-2 items-start text-start transition-all ${
            errors.username.isError ? "h-fit opacity-100" : "h-0 opacity-0"
          }`}
        >
          {errors.username.message}
        </p>

        <div className="flex items-center w-full border-b-2 bg-transparent border-violet-400 text-violet-400 placeholder-violet-400 outline-none focus-within:border-violet-600 transition duration-300">
          <FaEnvelope className="text-violet-400 m-2" />
          <input
            type="text"
            placeholder="ejemplo@ejemplo.com"
            name="email"
            className="w-full px-2 py-2 bg-transparent outline-none placeholder-violet-400"
            value={email}
            onChange={onInputChange}
            
          />
        </div>
        <p
          className={`text-red-400 text-sm -mt-2 items-start transition-all ${
            errors.email.isError ? "h-fit opacity-100" : "h-0 opacity-0"
          }`}
        >
          {errors.email.message}
        </p>

        <div className="flex justify-between w-full">
          <button
            onClick={handleReset}
            type="reset"
            className="mt-2 py-2 px-6 bg-violet-100 text-violet-500 rounded-full scale-95 transition-transform ease-in-out active:scale-105 hover:bg-violet-200"
          >
            Reiniciar
          </button>
          <button
            type="submit"
            className="mt-2 py-2 px-6 bg-violet-400 text-white rounded-full scale-95 transition-transform ease-in-out active:scale-105 hover:bg-violet-500"
          >
            Enviar
          </button>
        </div>
      </form>

      <div
        className={`transition-all ease-in-out overflow-hidden w-full flex ${
          username.length >= 3 ? "h-fit" : "h-0"
        }`}
      >
        {username.length >= 3 && <Message userName={username} />}
      </div>
    </section>
  );
};

const Message = ({ userName }: { userName: string }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }: { x: number; y: number }) => {
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h1
        className={`w-full text-2xl text-balance flex flex-col gap-4 truncate fade-up font-semibold text-violet-400 bg-violet-50 py-2 px-4 rounded-lg shadow-sm`}
      >
        <p>Hola {userName}!</p>
        <div
          className={`text-sm text-violet-400 bg-violet-100 p-2 rounded-md shadow-sm`}
        >
          <p>Estas son las coordenadas del mouse:</p>
          <p>
            x: {coords.x} y: {coords.y}
          </p>
        </div>
      </h1>
    </>
  );
};
