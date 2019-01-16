// to check browser compability

// http://kangax.github.io/compat-table/es6/


var x = 1;


var x = 2;



function multiply() {
       return x * 2;
}

function nextFunc() {
    return 1 + 2;
}


console.log(multiply())
console.log(nextFunc())var x = 1;


var x = 2;



function multiply() {
       return x * 2;
}

function nextFunc() {
    return 1 + 2;
}


console.log(multiply())
console.log(nextFunc())

{
    var x = 1;
}
{
    console.log(x)
}

let x = 1;
// let x = 2; // let not allow me to overwrite value

{
    let x = 1;
    console.log(x);
}
{
    console.log(x)
}

const x = 2;
x = 4 // assignment to constant variable not allowed


let x = 4;

x = 5;

console.log(x) // allow me to reassign  the variable

const  x = { a: 1, b: 2};

x.a = 2;

console.log(x) // so u can change the inner value of the object or array