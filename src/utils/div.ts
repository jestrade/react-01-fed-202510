export const div = (num1: number, num2: number): string | number => {
  if (num2 === 0) {
    return "Cannot divide by zero";
  }
  return num1 / num2;
};
