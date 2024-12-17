import React, { useCallback, useRef } from "react";
import { Hijo } from "./Hijo";
import { useState } from "react";
import anime from "animejs";

export const CallBackHook = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);
  const roundLogEl = useRef(null!);

  const incrementar = useCallback((num: number) => {
    animateCount(num);
  }, []);

  const animateCount = (amount: number) => {
    setValor((c) => {
      anime({
        targets: roundLogEl.current,
        innerHTML: [c, c + amount],
        easing: "linear",
        duration: 300,
        round: 1,
      });

      return c + amount;
    });
  };

  return (
    <div
      className={`flex flex-col gap-4 items-center justify-center w-full px-4`}
    >
      <h1
        className={`w-full text-2xl text-balance flex flex-col gap-4 truncate fade-up font-semibold text-red-400 bg-red-50 py-2 px-4 rounded-lg shadow-sm`}
      >
        Padre
      </h1>
      <p
        className={`
            text-lg text-center text-red-400 bg-red-50 py-2 px-4 rounded-lg shadow-sm`}
      >
        Total: <span ref={roundLogEl}>{valor}</span>
      </p>

      <div className="flex justify-center gap-2">
        {numeros.map((n) => (
          <Hijo key={n} numero={n} incrementar={incrementar} />
        ))}
      </div>
      {/* <Hijo /> */}
    </div>
  );
};
