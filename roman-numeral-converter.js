/* 
 Roman Numeral Converter - https://www.freecodecamp.org/challenges/roman-numeral-converter

 Convert the given number into a roman numeral.

 All roman numerals answers should be provided in upper-case.
*/

const convertToRoman = ( num ) => {
    // the roman numeral array.
    const roman = [
        /* Thousands */
        { "1000": "M", "2000": "MM", "3000": "MMM" },
        /* Hundreds */
        { "100": "C", "200": "CC", "300": "CCC", "400": "CD", "500": "D", "600": "DC", "700": "DCC", "800": "DCCC", "900": "CM" },
        /* Tens */
        { "10": "X", "20": "XX", "30": "XXX", "40": "XL", "50": "L", "60": "LX", "70": "LXX", "80": "LXXX", "90": "XC" },
        /* Units */
        { "1": "I", "2": "II", "3": "III", "4": "IV", "5": "V", "6": "VI", "7": "VII", "8": "VIII", "9": "IX" }
    ];

    // split num into an array of strings.
    let numbers = String(num).split("");

    // let numbers have the same length as roman.
    while ( numbers.length < roman.length ) {
        // fill empty elements with "0".
        numbers.unshift("0");
    }

    // where the roman numeral string will be stored.
    let str = "";

    // loop over the elements in the numbers array.
    for ( let i = 0; i < numbers.length; i++ ) {
        // the numbers element at index i.
        const number = numbers[i];

        // the roman numeral object at index i.
        const rmn = roman[i];

        // loop over the rmn object.
        for ( const num in rmn ) {
            // If the num key starts with number.
            if ( num.startsWith(number) ) {
                // concatenate the roman numeral string,
                // with the value of rmn[num].
                str += rmn[num];
            }
        }
    }
    
    // return the roman numeral string.
    return str;
};

// should return "II".
const test1 = convertToRoman(2);

// should return "III".
const test2 = convertToRoman(3);

// should return "IV".
const test3 = convertToRoman(4);

//  should return "V".
const test4 = convertToRoman(5);

//  should return "IX".
const test5 = convertToRoman(9);

//  should return "XII".
const test6 = convertToRoman(12);

//  should return "XVI".
const test7 = convertToRoman(16);

//  should return "XXIX".
const test8 = convertToRoman(29);

//  should return "XLIV".
const test9 = convertToRoman(44);

//  should return "XLV".
const test10 = convertToRoman(45);

//  should return "LXVIII".
const test11 = convertToRoman(68);

//  should return "LXXXIII".
const test12 = convertToRoman(83);

//  should return "XCVII".
const test13 = convertToRoman(97);

//  should return "XCIX".
const test14 = convertToRoman(99);

//  should return "D"
const test15 = convertToRoman(500);

//  should return "DI".
const test16 = convertToRoman(501);

//  should return "DCXLIX".
const test17 = convertToRoman(649);

//  should return "DCCXCVIII".
const test18 = convertToRoman(798);

//  should return "DCCCXCI".
const test19 = convertToRoman(891);

// should return "M".
const test20 = convertToRoman(1000);

//  should return "MIV".
const test21 = convertToRoman(1004);

//  should return "MVI".
const test22 = convertToRoman(1006);

//  should return "MXXIII".
const test23 = convertToRoman(1023);

//  should return "MMXIV".
const test24 = convertToRoman(2014);

//  should return "MMMCMXCIX".
const test25 = convertToRoman(3999);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
console.log(test7);
console.log(test8);
console.log(test9);
console.log(test10);
console.log(test11);
console.log(test12);
console.log(test13);
console.log(test14);
console.log(test15);
console.log(test16);
console.log(test17);
console.log(test18);
console.log(test19);
console.log(test20);
console.log(test21);
console.log(test22);
console.log(test23);
console.log(test24);
console.log(test25);