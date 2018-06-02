/*
 * map - takes in an object and a function and calls the function with each key, value.
 * @param {object} a
 * @param {function} b
 * @return {nothing}
 **/

const solution = (obj, fn, i=0, keys=Object.keys(obj)) => {
   if(keys[i]===undefined) return;
   key=keys[i];
   fn(key, obj[key]);
   return solution(obj, fn, i+1, keys)
};
module.exports = {
  solution
}
