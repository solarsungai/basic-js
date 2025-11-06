const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const numbers = arr.filter(num => num !== -1);
  const sortedNumbers = numbers.sort((a, b) => a - b);
  let ind = 0;

  const resultArr = arr.map(num => {
    if (num === -1) return -1;
    const val = sortedNumbers[ind];
    ind = ind + 1;
    return val;
  });

  return resultArr;
}

module.exports = {
  sortByHeight
};
