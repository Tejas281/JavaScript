const todo =[
    {
        id:1,
        name:'tejas',
        isCompeleted:true

    },
    {
        id:2,
        name:'Akash',
        isCompeleted:true

    },
    {
        id:3,
        name:'Hardik',
        isCompeleted:false

    }

];

console.log(todo);
console.log(todo[1].name);
//this  are converted to javascript to JSON formet
const todoJson = JSON.stringify(todo)
console.log(todoJson);

for(let i=0; i<todo.length ; i++){
    
    console.log(todo[i].name);
    }


    for(let todos of todo){
    
        console.log(todo);
        }
//foreach
        todo.forEach(function (todos){

                console.log(todos.name);
        });
//map
    const   todosname=  todo.map(function (todos){

        return(todos.name);
        
    });
    console.log(todosname);
        

//Filter
// const   todosCompeleted =  todo.filter(function (todos){

 //   return todos.isCompeleted==true
    
//});
//console.log(todosCompeleted);
    


//Filter,map fucition
const   todosCompeleted =  todo.filter(function (todos){

    return todos.isCompeleted==true;
    
}).map(function (todos){

    return(todos.name);
    
})
console.log(todosCompeleted);
    