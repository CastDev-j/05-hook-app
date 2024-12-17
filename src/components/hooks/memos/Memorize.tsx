import { useState } from "react";
import { Small } from "./Small";

export const Memorize = () => {
  const [counter, setCounter] = useState(0);

  const [show, setShow] = useState(true);

  return (
    <div className="flex flex-col items-center">
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <button
        className="p-2 bg-yellow-500 text-white rounded mt-2 scale-95 transform active:scale-105 ease-in duration-75 transition-all"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Aumenta
      </button>

        <button
            className="p-2 bg-red-500 text-white rounded mt-2 scale-95 transform active:scale-105 ease-in duration-75 transition-all"
            onClick={() => {
            setShow(!show);
            }}
        >
            Show/Hide {JSON.stringify(show)}
        </button>


    </div>
  );
};
