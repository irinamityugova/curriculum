/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
  const getDivisors = (num) => {
    let sum=0;
    for(let i=2; i<num; i++){
      if(num%i===0){
        sum+=i;
      }
    }
  return sum;
  };
  return getDivisors(a);
};

module.exports = {
  solution,
};
