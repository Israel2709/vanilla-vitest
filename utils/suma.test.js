import { describe, it, expect } from "vitest";
import { sumaDosNumeros } from "./suma";

describe("Prueba de suma de dos números", () => {
  it("Should receive 2 numbers and return the result of the addition", () => {
    expect(sumaDosNumeros(1, 2)).toBe(3);
  });
});
