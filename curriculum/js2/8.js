/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function (fn, i=0, newArr=[]) {
    // To get the actual array, use this
    if(this.length===0 || this.length===i) return newArr;
    newArr.push(fn(this[i]));
    return this.gsMap(fn, i+1, newArr);
  };
};

module.exports = {
  solution,
};
