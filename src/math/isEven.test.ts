import { isEven } from "./isEven"

test("2 is even", () => {
    expect(isEven(2)).toBe(true)
})

test("3 is not even", () => {
    expect(isEven(3)).toBe(false)
})

test("0 is even", () => {
    expect(isEven(0)).toBe(true)
})

test("4 is even", () => {
    expect(isEven(4)).toBe(true)
})