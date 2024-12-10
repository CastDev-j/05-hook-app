import anime from "animejs";
import { useRef, useState } from "react";

export const UseState = () => {
  // const [{ count1, count2, count3 }, setCount] = useState({
  //   count1: 0,
  //   count2: 0,
  //   count3: 0,
  // });

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
      <button
        className={`absolute top-2 right-2 p-2 bg-blue-400 rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 scale-95 active:scale-105`}
        onClick={() => reset()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g
              fill="none"
              fillRule="evenodd"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              transform="translate(2 2)"
            >
              <path d="m4.5 1.5c-2.4138473 1.37729434-4 4.02194088-4 7 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"></path>
              <path d="m4.5 5.5v-4h-4"></path>
            </g>
          </g>
        </svg>
      </button>
      <p className="text-2xl font-semibold text-blue-400">
        You clicked <span
        ref={roundLogEl}
        >{counter}</span> times
      </p>
      <button
        className="mt-4 px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() =>
          increment(5)
        }
      >
        Click me
      </button>
    </>
  );
};
