import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";

import Calculator, { equalSign, numbers, operations } from "../src/Calculator";

describe("Calculator", () => {
  afterEach(cleanup);
  it("should render Calculator component", (): void => {
    render(<Calculator />);
  });
  it("should render title correctly", (): void => {
    render(<Calculator />);
    screen.getByText("Calculator");
  });
  it("should render numbers", (): void => {
    render(<Calculator />);
    numbers.forEach((number) => {
      screen.getAllByText(number);
    });
  });
  it("should render 4 rows", (): void => {
    render(<Calculator />);
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(4);
  });
  it("should render operations", (): void => {
    render(<Calculator />);
    operations.forEach((operation) => {
      screen.getByText(operation);
    });
  });
  it("should render equal sign", (): void => {
    render(<Calculator />);
    screen.getAllByText(equalSign);
  });
  it("should render an input", (): void => {
    render(<Calculator />);
    screen.getAllByRole("textbox");
  });
  it("should contain an name the input", (): void => {
    render(<Calculator />);
    const input: HTMLInputElement = screen.getByRole("textbox");
    expect(input.name).toBe("value");
  });
  it("should user input after clicking a number", () => {
    render(<Calculator />);
    const one = screen.getByText("1");
    fireEvent.click(one);
    const input: HTMLInputElement = screen.getByRole("textbox");
    expect(input.value).toBe("1");
  });
  it("should user input after clicking several number", (): void => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);

    const two = screen.getByText("2");
    fireEvent.click(two);

    const three = screen.getByText("3");
    fireEvent.click(three);

    const input: HTMLInputElement = screen.getByRole("textbox");
    expect(input.value).toBe("123");
  });
  it("should show user input after clicking numbers and opetarions", (): void => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);

    const plus = screen.getByText("+");
    fireEvent.click(plus);

    fireEvent.click(one);

    const input: HTMLInputElement = screen.getByRole("textbox");
    expect(input.value).toBe("1+1");
  });
  it("should calculate based on user input and show the calculation", (): void => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);

    const plus = screen.getByText("+");
    fireEvent.click(plus);

    fireEvent.click(one);

    const equal = screen.getByText(equalSign);
    fireEvent.click(equal);

    const input: HTMLInputElement = screen.getByRole("textbox");
    expect(input.value).toBe("2");
  });
  // it("should render clear button", (): void => {
  //   render(<Calculator />);
  //   const clear = screen.getByText("CE");
  // });
  it("should clear calculator on click button CE", (): void => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);

    const clear = screen.getByText("CE");
    fireEvent.click(clear);

    const input: HTMLInputElement = screen.getByRole("textbox");
    expect(input.value).toBe("");
  });
  it("should maintain the same value when double clicking on the equals button", (): void => {
    render(<Calculator />);
    const one = screen.getByText("1");
    fireEvent.click(one);

    const equal = screen.getByText(equalSign);
    fireEvent.click(equal);

    fireEvent.click(equal);

    const input: HTMLInputElement = screen.getByRole("textbox");
    expect(input.value).toBe("1");
  });
  it("should if there is nothing on the screen, maintain the same value when multiple clicking on the equals button", (): void => {
    render(<Calculator />);

    const equal = screen.getByText(equalSign);
    fireEvent.click(equal);

    fireEvent.click(equal);

    fireEvent.click(equal);

    const input: HTMLInputElement = screen.getByRole("textbox");
    expect(input.value).toBe("");
  });
  it("should operate after an operation of equal", (): void => {
    render(<Calculator />);
    const one = screen.getByText("1");
    fireEvent.click(one);

    const plus = screen.getByText("+");
    fireEvent.click(plus);

    fireEvent.click(one);

    const equal = screen.getByText(equalSign);
    fireEvent.click(equal);

    fireEvent.click(plus);

    fireEvent.click(one);

    fireEvent.click(equal);

    const input: HTMLInputElement = screen.getByRole("textbox");
    expect(input.value).toBe("3");
  });
  it("should allow only 1 operator after a quantity", (): void => {
    render(<Calculator />);

    const three = screen.getByText("3");
    fireEvent.click(three);

    const plus = screen.getByText("+");
    fireEvent.click(plus);
    fireEvent.click(plus);

    const input: HTMLInputElement = screen.getByRole("textbox");
    expect(input.value).toBe("3+");
  });
  it("should show operation if have 1 quantity and 1 operator", (): void => {
    render(<Calculator />);

    const three = screen.getByText("3");
    fireEvent.click(three);

    const plus = screen.getByText("+");
    fireEvent.click(plus);

    const equal = screen.getByText(equalSign);
    fireEvent.click(equal);

    const input: HTMLInputElement = screen.getByRole("textbox");
    expect(input.value).toBe("6");
  });
  // it("should if falta algun operando debe aplicar la operacion con el numero ingresado", (): void => {
  //   render(<Calculator />);

  //   const three = screen.getByText("3");
  //   fireEvent.click(three);

  //   const plus = screen.getByText("+");
  //   fireEvent.click(plus);

  //   const equal = screen.getByText(equalSign);
  //   fireEvent.click(equal);

  //   const input: HTMLInputElement = screen.getByRole("textbox");
  //   expect(input.value).toBe("6");
  // });
});
