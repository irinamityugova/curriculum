/**
 * Given an array, return the same array
 *   where all odd elements are changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (arr=[], i=0) => {
  if(i===arr.length)return arr;
  if(arr[i]%2!==0) arr[i]=0;
  return solution(arr, i+1);
};

module.exports = {
  solution,
};
