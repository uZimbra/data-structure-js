// FIFO
// no repeated values

export default class Queue {
  private queue: Array<any> = new Array;

  constructor(arr: Array<any> = new Array) {
    this.queue = arr;
  }

  empty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  front() {
    if(!this.empty()) {
      return this.queue[0];
    }
    return null;
  }

  back() {
    if(!this.empty()) {
      return this.queue[this.queue.length - 1];
    }
    return null;
  }

  push(newNumber: any) {
    if(!this.queue.includes(newNumber)) {
      this.queue.push(newNumber);
      return this.queue[this.queue.length - 1];
    }
    return null;
  }

  pop() {
    if (!this.empty()) {
      return this.queue.shift();
    }
    return null;
  }
}