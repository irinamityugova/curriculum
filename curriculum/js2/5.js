/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

const solution = (a, i=0, accum=a[0]) => {
  if(a.length===0) return '';
  if(i===a.length) return accum;
  accum=Math.max(accum, a[i])
  return solution(a, i+1, accum);
};

module.exports = {
  solution,
};
