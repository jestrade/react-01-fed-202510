import { useCounter } from "./hooks/useCounter";
import { useFeatureIsOn } from "@growthbook/growthbook-react";
import { StyledButton, Title } from "./styled";

function Counter() {
  const { count, handleIncrement, handleDecrement } = useCounter();
  const enabled = useFeatureIsOn("my-experiment");

  console.log("enabled", enabled);

  return (
    <>
      <Title>Counter</Title>
      <p>{count}</p>
      <StyledButton type="button" id="increment" onClick={handleIncrement}>
        +
      </StyledButton>
      <StyledButton type="button" id="decrement" onClick={handleDecrement}>
        -
      </StyledButton>
    </>
  );
}

export default Counter;
