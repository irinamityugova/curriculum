/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */
const solution = (a, i=0, sum=0) => {
  if(a.length===0) return '';
  if(i===a.length) return sum;
  sum=a[i]+sum;
  return solution(a, i+1, sum)
};

module.exports = {
  solution,
};
