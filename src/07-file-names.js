/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newNames = names;
  for (let i = 0; i < newNames.length; i++) {
    let item = 1;
    while (newNames.slice(i + item).includes(newNames[i])) {
      newNames[newNames.slice(i + item).indexOf(newNames[i]) + item + i] += `(${item})`;
      item += 1;
    }
  }
  return newNames;
}

module.exports = renameFiles;
