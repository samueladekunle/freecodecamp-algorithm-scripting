/* 
 Serach and Replace - https://www.freecodecamp.org/challenges/search-and-replace

 Perform a search and replace on the sentence using the arguments provided and return the new sentence.

 First argument is the sentence to perform the search and replace on.

 Second argument is the word that you will be replacing (before).

 Third argument is what you will be replacing the second argument with (after).

 NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

const myReplace = ( str, before, after ) => {
    // if the before string, is a substring of the str string.
    if ( str.includes( before ) ) {
        // regular expression that would match
        // the first letter of a string.
        const rgx = /^\w/;

        // match the before string with the rgx regular expression.
        const arr = before.match( rgx );

        // the first letter of the before string.
        const firstLetter = arr[0];

        // if the first letter of the before string, is a capital letter.
        if ( firstLetter.charCodeAt() >= 65 && firstLetter.charCodeAt() <= 90 ) {
            // capitalise the after string.
            after = after.replace( rgx, letter => letter.toUpperCase() );
        }

        // replace the before substring in the str string, with the after string.
        str = str.replace( before, after );

        // return the new string.
        return str;
    }
}

// should return "Let us go to the mall".
const test1 = myReplace("Let us go to the store", "store", "mall");

// should return "He is Sitting on the couch".
const test2 = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

// should return "This has a spelling error".
const test3 = myReplace("This has a spellngi error", "spellngi", "spelling");

// should return "His name is John".
const test4 = myReplace("His name is Tom", "Tom", "john");

// should return "Let us get back to more Algorithms".
const test5 = myReplace("Let us get back to more Coding", "Coding", "algorithms");

// should return "A quick brown fox leaped over the lazy dog"
const test6 = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

console.log( test1 );
console.log( test2 );
console.log( test3 );
console.log( test4 );
console.log( test5 );
console.log( test6 );