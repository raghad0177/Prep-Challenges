'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

const findMax = (arr)=>{
    let max ;
    max = 0 ;
    for (let i=0 ; i<arr.length ; i++)
    {
        if (arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
// test :
// let arr1 = [12, 32, 22, 45, 78, 12, 50];
// findMax(arr1);
// -------------------------------------------------------------------------------------------------------





// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  

const sumNums = (arr)=>{
    let sum;
    sum =0;
    for ( let i=0 ; i < arr.length ; i++ ){
        if ( arr[i] +1 -1 === arr[i]  )
        {
         sum += arr[i];
        }
    }
    return sum;
}
// test :
// let arr2 = [20, '234', 'car', 41, 20, 'chair'];
// sumNums(arr2);
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  Required:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr)=>{
    let x = arr.length - 1; 
    let arr2 =[];
    for( let i = 0 ; i < arr.length ; i++ ){     
         arr2[i] = arr[x-i];
    }
    return arr2;
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};