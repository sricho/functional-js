import test from 'tape';
import sinon from 'sinon';

import higherOrderMethod from '../src/02';

test('02 - Higher order functions', assert => {
  const msg = 'calls an operation a number of times';

  const spy = sinon.spy();
  higherOrderMethod(spy, 7);

  const expected = 7;
  const actual = spy.callCount;

  assert.equal(actual, expected, msg);

  assert.end();
});
