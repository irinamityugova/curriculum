/**
 * 2 Timeouts: takes in 2 numbers (a,b) and a function,
 *     execute the function after a seconds,
 *     and then execute the function again after b seconds
 * @param {number} a
 * @param {number} b
 * @param {function} c
 */

const solution = (a, b, c, s) => {
  const Timeouts = (sec=b) => {
    if(sec === a || sec === b) {
      c();
    }
    if(sec === 0)return;
    Timeouts(sec-1);
  };
  return Timeouts(s);
};

module.exports = {
  solution,
};
