/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a) => {
  const isPrime = (num) => {
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
  };
  return isPrime(a);
};

module.exports = {
  solution,
};
