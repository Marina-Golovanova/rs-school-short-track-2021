/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function count(list, el) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === el) {
      sum += 1;
    }
  }
  return sum;
}

function getCommonCharacterCount (s1, s2) {
  const letter = Array.from(new Set((s1 + s2).split('')));
  let sum = 0;
  for (let i = 0; i < letter.length; i++) {
    if (s1.includes(letter[i]) && s2.includes(letter[i])) {
      sum += Math.min(count(s1.split(''), letter[i]), count(s2.split(''), letter[i]));
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
