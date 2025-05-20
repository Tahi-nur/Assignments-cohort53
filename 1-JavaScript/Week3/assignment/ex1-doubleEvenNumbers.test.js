const doubleEvenNumbers = require('./ex1-doubleEvenNumbers');

describe('js-wk3-ex1-doubleEvenNumbers', () => {
  test('doubleEvenNumbers should take the even numbers and double them', () => {
    const actual = doubleEvenNumbers([1, 2, 3, 4]);
    const expected = [4, 8];
    expect(actual).toEqual(expected);
  });
});
