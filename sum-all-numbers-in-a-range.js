/*
 Sum All Numbers in a Range - https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range

 We'll pass you an array of two numbers.
 Return the sum of those two numbers and all numbers between them.

 The lowest number will not always come first.
*/

const sumAll = ( arr ) => {
	// First number in the array.
	const first = arr[0];

	// Second number in the array.
	const second = arr[1];

	// The range of numbers, between the
	// first, and the second number.
	const range = [];

	// Smaller number of the two numbers in the array.
	let smaller = ( first < second ) ? first : second;

	// Bigger number of the two numbers in the array.
	let bigger = ( first > second ) ? first : second;

	// Start the range with the smaller number.
	range.push( smaller );

	// Insert numbers within the range of the
	// smaller number, to the bigger number,
	// into the range array.
	while ( smaller < bigger ) {
		range.push( ++smaller );
	}

	// Calculate the sum of the numbers in the range.
	const sum = range.reduce( ( a, b) => a + b );

	// Return the sum of numbers, between the
	// first, and second numbers in the array.
	return sum;
};

//  should return a number.
const test1 = sumAll([1, 4]);

// should return 10.
const test2 = sumAll([1, 4]);

// should return 10.
const test3 = sumAll([4, 1]);

// should return 45.
const test4 = sumAll([5, 10]);

// should return 45.
const test5 = sumAll([10, 5]);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);