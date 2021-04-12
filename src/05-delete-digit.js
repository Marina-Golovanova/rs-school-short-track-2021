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
  const result = Array.from(String(n));
  const min = `${Math.min.apply(null, result)}`;
  const index = result.indexOf(min);
  result.splice(index, 1);
  return +result.join('');
}

module.exports = deleteDigit;
