function countWords(inputWords) {
  return inputWords.reduce((fruitsCount, currentFruit) => {
    fruitsCount[currentFruit] = ++fruitsCount[currentFruit] || 1;
    return fruitsCount;
  }, {});
}

module.exports = countWords
