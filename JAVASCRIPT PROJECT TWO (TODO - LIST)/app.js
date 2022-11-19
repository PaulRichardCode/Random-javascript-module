// TODO LIST APP

// Start with 'QUIT'
let input = prompt('What would you like to do?');

const todos = ['Cleaning the house', 'Pray to God!'];

while(input !== 'quit' && input !== 'q'){
   
    if (input === 'list'){
        console.log('*******************')
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`)}
        console.log('*******************')
    } else if(input==='new') {
        const newTodo = prompt('What is the new Todo?')
        todos.push(newTodo);
        console.log(`${newTodo}, added to the list`)
    } else if(input === 'delete'){
        const index = prompt ('Ok, Enter an Index to delete:');
        console.log(index);
        const deleted = todos.splice(index, 1);
        console.log(`ok, deleted ${deleted[0]}`)
    }

    input = prompt('What would you like to do?')
};
console.log('OKAY QUIT THE APP');



//QUIT
/* 
let input = prompt('What will you like to do?');

let list = ['Eat food', 'Code all day'];

while (input !== 'q') {
    input = prompt('What will you like to do?');
    if (input === 'list'){
    console.log('************')
    for (let i = 0; i < list.length; i++){      
        console.log(`${i}: ${list[i]}`)      
    } ;
    console.log('************');
    	} else if (input === 'new'){
        input = prompt('Enter a todo!');
        list.push(input);
        console.log(`${input} has been added to the list`)
    } else if(input === 'delete') {
       const index = prompt('okay enter an Index to delete?');
       console.log(index);
      const deleted = list.splice(input,1);
       console.log(`${deleted[0]} has been deleted`)
    }
   
}

console.log('YOU HAVE QUIT THE APP!') */