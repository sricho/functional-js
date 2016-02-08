import test from "tape";

import getShortMessages from "../src/04";

test("04 - Filter", assert => {
  const msg = "filters message properties less than 50 characters long";

  const messages = [
    { message: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet." },
    { message: "Tempor quis esse consequat sunt ea eiusmod." },
    { message: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet." },
    { message: "Est ut irure irure nisi." },
  ];

  const actual = getShortMessages(messages);
  const expected = [
    "Tempor quis esse consequat sunt ea eiusmod.",
    "Est ut irure irure nisi." ];

  assert.deepEqual(actual, expected, msg);

  assert.end();
});
