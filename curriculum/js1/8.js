/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b) => {
  const greatCmnDenom=(num1, num2)=> {
    //both numbers, divided by one number without remainder, otherwise, 1
    denom=1;
    for(let i=2; i<=Math.min(a, b); i++){
      if(num1%i===0 && num2%i===0){
        denom = i;
      }
    }
    return denom;
  };
  return greatCmnDenom(a, b);
};

module.exports = {
  solution,
};
