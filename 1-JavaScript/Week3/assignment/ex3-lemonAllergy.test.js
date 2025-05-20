const sanitizeFruitBasket = require('./ex3-lemonAllergy');

const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
    expect(sanitizeFruitBasket).toHaveLength(2);
  });

  test('should not modify the original `fruitBasket` array', () => {
    const original = [...fruitBasket]; // copy
    sanitizeFruitBasket(fruitBasket, 'lemon');
    expect(fruitBasket).toEqual(original);
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    const cleanedBasket = sanitizeFruitBasket(fruitBasket, 'lemon');
    expect(cleanedBasket.includes('lemon')).toBe(false);
  });
});
