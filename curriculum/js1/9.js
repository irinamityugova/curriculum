/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
  const nextMultSeven = (num) => {
    for(let i=num+1; i<=num*7;i++){
      if(i%7===0){
        return i;
      }
    }
  };
  return nextMultSeven(a);
};

module.exports = {
  solution,
};
