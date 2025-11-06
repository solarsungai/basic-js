const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  };
  let skipNext = false;

  let resultArr = arr.reduce((acc, el, i) => {
    if (skipNext) {
      skipNext = false;
      return acc;
    } 
    if (el === '--discard-next') {
      skipNext = true;
    } else if (el === '--discard-prev') {
      if (acc.length > 0 && arr[i - 2] !== '--discard-next') acc.pop();
    } else if (el === '--double-next') {
      if (i + 1 < arr.length) acc.push(arr[i + 1]);
    } else if (el === '--double-prev') {
      if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') acc.push(arr[i - 1]);
    } else {
      acc.push(el);
    };
    return acc;
  }, []);

  return resultArr;
}

module.exports = {
  transform
};
