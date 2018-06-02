/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

const solution = (a, i=0, obj={})=>{
  if(a[i]===undefined)return Object.keys(obj).filter(key => obj[key]>1).map(Number); //return an array with keys whose value is 2 and above.
  if(obj[a[i]]===undefined) { //Initiate the key.
    obj[a[i]] = 0;
  }
  obj[a[i]]+=1; //Count the character.
  return solution(a, i+1, obj) //Recursive to the length of an array.
}

module.exports = {
  solution
}
