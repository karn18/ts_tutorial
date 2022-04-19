import { foo, bar } from "../src/silly"

test("foo", () => {
  const actual = foo()
  expect(actual).toBe("foo")  
})

test("bar", () => {
  const actual = bar()
  expect(actual).toEqual(1)  
})
