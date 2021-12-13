let num  = document.getElementById('userInput').value

document.getElementsByClassName('submit').onclick = num.reduce((a,b) => a > b ? a : b);










// const cInput = function(){
//     max = Math.floor(Math.random()*3)
//     if(max == 0){
//         console.log('Paper');
//     }else if(max == 1){
//         console.log('Rock');
//     }else if (max == 2){
//         console.log('Scissors');
//     }
// }










// function div(arr){
//     return arr.filter(function (num){
//         return num % 6 === 0
//     })
// }
// console.log(div(usr));