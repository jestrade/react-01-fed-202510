import { render, screen } from "@testing-library/react";
import Counter from "./index";

jest.mock("./hooks/useCounter", () => ({
  useCounter: jest.fn(),
}));

import { useCounter } from "./hooks/useCounter";

describe("Counter", () => {
  it("should render the counter", () => {
    (useCounter as jest.Mock).mockReturnValue({
      count: 55,
      handleIncrement: jest.fn(),
      handleDecrement: jest.fn(),
    });

    render(<Counter />);

    const counter = screen.getByText("Counter");
    expect(counter).toBeInTheDocument();
    const counterValue = screen.getByText("55");
    expect(counterValue).toBeInTheDocument();
    const incrementButton = screen.getByText("+");
    expect(incrementButton).toBeInTheDocument();
    const decrementButton = screen.getByText("-");
    expect(decrementButton).toBeInTheDocument();
  });
});
