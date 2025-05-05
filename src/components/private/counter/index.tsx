import { useCounter } from "./hooks/useCounter";
import * as Sentry from "@sentry/react";
import { useFeatureIsOn } from "@growthbook/growthbook-react";

function Counter() {
  const { count, handleIncrement, handleDecrement } = useCounter();
  const enabled = useFeatureIsOn("my-experiment");

  console.log("enabled", enabled);

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
    </>
  );
}

export default Counter;
