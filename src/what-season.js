const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  if (!(date instanceof Date) || Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!');
  }

  try {
    date.getTime();
    date.getMonth();
    date.getFullYear();
  } catch {
    throw new Error('Invalid date!');
  }
  
  const monthNumber = date.getMonth() + 1;
  if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) return 'winter';
  if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) return 'spring';
  if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) return 'summer';
  if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) return 'autumn';
}

module.exports = {
  getSeason
};
