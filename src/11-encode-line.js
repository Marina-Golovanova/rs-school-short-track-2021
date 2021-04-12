/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const currentStr = str;
  let newStr = '';
  let sum = 1;
  for (let i = 0; i < currentStr.length; i++) {
    if (currentStr[i] === currentStr[i + 1]) {
      sum += 1;
    } else {
      newStr += sum + currentStr[i];
      sum = 1;
    }
  }
  return newStr.split('').filter((el) => el !== '1').join('');
}

module.exports = encodeLine;
