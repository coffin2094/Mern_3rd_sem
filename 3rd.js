// Create a function greet(name, callback) that
//  prints "Hello <name>",
// and then calls a callback function that prints "How are you?".

function greet(name,callback){
    console.log(`Hello ${name}`)
    callback();
}

// function callback(){
//     console.log(`How are you`)
// }

// greet("bca",function name(){
//     console.log("how are you")
// });

// greet("bca",function (){
//     console.log("how are you")
// });

//explicit return 
greet("bca",()=>{
    console.log("how are you")
})

//arrow function
//return statement is implicit
greet("bca",()=>console.log("hello how are you doing"))