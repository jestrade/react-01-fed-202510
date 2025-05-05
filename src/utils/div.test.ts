import { div } from "./div";

describe("div", () => {
  it("should return the division of two numbers", () => {
    expect(div(1, 2)).toBe(0.5);
  });

  it("should return an error if the second number is zero", () => {
    expect(div(1, 0)).toBe("Cannot divide by zero");
  });
});
