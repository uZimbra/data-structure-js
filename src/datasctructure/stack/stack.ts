export default class stack {
  private stack: Array<any> = new Array;

  constructor(arr: Array<any> = new Array) {
    this.stack = arr;
  }
  
  empty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
  
  top() {
    if (!this.empty()) {
      return this.stack[this.stack.length - 1];
    }
    return null;
  }

  push(newNumber: any) {
    if(!this.stack.includes(newNumber)) {
      this.stack.push(newNumber);
      return this.stack[this.stack.length - 1];
    }
    return null;
  }

  pop() {
    if (!this.empty()) {
      return this.stack.pop();
    }
    return null;
  }
}