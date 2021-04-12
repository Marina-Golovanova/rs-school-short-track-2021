/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function revertRowCol(matrix) {
  const revertMatrix = [];
  let col = 0;

  while (col < matrix[0].length) {
    let row = 0;
    const newRow = [];
    while (row < matrix.length) {
      newRow.push(matrix[row][col]);
      row += 1;
    }
    revertMatrix.push(newRow);
    col += 1;
  }
  return revertMatrix;
}

function getMatrixElementsSum(matrix) {
  const newMatrix = revertRowCol(matrix);
  let sum = 0;
  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[i].length; j++) {
      if (newMatrix[i][j] !== 0) {
        sum += newMatrix[i][j];
      } else {
        break;
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
