const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');

  return arr.reduce((max, _, i) => {
    const number = Number(arr.slice(0, i).concat(arr.slice(i + 1)).join(''));
    return number > max ? number : max;
  }, 0)
}

module.exports = {
  deleteDigit
};