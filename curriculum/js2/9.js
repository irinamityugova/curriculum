/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsReduce = function (fn, i=0, accum=0) {
    // To get the actual array, use this
    if(this.length===0 || i===this.length) return accum;
    accum=fn(accum, this[i]);
    return this.gsReduce(fn, i+1, accum);
  };
};

module.exports = {
  solution,
};
