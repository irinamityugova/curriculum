/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @return {number}
 */

const solution = (arr, obj={}, i=0)=>{
  
  //The exit sequence finds the key in accordance to the greatest value in the counting object.
  if(arr[i] === undefined) return Object.keys(obj).find(key => obj[key] === Math.max(...Object.values(obj)));
  
  //First If-Statement initiates a key.
  if(!obj[arr[i]]) {
    obj[arr[i]]= 0;}

  //Second If-Statement counts the character at the key-index it initiated at the first If-Statement.
  obj[arr[i]]+=1;
  
  //Recursive return loops through the array.
  return solution(arr, obj, i+1)
};

module.exports = {
  solution
}
