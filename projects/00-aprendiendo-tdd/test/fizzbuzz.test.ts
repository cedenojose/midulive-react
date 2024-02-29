/*
Escribir una funcion que al pasarle un numero:
  -Muesta "fizz" si es multiplo de 3.
  -Muesta "buzz" si es multiplo de 5.
  -Muesta "fizzbuzz" si es multiplo de 3 y 5.
  -Muesta el numero si no es multiplo de ninguno de los anteriores.
*/

import { describe, expect, it } from "vitest";

import fizzbuzz, { FizzBuzzType } from "../src/fizzbuzz";

describe("fizzbuzz", (): void => {
  // Primer test, como los demas lo cubren ya se puede eliminar
  // it('should be a function', (): void => {
  //   expect(typeof (fizzbuzz)).toBe('function')
  // });
  it('should throw if not number is provided as parameter', (): void => {
    expect((): FizzBuzzType => fizzbuzz()).toThrow();
  });
  it('should throw a specific error message if not number is provided as parameter', (): void => {
    expect((): FizzBuzzType => fizzbuzz()).toThrow('parameter provided must be a number');
  });
  it('should throw a specific error message if not a number is provided', (): void => {
    expect((): FizzBuzzType => fizzbuzz(NaN)).toThrow('parameter provided must be a number');
  });
  it('should return 1 if number provided is 1', (): void => {
    expect(fizzbuzz(1)).toBe(1);
  });
  it('should return 2 if number provided is 2', (): void => {
    expect(fizzbuzz(2)).toBe(2);
  });
  it('should return "fizz" if number provided is 3', (): void => {
    expect(fizzbuzz(3)).toBe('fizz');
  });
  it('should return "fizz" if number provided is multiple of 3', (): void => {
    expect(fizzbuzz(6)).toBe('fizz');
    expect(fizzbuzz(9)).toBe('fizz');
    expect(fizzbuzz(12)).toBe('fizz');
  });

  it('should return "buzz" if number provided is 5', (): void => {
    expect(fizzbuzz(5)).toBe('buzz');
  });
  it('should return "buzz" if number provided is multiple of 5', (): void => {
    expect(fizzbuzz(10)).toBe('buzz');
    expect(fizzbuzz(20)).toBe('buzz');
    expect(fizzbuzz(25)).toBe('buzz');
  });
  it('should return "fizzbuzz" if number provided is multiple of 3 and 5', (): void => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
    expect(fizzbuzz(30)).toBe('fizzbuzz');
    expect(fizzbuzz(45)).toBe('fizzbuzz');
  });

});
