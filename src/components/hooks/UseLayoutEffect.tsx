import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { UseFetch } from "@/components/hooks/examples/UseFetch";

export const UseLayoutEffect = () => {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemonId, setPokemonId] = useState(10);

  const [url, setUrl] = useState(`${baseUrl}${pokemonId}`);
  const { data, error, hasError, loading } = UseFetch(url);
  const [called, setCalled] = useState(false);
  useEffect(() => {
    if (data && !loading) {
      setCalled(true);
    }
  }, [data]);

  const { name, height, sprites, weight } = data;
  const nameRef = useRef<HTMLParagraphElement>(null!);

  useLayoutEffect(() => {
    if (!nameRef.current) {
      return;
    }

    const { height, width } = nameRef.current?.getBoundingClientRect();
  }, [name]);

  return (
    <section className="flex flex-col gap-4 items-center justify-center w-full px-4">
      <h1 className="text-2xl w-full font-semibold text-green-400 bg-green-100 py-2 px-6 rounded-full text-center">
        Información del Pokemon
      </h1>

      <div className="flex gap-6 my-6 items-center w-full">
        <label
          htmlFor="pokemonId2"
          className="text-green-400 font-medium w-full"
        >
          Pokemon ID:
        </label>
        <input
          type="number"
          id="pokemonId2"
          name="pokemonId2"
          value={pokemonId}
          onChange={(e) => {
            const id = parseInt(e.target.value, 10);
            setPokemonId(id);
            setUrl(`${baseUrl}${id}`);
          }}
          className="w-full border-2 border-green-200 rounded-md p-2 text-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 hover:border-green-300 transition-all duration-200 ease-in-out no-spinner"
        />
      </div>

      <section
        className={`w-full flex flex-1 gap-4 items-center justify-center fade-up transition-all duration-300 ease-in ${
          called ? "h-fit " : "h-0 "
        }`}
      >
        {loading ? (
          <article className="animate-pulse bg-green-100 text-green-400 font-semibold text-2xl py-2 px-6 rounded-full">
            Cargando...
          </article>
        ) : (
          <article className="w-full flex flex-col gap-6 p-6 bg-gradient-to-b from-green-50 to-green-100 rounded-xl shadow-md text-green-600 font-semibold fade-up">
            {hasError ? (
              <div className="text-center text-red-500">
                <p className="text-lg font-bold">Error:</p>
                <p className="text-sm">{error.code}</p>
                <p className="text-sm">{error.message}</p>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center">
                <figure className="flex flex-col items-center gap-4">
                  <img
                    src={sprites.front_default}
                    alt={`Sprite of ${name}`}
                    className="w-36 h-36 rounded-full p-4 shadow-lg border-4 border-green-200"
                  />
                  <figcaption className="text-2xl text-green-700">
                    <p ref={nameRef}>{name}</p>
                  </figcaption>
                </figure>
                <div className="text-green-500 mt-4">
                  <p className="text-sm">
                    Altura: <span className="font-medium">{height} dm</span>
                  </p>
                  <p className="text-sm">
                    Peso: <span className="font-medium">{weight} hg</span>
                  </p>
                </div>
              </div>
            )}
          </article>
        )}
      </section>
    </section>
  );
};
