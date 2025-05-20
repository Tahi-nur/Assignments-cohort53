function sanitizeFruitBasket(fruitBasket, unwantedFruit) {
  // Return a new array that excludes the unwanted fruit
  return fruitBasket.filter(function (fruit) {
    return fruit !== unwantedFruit;
  });
}

module.exports = sanitizeFruitBasket;
