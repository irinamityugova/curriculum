/*
 * findGreatest - Takes in the first node of a
 *     linked list, return the greatest number
 * Example:
 * input:
 *    a = {v: 2};
 *    b = {v: 3};
 *    c = {v: 1};
 *    a.next = b;
 *    b.next = c;
 *    solution(a);
 * output: 3
 * @param {object} node
 * @returns {number}
*/

const solution = (node, max = node.v) => {
  if(node.next===undefined) return max;
  if(node.v> node.next.v){
      max = node.v;
  }
  return solution(node.next, max);
};

module.exports = {
   solution,
};
