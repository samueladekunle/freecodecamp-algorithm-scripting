/*
 Wherefore Art Thou - https://www.freecodecamp.org/challenges/wherefore-art-thou

 Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

 For example, if the first argument is `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]`, and the second argument is `{ last: "Capulet" }`, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
*/

const whatIsInAName = ( collection, source ) => {
    // the array that will contain, all objects that have
    // matching property and value pairs.
    const arr = [];

    // array of keys of the source object.
    const sourceKeys = Object.keys( source );

    // array of values of the source object.
    const sourceValues = Object.values( source );

    // loop over the objects, in the collection array.
    for ( const coll of collection ) {
        // array of keys of an object in the collection array.
        const collKeys = Object.keys( coll );

        // array of values of an object in the collection array.
        const collValues = Object.values( coll );

        // count the number of times, an object in
        // the collection array, has the same key,
        // and value pairs, as the source object.
        let count = 0;

        // loop over the keys of the source object.
        for ( let i = 0; i < sourceKeys.length; i++ ) {
            // loop over the keys of an object in the collection array.
            for ( let j = 0; j < collKeys.length; j++ ) {
                // if an object in the collection array, has the same key,
                // and value pairs, as the source object, increment count by 1;
                if ( sourceKeys[ i ] === collKeys[ j ] && sourceValues[ i ] === collValues[ j ] ) {
                    count++;
                    // on getting to the end of the sourceKeys array, if count equals the length 
                    // of the sourceKeys array, that means the object in the collection array, 
                    // has the same key and value pairs, as the source object.
                    if ( i === sourceKeys.length - 1 && count === sourceKeys.length ) {
                        // push the object in the collection array into the array of matching
                        // property, and value pairs.
                        arr.push( coll );
                    }
                }
            }
        }
    }
    
    // return the array.
    return arr;
};

// should return [{ first: "Tybalt", last: "Capulet" }].
const test1 = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
const test2 = whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });

// should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
const test3 = whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

// should return [{ "a": 1, "b": 2, "c": 2 }].
const test4 = whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);