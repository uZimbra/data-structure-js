import Queue from './queue';

const queue = new Queue([22]);

test('Is the queue empty?', () => {
  expect(queue.empty()).toBe(false);
})

test('Size of queue', () => {
  expect(queue.size()).toBe(1);
})

test('Front of queue', () => {
  expect(queue.front()).toBe(22);
})

test('Back of queue', () => {
  expect(queue.back()).toBe(22);
})

test('Adding number 1 to queue', () => {
  expect(queue.push(1)).toBe(1);
})

test('Adding a repeated number to queue', () => {
  expect(queue.push(22)).toBe(null);
})

test('Removing number from the front of queue', () => {
  expect(queue.pop()).toBe(22);
})

test('Removing number from the front of queue', () => {
  expect(queue.pop()).toBe(1);
})

test('Removing number from the front of a none queue', () => {
  expect(queue.pop()).toBe(null);
})

test('Is the queue empty?', () => {
  expect(queue.empty()).toBe(true);
})

test('Front of a none queue', () => {
  expect(queue.front()).toBe(null);
})

test('Back of a none queue', () => {
  expect(queue.back()).toBe(null);
})