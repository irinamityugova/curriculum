/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b) => {
  let str = "";
  for(let i=0; i<a; i++){
    str+=b;
  }
  return str;
};

module.exports = {
  solution,
};
