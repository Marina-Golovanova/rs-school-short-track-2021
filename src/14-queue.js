const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.length = 0;
    this.tail = null;
    this.head = null;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const el = new ListNode(element);

    if (this.length === 0) {
      this.head = el;
      this.tail = el;
    } else {
      this.tail.next = el;
      this.tail = el;
    }

    this.length++;
  }

  dequeue() {
    if (this.head) {
      const { value, next } = this.head;
      this.head = next;
      this.length--;

      return value;
    }

    return null;
  }
}

module.exports = Queue;
