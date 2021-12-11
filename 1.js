let usr = [1,2,3,4,5,6,7,8,9,10, 12, 42, 60]
let fname = ["Youssouf"]

//  Only for even number
const even = (arr) => arr.filter(x=> x% 2 === 0) 


// console.log(even(usr));

// only for odd number


const odd = (arr) => arr.filter(x => x % 2 )

// console.log(odd(usr));

// only divide by 6

const div = (arr) => arr.filter(x => x % 6 === 0)

// console.log(div(usr));


// Write a function capitalize that takes a string and uses .map to return the same string in all caps.


const cap = fname.map(x => x.toUpperCase())

// console.log(cap);






















// let random = ['yogue', 'always', 'youssouf']

// const word = arr => arr.filter(x => x.length > 5 )

// const bWord = arr => arr.sort((a,b) => a-b)


// console.log(word(random));


