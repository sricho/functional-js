import test from "tape";

import checkUsersValid from "../src/05";

test("05 - Every Some", assert => {
  // TODO: Fix double assertions

  let actual;
  let expected;
  let msg;

  const goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];
  const testAllValid = checkUsersValid(goodUsers);

  msg = "returns true if all users are good users";
  actual = testAllValid([
    { id: 2 },
    { id: 1 },
  ]);
  expected = true;
  assert.equal(actual, expected, msg);

  msg = "returns false not all users are good users";
  actual = testAllValid([
    { id: 2 },
    { id: 4 },
    { id: 1 },
  ]);
  expected = false;
  assert.equal(actual, expected, msg);

  assert.end();
});
