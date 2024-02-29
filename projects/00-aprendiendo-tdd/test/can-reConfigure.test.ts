/*Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo: */

import { describe, it, expect } from "vitest";

import canReconfigure from "../src/can-reConfigure";

describe("canReconfigure", () => {
  // it('should be a function', (): void => {
  //   expect(canReconfigure).toBeTypeOf('function')
  // });
  it('should throw if first parameter is missing', (): void => {
    expect((): boolean => canReconfigure()).toThrow();
  });
  it("should throw if first parameter is not string", (): void => {
    expect((): boolean => canReconfigure(2)).toThrow();
  });
  it("should throw if second parameter is not string", (): void => {
    expect((): boolean => canReconfigure("a", 2)).toThrow();
  });
  it('should retunr a boolean', (): void => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean');
  });
  it('should return false if string provided have different length', (): void => {
    expect(canReconfigure('abc', 'de')).toBe(false);
  });
  it('should return false if strings provided have different number of unique letters', (): void => {
    expect(canReconfigure('CON', 'JUU')).toBe(false);
  });
  it('should return false if string has different order of transformation', (): void => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false);
  })
});
