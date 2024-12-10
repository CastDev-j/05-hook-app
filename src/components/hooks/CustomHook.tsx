import anime from "animejs";
import { useState, useRef } from "react";

import { FaMinus, FaPlus, FaRedo } from "react-icons/fa";

export const CustomHook = ({ initialState }: { initialState: number }) => {
  const roundLogEl = useRef(null);
  const [counter, increment, decrement, reset] = useCounter(
    initialState,
    roundLogEl
  );

  return (
    <>
      <h1 className="text-2xl font-semibold text-red-400 bg-red-100 py-2 px-6 rounded-full">
        <span ref={roundLogEl}>{counter}</span>
      </h1>

      <section className="flex flex-1 gap-4 items-center justify-center">
        <button
          onClick={() => decrement(10)}
          className="mt-4 p-4 bg-red-400 text-white rounded-full  scale-95 transition-transform ease-in-out active:scale-105 flex items-center gap-2"
        >
          <FaMinus />
        </button>
        <button
          onClick={reset}
          className="mt-4 p-4 bg-red-400 text-white rounded-full scale-95 transition-transform ease-in-out active:scale-105 flex items-center gap-2"
        >
          <FaRedo />
        </button>
        <button
          onClick={() => increment(10)}
          className="mt-4 p-4 bg-red-400 text-white rounded-full scale-95 transition-transform ease-in-out active:scale-105 flex items-center gap-2"
        >
          <FaPlus />
        </button>
      </section>
    </>
  );
};

const useCounter = (
  initialValue: number,
  roundLogEl: React.MutableRefObject<any>
): [
  counter: number,
  increment: (value?: number) => void,
  decrement: (value?: number) => void,
  reset: () => void
] => {
  const [counter, setCounter] = useState(initialValue);

  const animateCount = (newCount: number) => {
    anime({
      targets: roundLogEl.current,
      innerHTML: [counter, newCount],
      easing: "linear",
      duration: 300,
      round: 1,
    });
    setCounter(newCount);
  };

  const increment = (value = 1) => animateCount(counter + value);
  const decrement = (value = 1) => animateCount(counter - value);
  const reset = () => animateCount(initialValue);

  return [counter, increment, decrement, reset];
};
