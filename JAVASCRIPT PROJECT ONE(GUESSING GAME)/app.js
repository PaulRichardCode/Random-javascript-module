
// WRITING A GUESS GAME

alert('LET PLAY A GUESS GAME')

let maximum = parseInt(prompt('Enter a MAXIMUM Number!'));

while (!maximum){
    maximum = parseInt(prompt('ENTER A VALID NUMBER!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

// without parseInt Prompt will always be a string and not A NUMBER

let guess = parseInt(prompt('Enter your first guess!'));
let attempts = 1;

while(guess !== targetNum) {
    if (guess === 'q'){
        break;
    }
    attempts++;
    if (guess < targetNum){
        guess = parseInt(prompt('Guess too low'))
    } else if(guess > targetNum){
        guess = parseInt(prompt('Guess too high'))
    };
  
}; 
alert('CONGRATULATIONS! YOU GUESSED CORRECTLY,');
alert(`Olodo, It took you ${attempts} attempts`)
/* 
alert('HELLO! WELCOME TO A GUESSING GAME!');

let inputN = parseInt(prompt('Enter a maximum number!'));
while (!inputN){
    inputN = parseInt(prompt('Enter a VALID number!'));
}

const random = Math.floor(Math.random() * inputN) + 1;

let mrGuess = parseInt(prompt('ENTER YOUR GUESS!'));
let solution = 1;

while (parseInt(mrGuess) !== random){
    if (mrGuess === 'q'){
        break;
    }
    solution++

    if (mrGuess < random){
        mrGuess = (prompt('Guess again! Number is low'));
    } else{
        mrGuess =(prompt('Guess again! Number is high'));
    }
}

alert('CORRECT! Game-Over')
console.log(`It took you ${solution} Attempts`) */

/* 
//START

alert('WELCOME TO GUESS THE NUMBER!!!');
let maxNum = parseInt(prompt('ENTER A MAXIMUM NUMBER. If you dare!'));

while(!maxNum) {
    maxNum = parseInt( prompt('ENTER A VALID MAXIMUM NUMBER!'));
}



let random = Math.floor(Math.random() * maxNum) + 1;
console.log(random);

let guess1 = parseInt(prompt('ENTER YOUR FIRST GUESS?'));
let attempts = 1;

while(guess1 !== random){  c
    attempts++;  
    if(guess1 < random){
        guess1 = parseInt(prompt('TOO LOW! GUESS AGAIN!'));
    } else {
        guess1 = parseInt(prompt('TOO HIGH! GUESS AGAIN!'));
    }
}
 */