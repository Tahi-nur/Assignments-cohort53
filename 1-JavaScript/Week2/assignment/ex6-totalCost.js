// Create the object with 5 grocery items and their prices
const cartForParty = {
  chips: 1.99,
  soda: 2.49,
  pizza: 6.5,
  cake: 4.75,
  juice: 2.0,
};

// Function to calculate the total price from an object of numeric values
export function calculateTotalPrice(cart) {
  let total = 0;
  for (const item in cart) {
    total += cart[item];
  }
  return `Total: €${total.toFixed(2)}`; // Fixed to 2 decimal places
}

// --- Unit Test Functions ---
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(
    calculateTotalPrice.length === 1,
    '❌ Failed: Should take 1 parameter'
  );
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expected = 'Total: €17.73';
  const actual = calculateTotalPrice(cartForParty);
  console.assert(
    actual === expected,
    `❌ Failed: Expected "${expected}" but got "${actual}"`
  );
}

// Run the tests
function test() {
  test1();
  test2();
}

test();
