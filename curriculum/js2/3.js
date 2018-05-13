/**
 * Given an array, return the same array
 *   where all elements that are not prime is changed to 1
 *   Please reuse your js1 solution
 * @param {array} a
 * @returns {array}
 */

const isPrime = (num) => {   //return if num isPrime              
  let count = 0;                                                                                                               
  for(let i=2; i<num; i++){                                                                                                       
      if(num%i===0){                                                                                                                  
      count+=1;                                                                                                                  
      }
  }  
  if(num>1 && count===0){
    return true;
  }
  return false;
}  

const solution = (a, i=0) => {
  if(i===a.length)return a;
  if(!isPrime(a[i])) a[i]=1;
  return solution(a, i+1);
};

module.exports = {
  solution,
};
