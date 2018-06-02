/*
 * filter - takes in an object and a function. Return a new object
 * with key/value if the function returns true.
 * Example:
 * input: {5:'blah blah',name:'ho', zolo:'4thech'},(k,v)=>{return v.length > 3}
 * output: {5:'blah blah', zolo:'4thech'}
 * @param {object} a
 * @param {function} b
 * @returns {object} c
*/

const solution = (obj, fn, i=0, result={}, keys=Object.keys(obj))=>{
    if(i===keys.length) return result;           
    key=keys[i];    
    if(fn(key, obj[key])){
          result[key] = obj[key];
        };       
    console.log(result);                                   
  return solution(obj, fn, i+1,result);
}



module.exports = {
  solution,
};
