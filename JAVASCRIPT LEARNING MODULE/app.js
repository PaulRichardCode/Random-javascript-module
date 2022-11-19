/* const dayHours = {
    workHours : 6,
    sleep: '6:25',
    walkMiles: 2000,
    food : 'rice'
}

const midterms = {
    studentA : 234,
    studentB : 200,
    studentC : 123,
}

const shoppingCart = [
    {
        username: 'Richardpaul6',
        price: '$6.99',
        text: 'lolololol',
        votes: 21,
},
    {
        username: 'mrmoney',
        price: '$3.99',
        text: 'omolope',
        votes: 9
    }
];

const Gideon = {
    userName: 'gideon300',
    age: '21',
    sex: 'male',
    hobbies: ['dancing', 'eating', 'gyming', 'womanizing', 'coding'],
    followers : 24,
}
 */
/* 
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
*/

/*  for (let i = 1; i < 10; i++){
    console.log(i)
};
 
for (let i = 2; i <= 20; i+=2) {
    console.log(i)
}; */

/* for (let paul = 1; paul < 20; paul+=2) {
    console.log(paul)
} */

/* for (let i = 100; i >= 10; i-=10){
    console.log(i)
} */


 
/*  for (let i = 0; i < animal.length; i++){
    console.log(i,animal[i])
 } */

/*  const animal = ['lion', 'tigers', 'bears'];

 for (let i = animal.length - 1; i >=0; i--){
    console.log(animal[i])
 } */

/* 
const lifespan = [12,8, 7]

for (let i = 0; i <= birds.length; i++ ){
    console.log(birds[i])

    for (let j = 0; j <= lifespan.length; j++) {
        console.log(j)
    }
} */
/* const birds =[
    ['Chcken', 'turkey', 'duck', 'guinea fowl'],
    ['dove', 'pigeon', 'hawk','owl'],
    ['Eagle', 'vulture', 'ostrich', 'falcon']
]

for (let i = 0; i < birds.length; i++{
    const row = birds[i];
    console.log('ROW #${i + 1}')
    for (let j = o; j < row.length; j++){
        console.log(row[j])
    }
}

 */

/* const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!


for (let i = 0; i < people.length; i++){
    console.log(people[i].toUpperCase() )
} */

/* let i = 0;
while (i < 10){
    i++;
    console.log(i);
}

 */

// while

/* const secret = 'woman';

let guess = prompt('Guess My secret');

while (guess !== secret){
    guess = prompt('enter the secret code')
} */
/* 
let age = prompt('what is your age')

if (age >= 18){
    console.log('welcome')
} else {
    console.log (prompt('try again'))
} */

/* const secret = 'baby';

let guess = prompt('GUESS MY AGE?');

while (guess !== secret){
    guess = prompt('TRY AGAIN!!!')
}
console.log('CONGRATS YOU GOT IT ') */



// EPIC BREAK KEYWORD



/* let input = prompt('Hey, Say something!')

while (true){
    input = prompt(input);
    if (input === 'stop copying me'){
        break;
    }
}
console.log('ok you win'); */

/* const hymn = 'Jesus';
let input1 = prompt('say something!');

while(input1 != prompt){
    input1 =  prompt(input1);
    if (input1 == hymn){
        break;
    }
}
console.log('WELCOME MY BROTHER'); */


// LEARNING FOR OF LOOP

/* 
const subreddit = ['cringe', 'books', 'chicken', 'funny', 'pics', 'soccer'];

for (let i = 0; i < subreddit.length; i++){
    console.log(`reddit.com/r/${subreddit[i]}.`);
};

for (i of subreddit){
    console.log(`bro ${i}`)
}

for (i of bro){
    console.log(i)
} */

/*  const students = [
    ['john','noel','balde'],
    ['john','noel','balde'],
    ['john','noel','balde']
]; */
/*
for (let i = 0; i < students.length; i++){
    let row = students[i];
    for(let j = 0; j < row.length; j++){
        console.log(row[j])
    }
}


for (let i = 0; i < students.length; i++){
    let row = students[i];
    for (let j = 0; j < row.length; j++){
        let bro = row[j];
        for(let q = 0; q < bro.length; q++){
            console.log(bro[q])
        }     
    }
}
for (let stud of students){
    for (let i of stud){
        console.log(i)
    }
}


 */

//USING FOR... IN, INSTEAD OF FOR...OF
/*  for (let i = 0; i < testScores.length; i++){
    let room= testScores[i];
    for(let classA in room){
        console.log(room[classA])
    }
}; */

/* const testScores = {
    keeman: 80,
    brawn : 72,
    shaw : 99,
    easue : 54,
    paul: 56,
    joel : 80,
    bobby : 54,
    ron : 60
    } 
;


// USING FOR.. OF IN FOR..IN
let total = 0;
for (brocode of Object.values(testScores)){
    total += brocode;
    console.log(brocode)
}
 */

