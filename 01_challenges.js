const { check, runTest, skipTest } = require('./test-api/index.js');

// using .forEach() get the sum of an input array of numbers
function sumNumbers(nums) {
  let sum = 0; // <- don't change this line
  const total = nums.forEach((num) => (sum += num));

  return sum;
}
runTest('returns the sum of a given array of numbers using forEach()', () => {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  check(sumNumbers(nums)).isEqualTo(120);
  nums = [8, 9, 12, 2, 3, 7, 4, 33];
  check(sumNumbers(nums)).isEqualTo(78);
});

// Try using a .forEach() to get the sum of an input array of numbers plus their indexes
// example: [1, 2, 3] --> (1 + 0) + (2 + 1) + (3 + 2) = 9
function sumNumbersAndIndex(nums) {
  let sum = 0; // <- don't change this line

  nums.forEach((num, index) => {
    sum += num + index;
  });

  return sum;
}
runTest(
  "can sum each number in the list plus it's index using forEach()",
  () => {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    check(sumNumbersAndIndex(nums)).isEqualTo(225);
    nums = [8, 9, 12, 2, 3, 7, 4, 33];
    check(sumNumbersAndIndex(nums)).isEqualTo(106);
  }
);

function isMilkInFridge(fridgeContents) {
  return fridgeContents.includes('milk');
  // using .includes(), return a boolean value indicating whether or not the input array contains a string of "milk"
}
runTest(
  'returns a boolean indicating whether there is milk in the fridge using includes()',
  () => {
    let fridge = [
      'sandwich',
      'limes',
      'tabasco',
      'cucumber',
      'milk',
      'cheese',
      'broccoli'
    ];
    check(isMilkInFridge(fridge)).isEqualTo(true);
    fridge = [
      'sandwich',
      'limes',
      'tabasco',
      'cucumber',
      'chocolate',
      'cheese',
      'broccoli'
    ];
    check(isMilkInFridge(fridge)).isEqualTo(false);
  }
);

// using .map() add a property of isCool with a value of true to every dev that has a name property which includes "ch"
// example: [{name: "charlie", age: 29}] -> [{name: "charlie", age: 29, isCool: true}]
function addIsCool(devs) {
  return devs.map((dev) => {
    if (dev.name.includes('ch')) {
      dev.isCool = true;
    }
    return dev;
  });
}

runTest(
  "adds an isCool property with a value of true if the name value includes 'ch'",
  () => {
    const devs = [
      { name: 'Mitch', age: 25 },
      { name: 'Rich', age: 28 },
      { name: 'Simon', age: 22 },
      { name: 'Jonathan', age: 26 },
      { name: 'Bela', age: 23 },
      { name: 'Michael', age: 25 }
    ];
    check(addIsCool(devs)).isEqualTo([
      { name: 'Mitch', age: 25, isCool: true },
      { name: 'Rich', age: 28, isCool: true },
      { name: 'Simon', age: 22 },
      { name: 'Jonathan', age: 26 },
      { name: 'Bela', age: 23 },
      { name: 'Michael', age: 25, isCool: true }
    ]);
  }
);

// using .filter() return an array of only the snacks which you can afford with the amount of money provided (refer to test below for an example of the input array)
function affordableSnacks(snacks, money) {
  const canAfford = snacks.filter((snack) => snack.cost <= money);
  return canAfford;
}
runTest('finds the items less than or equal to an amount of money', () => {
  const vendingMachine = [
    { item: 'Mars Bar', cost: 0.65 },
    { item: 'Nik Naks', cost: 1.39 },
    { item: 'Diet Coke', cost: 1.35 },
    { item: 'Lucozade', cost: 1.55 },
    { item: 'kitkat', cost: 0.6 },
    { item: 'Freddo', cost: 1.0 }
  ];
  check(affordableSnacks(vendingMachine, 1)).isEqualTo([
    { item: 'Mars Bar', cost: 0.65 },
    { item: 'kitkat', cost: 0.6 },
    { item: 'Freddo', cost: 1.0 }
  ]);
});

