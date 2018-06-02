/**
 * Given an array, return the same array where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (arr=a, i=0) => {
  if(i===arr.length)return arr;
  if(arr[i]<=5)arr[i]=0;
  return solution(arr, i+1);
};

module.exports = {
  solution,
};
