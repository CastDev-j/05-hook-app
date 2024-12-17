import { memo } from "react";

export const ShowIncrement = memo(
  ({ increment }: { increment: (value:number) => void }) => {
    console.log("me volví a generar :(");

    return (
      <button
        onClick={()=>increment(5)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 active:scale-95 transition-transform"
      >
        +5
      </button>
    );
  }
);
