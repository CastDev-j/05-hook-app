import { useState, useCallback, useRef } from "react";
import { ShowIncrement } from "./ShowIncrement";
import anime from "animejs";

export const CallBackHooks = () => {
  const [counter, setCounter] = useState(10);
  const roundLogEl = useRef(null!);

  const increment = useCallback((amount: number) => animateCount(amount), []);

  const animateCount = (amount: number) => {
    setCounter((c) => {
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
    <div style={{ color: "red" }}>
      <h2>CallBackHook</h2>
      <hr />
      <h2>
        Counter: <span ref={roundLogEl}>{counter}</span>
      </h2>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
