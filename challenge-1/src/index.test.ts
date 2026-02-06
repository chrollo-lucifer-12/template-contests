import { add } from "./index";

describe("Add", () => {
  test("add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
