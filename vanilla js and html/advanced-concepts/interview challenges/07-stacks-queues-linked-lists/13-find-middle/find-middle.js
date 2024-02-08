/**
 * Returns the middle node of the linked list.
 * @param {LinkedList} list - The linked list.
 * @returns {(Node|null)} - The middle node of the linked list.
 */
function findMiddle(list) {
  let slow = list.head;
  let fast = list.head;
  let previous = null;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    previous = slow;
    slow = slow.next;
  }

  if (fast === null) {
    return previous.next;
  } else {
    return slow;
  }
}

module.exports = findMiddle;
