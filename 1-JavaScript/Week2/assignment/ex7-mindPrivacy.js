const employeeRecords = [
  {
    name: 'John',
    occupation: 'developer',
    gender: 'M',
    email: 'john.doe@somewhere.net',
    salary: 50000,
  },
  {
    name: 'Jane',
    occupation: 'manager',
    gender: 'F',
    email: 'jane.eyre@somewhere.net',
    salary: 60000,
  },
];

// ✅ Function under test
export function filterPrivateData(employees) {
  return employees.map(({ name, occupation, email }) => ({
    name,
    occupation,
    email,
  }));
}

// ✅ Test functions
function test1() {
  console.log('Test 1: filterPrivateData should take one parameter');
  console.assert(filterPrivateData.length === 1, '❌ Failed Test 1');
}

function test2() {
  console.log('Test 2: gender and salary should be filtered out');
  const expected = [
    {
      name: 'John',
      occupation: 'developer',
      email: 'john.doe@somewhere.net',
    },
    {
      name: 'Jane',
      occupation: 'manager',
      email: 'jane.eyre@somewhere.net',
    },
  ];
  const result = filterPrivateData(employeeRecords);
  console.assert(
    JSON.stringify(result) === JSON.stringify(expected),
    '❌ Failed Test 2'
  );
}

function test() {
  test1();
  test2();
}

test();
