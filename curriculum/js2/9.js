/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsReduce = function (fn, accum=0, i=0) {
    // To get the actual array, use this
    if(this.length===0 || i===this.length) return accum;
    accum=fn(accum, this[i]);
    return this.gsReduce(fn, accum, i+1);
  };
};

module.exports = {
  solution,
};
