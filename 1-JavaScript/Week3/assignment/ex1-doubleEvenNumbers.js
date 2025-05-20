function doubleEvenNumbers(numbers) {
  // Step 1: Filter out the even numbers
  const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
  });

  // Step 2: Double the even numbers
  const doubledEvenNumbers = evenNumbers.map(function (number) {
    return number * 2;
  });

  // Step 3: Return the result
  return doubledEvenNumbers;
}

// Export the function so we can test it
module.exports = doubleEvenNumbers;
