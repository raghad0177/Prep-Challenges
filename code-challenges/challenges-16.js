'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    //it take the string as array without converting it 
    let result2="";
    for (let i=string.length-1 ; i >= 0  ; i--){
        result2 += string[i];
    }
    return result2;
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    //write your code here ...
    let arr2=[];
    for(let i=0 ; i<= arr.length-1 ; i++){
        if(arr[i].includes('^_^')){
            arr2.push(arr[i])
        }
    }
    return arr2;
    // return arr.filter(element =>
    // element.includes("^_^")
    // );
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    //write your code here ...
    let str2="";
    for(let i=0 ; i<= str.length -1 ; i++){
        if(i % 2 == 0){
          str2 += str[i];
        }
    }
return str2;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are 
// assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let innerArr = [];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j].includes('chicken')) {
                innerArr.push(arr[i][j]);
            }
        }
        arr2.push(innerArr);
    }
    return arr2;
// let result =arr.map(element =>{
//     return element.filter(x => x.includes('chicken'))
// })
// return result;
}

// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
