const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
//  function ListNode(x) {
//      this.value = x;
//      this.next = null;
//    }
 module.exports = function removeKFromList(arr, k) {
  let head = null;
  let arrSecond = [];
  let currentNode;
  while(arr) {
    if (arr.value != k) {
      arrSecond.push(arr.value);
    }
    arr = arr.next;
  }
  for(let i = 0; i < arrSecond.length; i++) {
    if(head == null) {
      head = {value: arrSecond[i], next: null}
    }
    else {
      currentNode = head;
      while(currentNode.next != null) currentNode = currentNode.next;
      let newNode = {value: arrSecond[i], next: null};
      currentNode.next = newNode;
    }
  }
  return head;
}
