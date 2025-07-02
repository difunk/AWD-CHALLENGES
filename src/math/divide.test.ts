import { divide } from "./divide"

test("Throw error if b is 0", () => {
    expect(() => divide(1,0)).toThrow("Cannot divide by zero");
})