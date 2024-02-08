const { LinkedList } = require('./linked-list');

/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
function reverseStringLinkedList(str) {
  const list = new LinkedList();
  for (let i = str.length - 1; i >= 0; i--) {
    list.add(str[i]);
  }
  let reversed = '';
  let current = list.head;
  while (current != null) {
    reversed += current.data;
    current = current.next;
  }
  return reversed;
}

module.exports = reverseStringLinkedList;
