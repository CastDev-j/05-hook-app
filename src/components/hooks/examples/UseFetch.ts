import { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}

interface PokemonSprites {
  front_default: string;
}

interface PokemonData {
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
}

interface LocalCache {
  [url: string]: PokemonData;
}

const localCache: LocalCache = {
  //   "https://pokeapi.co/api/v2/pokemon/1": {
  //     name: "bulbasaur",
  //     height: 7,
  //     weight: 69,
  //     sprites: {
  //       front_default:
  //         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  //     },
  //   },
  //   "https://pokeapi.co/api/v2/pokemon/2": {
  //     name: "ivysaur",
  //     height: 10,
  //     weight: 130,
  //     sprites: {
  //       front_default:
  //         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  //     },
  //   },
};

export const UseFetch = (url: string) => {
  const [state, setState] = useState({
    data: {} as Pokemon,
    loading: true,
    hasError: false,
    error: {
      code: 0,
      message: "",
    },
  });

  useEffect(() => {
    setLoadingState();
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: {} as Pokemon,
      loading: true,
      hasError: false,
      error: {
        code: 0,
        message: "",
      },
    });
  };

  const getFetch = async () => {
    if (localCache[url]) {

        return setState({
            data: localCache[url],
            loading: false,
            hasError: false,
            error: {
                code: 0,
                message: "",
            },
        });
    }

    setLoadingState();

    const resp = await fetch(url);

    // await new Promise((resolve) => setTimeout(resolve, 500));

    if (!resp.ok) {
      setState({
        data: {} as Pokemon,
        loading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });

      return;
    }

    const data = await resp.json();

    setState({
      data,
      loading: false,
      hasError: false,
      error: {
        code: 0,
        message: "",
      },
    });

    localCache[url] = {
      name: data.name,
      height: data.height,
      weight: data.weight,
      sprites: {
        front_default: data.sprites.front_default,
      },
    };
  };

  return {
    data: state.data,
    loading: state.loading,
    hasError: state.hasError,
    error: state.error,
  };
};
