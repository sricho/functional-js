import test from "tape";

import reduce from "../src/07";

test("07 - Recursion", assert => {
  const msg = "Implement Array#reduce using recursion.";

  const actual = reduce([1, 2, 3], (prev, curr) => {
    return prev + curr;
  }, 0);

  const expected = 6;

  assert.equal(actual, expected, msg);

  assert.end();
});
