// 1. Write a program to add up all the elements of a number array.
const array = [1,2,3,4,5,6];
let sum = 0
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
}
console.log(sum);
let sum = array.reduce((a,b) => a+b)
console.log(sum);

// 2. Write a program to look for the user input in an array. When it finds the first occurrence, display the value and the index of that value




// 3. Write a program to find the longest element in a string array.

let word = ["Yo", "Sucks", "at", "Coding"]
let longestString = word.reduce((a,b) => a.length > b.length ? a : b) 
console.log(longestString);