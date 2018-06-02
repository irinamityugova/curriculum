/**
 * Given an array, return a new array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

const solution = (arr, i=0, arr2=[])=> {
  if(i===arr.length || arr.length===0) return arr2;
  if(arr[i]>=5) {
    arr2.push(arr[i]);
  }
  return solution(arr, i+1, arr2);
};

module.exports = {
  solution,
};
