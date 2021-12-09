
const battle = function(){
    if (uInput == cInput){
        console.log("draw");
    }else if (uInput > cInput){
        console.log("You won");
    }else if (uInput < cInput){
        console.log("Computer Won");
    }else{
        console.log('Only from 0 - 2');
    }
}








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