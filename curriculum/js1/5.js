/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (x, cb) => {
  if(x===0) return;
  cb();
  return solution(x-1, cb);
};

module.exports = {
  solution,
};
