import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

jest.mock("./hooks/useCounter", () => ({
  useCounter: jest.fn(),
}));

import { useCounter } from "./hooks/useCounter";

describe("Counter", () => {
  it("should render the counter", () => {
    (useCounter as jest.Mock).mockReturnValue({
      count: 99,
      handleIncrement: jest.fn(),
      handleDecrement: jest.fn(),
    });

    render(<Counter />);

    const counter = screen.getByText("Counter");
    expect(counter).toBeInTheDocument();
    const counterValue = screen.getByText("99");
    expect(counterValue).toBeInTheDocument();
    const incrementButton = screen.getByText("+");
    expect(incrementButton).toBeInTheDocument();
    const decrementButton = screen.getByText("-");
    expect(decrementButton).toBeInTheDocument();

    userEvent.click(incrementButton);
    expect(useCounter.mock.calls[0][0].handleIncrement).toHaveBeenCalledTimes(
      1,
    );
    userEvent.click(decrementButton);
    expect(useCounter.mock.calls[0][0].handleDecrement).toHaveBeenCalledTimes(
      1,
    );
  });
});
