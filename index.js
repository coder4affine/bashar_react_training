// to check browser compability

// http://kangax.github.io/compat-table/es6/

// static  explanation is pending




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


// old approch to merge the string 

const firstName = 'yagnesh\'s';

const lastName = '\nmodh';

const fullName = firstName +  ' ' + lastName;

console.log(fullName);


// new approch to merge the string 

const firstName = `yagnesh's`;

const lastName = 'modh';

const fullName = `${firstName} 
${lastName}`;

console.log(fullName);


// <!doctype html>
// <html>
//      <head>
//          <meta charset="UTF-8">
//          <title><title>
//      </head>
//      <body>
//      </body>
// </html>


const html  = `
<!doctype html>
<html>
     <head>
         <meta charset="UTF-8">
         <title><title>
     </head>
     <body>
     </body>
</html>

`

console.log(html)

// object declaration

const a = 1;

const x = { a, b: 2 }; // if property name and variable name are same then no need to use collon symbol

console.log(x);

// object declaration

const a = 1;

const x = {
  a,
  b: 2,
  c() {
      return 3;
  }
}; // if property name and variable name are same then no need to use collon symbol

console.log(x);

console.log(x.c())

function add(a, b = 2) {
    return a + b;
};


console.log(add(1, 3))



class Animal {
    constructor(type = 'animal', shape = 'round') {
        this.type = type;
        this.shape = shape;
    }

    get type() {
        return this._type;
    }

    set type(val) {
        this._type = val.toUpperCase();
    }

    makeSound() {
        console.log('hello form make sound');
    }
}

class Cat extends Animal {

    
    constructor() {
        super('Cat', 'rectangle');
        
    }

    makeSound() {
        super.makeSound();
        console.log('hello from cat class')
    }
    
}


const obj = new Cat();
console.log(obj.type)
console.log(obj.makeSound())

add = (a, b) => a + b;


console.log(add(1,2 ))

add = (a, b) => {
    const newVal = a  * 2;
    return newVal + b
};


console.log(add(1,2 ))

const a = [1,2,3,4,5];

const b = [];

for (let i = 0; i < a.length; i++) {
    const element = a[i];
    b.push(element * 2);
}

console.log(b)

const a = [1,2,3,4,5];

const b = a.map((item) => item * 2;);

console.log(b)

const a = [{ fistName: 'yagnesh', lastName: 'modh'}, { fistName: 'virat', lastName: 'kohli'}];

const b = a.map((item) => `${item.fistName} ${item.lastName}`);

console.log(b)

const a = [1,2,3,4,5];

let sum = 0;

for (let i = 0; i < a.length; i++) {
    const element = a[i];
    sum = element + sum;
}

console.log(sum)

const a = [1,2,3,4,5];

const b = a.reduce((previous, current) => previous + current, 0);

console.log(b);


const a = null;
const b = 4;

const c = a || b;

console.log(c);

const a = null;
const b = 4;

const c = a && b ;

console.log(c)



const users = [{
    name: 'yagnesh',
    gender: 'male'
},
{
    name: 'virat',
    gender: 'male'
},
{
    name: 'rani',
    gender: 'female'
},
{
    name: 'deepika',
    gender: 'female'
}];

const data = [{
    a: 'hello',
    b: 'world'
},
{
    a: 'hello1',
    b: 'world'
},
{
    a: 'hello3',
    b: 'world1'
},
{
    a: 'hello4',
    b: 'world1'
}]

// {
//     male: [{
//         name: 'yagnesh',
//         gender: 'male'
//     },
//     {
//         name: 'virat',
//         gender: 'male'
//     }],
//     female: [{
//         name: 'rani',
//         gender: 'female'
//     },
//     {
//         name: 'deepika',
//         gender: 'female'
//     }]
// }


const goupBy = (data, value) => {
    return data.reduce((acc, x) => {
        (acc[x[value]] = acc[x[value]] || []).push(x);
        return acc;
    }, {})
}


;


console.log(goupBy(users, 'gender'));
console.log(goupBy(data, 'b'));



const users = [{
    name: 'yagnesh',
    gender: 'male'
},
{
    name: 'virat',
    gender: 'male'
},
{
    name: 'rani',
    gender: 'female'
},
{
    name: 'deepika',
    gender: 'female'
}];




const male = users.filter(x => x.gender === 'female');


class Animal {
    constructor(type = 'animal', shape = 'round') {
        this.type = type;
        this.shape = shape;
    }

    makeSound() {
            setTimeout(() => {
                    console.log(this.type);
            }, 1000);
    }
}


const obj = new Animal();

obj.makeSound();