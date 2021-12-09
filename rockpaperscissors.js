// 0 stand for Rock, 1 stand for Papper and 2 Stand for Scissors
let prm = require('prompt-sync')();
let usr = prm('Rock or Paper or Scissors: ')
usr.toLocaleLowerCase()
let cInput = Math.floor(Math.random() * 3)

const computer = function () {
    if (cInput == 0){
        console.log('paper');
        return 'paper'
    }else if (cInput == 1){
        console.log('rock');
        return 'rock'
    }else if(cInput == 2){
        console.log('scissors');
        return 'scissors'
    }
}

let x = computer()

const compare = function () {
    if (usr == x){
        console.log('draw');
    }else if (usr == 'rock' && x == 'paper'){
        console.log(`You = ${usr} vs computer = ${x} : Computer won`);
    }else if(usr == 'rock' && x == 'scissors'){
        console.log(`You = ${usr} vs computer ${x} : You won`);
    }else if(usr == 'paper' && x == 'scissors'){
        console.log(`You = ${usr} vs computer ${x} : Computer won`);
    }else if(usr == 'scissors' && x == 'rock'){
        console.log(`You = ${usr} vs computer ${x} : You won`);
    }
}
compare()








