/*
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 */

const solution = (arr, num, i=0, result=false) => {
  if(i === arr.length || arr.length<=1) return result;
  //Inner loop looks for sums that are not summing itself.
  const innerLoop = (arr, j=0) => {
    if(j===arr.length) return result;
    if(j!==i && arr[i]+arr[j]===num){
      return true;
    }
    return innerLoop(arr, j+1);
  };
  result = innerLoop(arr);
  return solution(arr, num, i+1, result); //Recursive
};

module.exports = {
  solution,
};
