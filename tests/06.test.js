import test from "tape";

import countWords from "../src/06";

test("06 - Reduce", assert => {
  const msg = "creates object that contains the number of times each string occurs";

  const inputWords = ["Apple", "Banana", "Apple", "Durian", "Durian", "Durian"];

  const actual = countWords(inputWords);
  const expected = {
    Apple: 2,
    Banana: 1,
    Durian: 3,
  };

  assert.deepEqual(actual, expected, msg);

  assert.end();
});
