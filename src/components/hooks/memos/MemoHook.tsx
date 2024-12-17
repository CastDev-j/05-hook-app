import { useMemo, useState } from "react";

const heavyProcess = (iterations: number) => {
  for (let i = 0; i < iterations; i++) {}
  return `${iterations} iteraciones realizadas`;
};

export const MemoHook = () => {
  const [counter, setCounter] = useState(1000);
  const [show, setShow] = useState(true);

  // De esta forma el proceso pesado solo se ejecuta cuando el contador cambia, y no 
  // en cada renderizado del componente
  const memorizedHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <div className="flex flex-col items-center p-4 space-y-4 bg-indigo-100 rounded">
      <h1 className="text-2xl font-bold">Contador: {counter}</h1>

      <hr className="w-full border-t-2 border-indigo-300" />

      <p className="text-lg">{memorizedHeavyProcess}</p>

      <hr className="w-full border-t-2 border-indigo-300" />

      <button
        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 active:scale-95 transition-transform"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +1
      </button>

      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 active:scale-95 transition-transform"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
};
