import anime from "animejs";
import { useRef, useState } from "react";
import { FaPlus, FaRedo } from "react-icons/fa";

export const UseState = () => {
  const initialValue = 0;
  const roundLogEl = useRef(null);
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
  const reset = () => animateCount(initialValue);

  return (
    <>
      <h1 className="text-2xl font-semibold text-blue-400 bg-blue-100 py-2 px-6 rounded-full">
        <span ref={roundLogEl}>{counter}</span>
      </h1>

      <section className="flex flex-1 gap-4 items-center justify-center">
        <button
          onClick={reset}
          className="mt-4 p-4 bg-blue-400 text-white rounded-full scale-95 transition-transform ease-in-out active:scale-105 flex items-center gap-2"
        >
          <FaRedo />
        </button>
        <button
          onClick={() => increment(5)}
          className="mt-4 p-4 bg-blue-400 text-white rounded-full scale-95 transition-transform ease-in-out active:scale-105 flex items-center gap-2"
        >
          <FaPlus />
        </button>
      </section>
    </>
  );
};
