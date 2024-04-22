'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//'        last'
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Input: "I did my waiting 12 years of it in Azkaban"
// Output: "Azkaban"
//
// Input: "Impossible"
// Output: "Impossible"
//

const LastWord = (str) => {
    // write your code here
    let lastIndex = str.lastIndexOf(" ");
    if (lastIndex === -1) {
        return str;
    }
    let res = str.slice(lastIndex + 1);
    return res;

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
//  You can try to do the same task using the split method
//
//  Input: "you dare use my spells against me, potter"
//  Output: "potter"

const LastWord_2 = (str) => {
    // write your code here
    let spli = str.split(" ");
    return (spli.slice(-1)).toString();
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Input:  "I thought you had a plan"
// Output: "We thought you had a plan"
//
// Input: "I was there 3000 years ago"
// Output: "We were there 3000 years ago"

// Input: "I am Venom"
// Output: "We are Venom"
//

const replaceWords = (str) => {
    let result = str.split(" ");
    for (let i = 0; i < result.length; i++) {
        if (result[i] === "I") {
            result.splice(i, 1, "We");
        }
        if (result[i] === "was") {
            result.splice(i, 1, "were");
        }
        if (result[i] === "am") {
            result.splice(i, 1, "are");
        }
    }
    return result.join(" ");
}
// const replaceWords = (str) => {
//     let result = str.split(" ");
//     let ind = result.indexOf("I");
//     if (ind !== -1) {
//         result.splice(ind, 1, "We");
//     }
//     let ind2 = result.indexOf("was");
//     if (ind2 !== -1) {
//         result.splice(ind2, 1, "were");
//     }

//     let ind3 = result.indexOf("am");
//     if (ind3 !== -1) {
//         result.splice(ind3, 1, "are");
//     }

//     return result.join(" ");
// }

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Write a function that "joins" the array of words together and puts a comma "," after every five words
//
const arrToStr = (arr) => {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if ((i + 1) % 5 === 0 ) {
            result += ",";
        }
        if (i !== arr.length - 1) {
            result += " ";
        }
    }    
    return result;
}


// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 05:
// Optional:
//
// Simon got a string manipulation question for his interview,
// it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// Input:"aaaa bbb sdf"
// Output: "a4 b3 s1d1f1"
//
// Input:"door"
// Output: "d1o2r1"
//
// help him by writing the function
//

const letterCounter = (str) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------


module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };