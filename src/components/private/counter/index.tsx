import { useCounter } from "./hooks/useCounter";
import * as Sentry from "@sentry/react";

function Counter() {
  const { count, handleIncrement, handleDecrement } = useCounter();

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button type="button" id="increment" onClick={handleIncrement}>
        +
      </button>
      <button type="button" id="decrement" onClick={handleDecrement}>
        -
      </button>

      <br />
      <button
        onClick={() => {
          Sentry.captureMessage("Something went wrong");
          throw new Error("This is your first error!");
        }}
      >
        Break the world
      </button>
      <br />
    </>
  );
}

export default Counter;
