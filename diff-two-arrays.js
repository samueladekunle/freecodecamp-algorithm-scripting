/*
 Diff Two Arrays - https://www.freecodecamp.org/challenges/diff-two-arrays

 Compare two arrays and return a new array with any items
 only found in one of the two given arrays, but not both.
 In other words, return the symmetric difference of the two arrays.
*/

const diffArray = ( arr1, arr2 ) => {
	// Concatenate the two arrays.
	let arr3 = arr1.concat(arr2);

	// Loop over the elements in arr1.
	for ( let a1 of arr1 ) {
		// Loop over the elements in arr2.
		for ( let a2 of arr2 ) {
			// Filter out elements of arr3, that are either
			// in arr1, but not in arr2, or are either in arr2,
			// but not in arr1.
			arr3 = arr3.filter( a3 => a3 !== a1 || a3 !== a2 );
		}
	}

	// Return the new array.
	return arr3;
};

// should return an array.
const test1 = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// should return ["pink wool"].
const test2 = diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

// should return ["diorite", "pink wool"].
const test3 = diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

// should return [].
const test4 = diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);

// should return [4].
const test5 = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// should return ["piglet", 4].
const test6 = diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

// should return ["snuffleupagus", "cookie monster", "elmo"].
const test7 = diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);

// should return [1, "calf", 3, "piglet", 7, "filly"].
const test8 = diffArray([1, "calf", 3, "piglet"], [7, "filly"]);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
console.log(test7);
console.log(test8);