import test from 'tape';

import doubleAll from '../src/03';

test('03 - Map', assert => {
  const msg = 'doubles all values in an array';

  const expected = [2, 4, 6, 8];
  const actual = doubleAll([1, 2, 3, 4]);

  assert.deepEqual(actual, expected, msg);

  assert.end();
});
