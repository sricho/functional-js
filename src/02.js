function repeat(operation, num) {
  if (num === 0) return;
  operation();

  // TODO: Fix the disabling of eslint here.
  num--;                         // eslint-disable-line
  return repeat(operation, num); // eslint-disable-line
}

module.exports = repeat;
