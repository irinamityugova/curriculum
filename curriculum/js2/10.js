/**
 * Replicate Array.prototype.forEach and call it gsForEach
 *   ForEach takes in a function, and that function is
 *   called for every element in the array along
 *   with the index.
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */

const solution = () => {
  Array.prototype.gsForEach = function (fn, i=0) {
    // To get the actual array, use this
    if(this.length===0 || i===this.length) return this;
    fn(this[i]);
    return this.gsForEach(fn, i+1);
  };
};

module.exports = {
  solution,
};
