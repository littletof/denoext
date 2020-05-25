import { assertEquals, test } from "./test_deps.ts";

import { testEach, TestCase } from "./testEach.ts";

const testCases: TestCase[] = [
  { input: { a: 2, b: 2 }, result: true, desc: "Should be true" },
  { input: { a: 2, b: 5 }, result: false },
];

const calledTestCases: TestCase[] = [];

testEach("run tests with testEach", testCases, (testCase) => {
  assertEquals(
    testCase.input.a === testCase.input.b,
    testCase.result,
    testCase.desc,
  );
  calledTestCases.push(testCase);
});

test("test testEach", () => {
  assertEquals(testCases.length, calledTestCases.length);
  testCases.forEach((tc, i) => {
    // TODO handle random execution
    assertEquals(tc, calledTestCases[i]);
  });
});
