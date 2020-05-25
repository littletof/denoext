import { test } from "./deps.ts";

export interface TestCase {
  result: any;
  input: any;
  desc?: string;
}

export function testEach<T extends TestCase>(
  name: string,
  input: T[],
  fn: (testCase: T) => void,
) {
  input.forEach((input, i) => {
    test(`${name} [${i}]`, () => {
      fn(input);
    });
  });
}
