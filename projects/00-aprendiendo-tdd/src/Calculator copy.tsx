import React, { useState } from "react";
import { evaluate, chain } from "mathjs";

export const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const rows: number[][] = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
export const operations: string[] = ["+", "-", "*", "/"];
export const equalSign: string = "=";
const Calculator = (): React.ReactElement | null => {
  const [value, setValue] = useState<string>("");
  // const [result, setResult] = useState<string>("");
  const createHandleClick =
    (operation: string): React.MouseEventHandler =>
    (): void => {
      setValue(value.toString().concat(operation));
    };

  const handleClickEqual = (): void => {
    // setResult(value);
    setValue(evaluate(value.toString()) || "");
  };

  const handleClickClear = (): void => {
    setValue("");
    // setResult("");
  };
  console.log("en consola 3+4,", chain(3).add(4));
  return (
    <section>
      <h1>Calculator</h1>
      <input
        name="value"
        value={value}
        readOnly
      />
      <div role="grid">
        {rows.map((row, index) => (
          <div
            key={index}
            role="row"
          >
            {row.map((number) => (
              <button
                key={number}
                onClick={createHandleClick(number.toString())}
              >
                {number}
              </button>
            ))}
          </div>
        ))}
        {operations.map((operation) => (
          <button
            key={operation}
            onClick={createHandleClick(operation)}
          >
            {operation}
          </button>
        ))}
        <button onClick={handleClickEqual}>{equalSign}</button>
        <button onClick={handleClickClear}>{"CE"}</button>
      </div>
    </section>
  );
};
export default Calculator;