function findFirstNumLessThanTen(nums) {
  // using .find() return the first number in the input array which is lower than 10
}
skipTest('finds the first number that is less than 10', function () {
  let nums = [35, 104, 66, 3, 99, 4, 1, 50];
  check(findFirstNumLessThanTen(nums)).isEqualTo(3);
  nums = [35, 104, 2, 1, 5, 19];
  check(findFirstNumLessThanTen(nums)).isEqualTo(2);
});

function checkForQuestions(strings) {
  // using .some() return a boolean value indicating whether any of the strings end with a "?"
  // bonus challenge: take a look at the docs for the string method .endsWith() and see if you can also use this method as part of your solution
}
skipTest('finds a question', () => {
  let strings = [
    'I like',
    'Where we are',
    'When we drive',
    'In your car',
    'Who sings that?'
  ];
  check(checkForQuestions(strings)).isEqualTo(true);
  strings = [
    'I like',
    'Where we are',
    'When we drive',
    'In your car',
    'Hellogoodbye'
  ];
  check(checkForQuestions(strings)).isEqualTo(false);
});

function isAllAboveSix(films) {
  // using .every() return a boolean value indicating whether all the movie ratings are more than or equal to 6
  // For an example input array have a look at the test below
}
skipTest('checks for all ratings above or including 6', () => {
  let films = [
    { title: 'Black Panther', rating: 7.3 },
    { title: "Mr Bean's Holiday", rating: 6.0 },
    { title: 'Up', rating: 8.3 },
    { title: 'I Love You, Man', rating: 7.0 }
  ];
  check(isAllAboveSix(films)).isEqualTo(true);
  films = [
    { title: 'Shrek', rating: 9.5 },
    { title: 'Shawshank Redemption', rating: 9.3 },
    { title: 'About Time', rating: 7.8 },
    { title: 'The Wicker Man', rating: 3.7 }
  ];
  check(isAllAboveSix(films)).isEqualTo(false);
});

function namesOfStaffOver28(staff) {
  // using any array methods ( not for loops ) return an array of just the names of staff who are over the age of 28
  // take a look at the test below for an example input array
}
skipTest('can get the names of staff over 28', () => {
  let staff = [
    { name: 'Anat', age: 22 },
    { name: 'Paul C', age: 31 },
    { name: 'Paul R', age: 27 },
    { name: 'Vel', age: 29 },
    { name: 'Sam', age: 30 },
    { name: 'Jonny', age: 32 },
    { name: 'Ant', age: 26 },
    { name: 'Tom', age: 24 },
    { name: 'Alex', age: 24 }
  ];
  check(namesOfStaffOver28(staff)).isEqualTo(['Paul C', 'Vel', 'Sam', 'Jonny']);
  staff = [
    { name: 'Simon', age: 29 },
    { name: 'Jonathan', age: 30 },
    { name: 'Mitch', age: 27 },
    { name: 'Rich', age: 29 },
    { name: 'Bela', age: 26 },
    { name: 'Michael', age: 28 }
  ];
  check(namesOfStaffOver28(staff)).isEqualTo(['Simon', 'Jonathan', 'Rich']);
});

// ADVANCED - Well done on getting this far! Below are some trickier challenges, don't forget to use the docs!

function reduceNumbers(nums) {
  // this is just like your first challenge, but this time use the .reduce() method to return the sum of the input array
}
skipTest('returns the sum of a given array of numbers using reduce()', () => {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  check(reduceNumbers(nums)).isEqualTo(120);
  nums = [8, 9, 12, 2, 3, 7, 4, 33];
  check(reduceNumbers(nums)).isEqualTo(78);
});

function reduceNumbersAndIndex(nums) {
  // Now try using .reduce() to get the sum of an input array of numbers plus their indexes
  // example: [1, 2, 3] --> (1 + 0) + (2 + 1) + (3 + 2) = 9
}
skipTest(
  "can sum each number in the list plus it's index using reduce()",
  () => {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    check(reduceNumbersAndIndex(nums)).isEqualTo(225);
    nums = [8, 9, 12, 2, 3, 7, 4, 33];
    check(reduceNumbersAndIndex(nums)).isEqualTo(106);
  }
);
