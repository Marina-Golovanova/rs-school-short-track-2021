/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function countTokens(tokens) {
  const tokensEls = tokens.split('.');
  const tokensList = [];
  for (let i = tokensEls.length - 1; i >= 0; i--) {
    const lastToken = tokensList[tokensList.length - 1];
    tokensList.push(tokensEls[i] + (lastToken ? `.${lastToken}` : ''));
  }
  return tokensList.map((el) => `.${el.split('.').reverse().join('.')}`);
}

function getDNSStats(domains) {
  let allTokens = [];
  for (let i = 0; i < domains.length; i++) {
    allTokens = allTokens.concat(countTokens(domains[i]));
  }
  allTokens = allTokens.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  return allTokens;
}

module.exports = getDNSStats;
