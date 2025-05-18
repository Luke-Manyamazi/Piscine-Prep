const add = require('./math');

test("adds two numbers", () => {
  expect(add(2, 3)).toEqual(5);
});

test("does not equal incorrect value", () => {
  expect(add(2, 2)).not.toEqual(5);
});