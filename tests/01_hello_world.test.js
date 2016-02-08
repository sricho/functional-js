import test from 'tape';

import upperCaser from '../src/01';

test('01 - Hello World', assert => {
  const msg = 'should turn a string to uppercase';

  const expected = 'HELLO WORLD';
  const actual = upperCaser("hello world");

  assert.equal(actual, expected, msg);

  assert.end();
});
