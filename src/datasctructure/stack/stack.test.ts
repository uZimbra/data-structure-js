import Stack from './stack';

const stack = new Stack([22]);

test('Is the stack empty?', () => {
  expect(stack.empty()).toBe(false);
})

test('Size of stack', () => {
  expect(stack.size()).toBe(1);
})

test('Adding number 1 to stack', () => {
  expect(stack.push(1)).toBe(1);
})

test('Adding a repeated number to stack', () => {
  expect(stack.push(22)).toBe(null);
})

test('Top of stack', () => {
  expect(stack.top()).toBe(1);
})

test('Removing number from the front of stack', () => {
  expect(stack.pop()).toBe(1);
})

test('Removing number from the front of stack', () => {
  expect(stack.pop()).toBe(22);
})

test('Removing number from the front of a none stack', () => {
  expect(stack.pop()).toBe(null);
})

test('Top of stack', () => {
  expect(stack.top()).toBe(null);
})

test('Is the stack empty?', () => {
  expect(stack.empty()).toBe(true);
})