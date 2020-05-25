# denoext

A collection of usefull code for me

## Getting started
Add the following to your `deps.ts`
```ts 
export {
  testEach,
  TestCase
} from 'https://raw.githubusercontent.com/littletof/denoext/master/mod.ts';
```

or just simply
```ts
import { testEach, TestCase } from 'https://raw.githubusercontent.com/littletof/denoext/master/mod.ts';
```

##

# testEach

Executes tests on the given testcases

### Usage
```ts
testEach(
  "split string",
  [
    {input: 'asd', result: ['asd']},
    {input: 'first,try', result: ['first', 'try']},
    {input: 'will,fail', result: ['told', 'you'], desc: 'Testcases could be wrong too'},
  ],
  (testCase: TestCase) => {
    assertEquals(fnToTest(testCase.input), testCase.result, testCase.desc);
  }
);

function fnToTest(input: string) {
  return input.split(',');
}
```

The output would look something like this:
![testEach_output.png](https://raw.githubusercontent.com/littletof/denoext/master/docs/img/testEach_output.png)

