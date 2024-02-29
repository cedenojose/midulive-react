export type FizzBuzzType = number | "fizz" | "buzz" | "fizzbuzz";

const fizzbuzz = (number?: number): FizzBuzzType => {
  if (typeof number !== "number") {
    throw new Error("parameter provided must be a number");
  }
  if (Number.isNaN(number)) {
    throw new Error("parameter provided must be a number");
  }

  const multiples = { 3: 'fizz', 5: 'buzz' };
  let output = ''
  Object
    .entries(multiples)
    .forEach(([multiple, word]): void => {
      if (number % Number(multiple) === 0) {
        output += word;
      }
    })
  return output === '' ? number : output as FizzBuzzType;
};

export default fizzbuzz;
