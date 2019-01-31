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

class Animal {
    constructor(param1 = 'hello', param2 = 'world' ) {
        this.param1 = param1;
        this.param2 = param2;

    }

    makeSound() {
        return `${this.param1} ${this.param2}`
    }
}

const obj = new Animal();
console.log(obj.makeSound())

class Animal {
    constructor(param1 = 'hello', param2 = 'world' ) {
        this.param1 = param1;
        this.param2 = param2;

    }

    makeSound() {
        return `${this.param1} ${this.param2}`
    }
}

const obj = new Animal();
console.log(obj.makeSound())




const a = { a: 1, b: 2 };
const b = { c: 3, b: 4 };

 // { a: 1, b: 2, c: 3, d: 4 };
// old aprroch to merge object
//  const c = Object.assign({ d: 5}, a, b);
//  console.log(c);

 const c = {...a, ...b};
 console.log(c);


 


 const newUser = {...user, firstName: 'yagnesh'};

 console.log(newUser);

 const func1 = (a,b, ...x) => {
    console.log(x);
     return a + b
 }

 console.log(func1(1,2,3,4,5,6));


 const users = [{
    name: 'yagnesh',
    gender: 'male'
},
{
    name: 'virat',
    gender: 'male'
},
{
    name: 'rohit',
    gender: 'male'
},
{
    name: 'shikhar',
    gender: 'male'
}]


const index = users.findIndex(x => x.name === 'virat');


const editUsers = [...users.slice(0, index), {...users[index], name: 'prashant'} , ...users.slice(index + 1)];
console.log(editUsers)


const user = {
    firstName: 'yagnesh1',
    lastName: 'Modh',
    gender: 'male',
    dob: '04/08/1987'
}

const { firstName, ...x } = user

console.log(firstName);
console.log(x);



const users = [{
    name: 'yagnesh',
    gender: 'male'
},
{
    name: 'virat',
    gender: 'male'
},
{
    name: 'rohit',
    gender: 'male'
},
{
    name: 'shikhar',
    gender: 'male'
}]

const [x, y, ...rest] = users;

console.log(x);
console.log(y);
console.log(rest)



const users = [{
    name: 'yagnesh',
    gender: 'male'
},
{
    name: 'virat',
    gender: 'male'
},
{
    name: 'rohit',
    gender: 'male'
},
{
    name: 'shikhar',
    gender: 'male'
}]

const newData = [...users.slice(0, Math.round(users.length /2)), {name: 'ishan', gender: 'make'}, ...users.slice((users.length /2) + 1)];

console.log(newData)

// looping tech

// for loop

// foreach loop

//while loop

// do while loop

// map

// reduce

// for of

// for in

const arr = [...Array(1000000).keys()]

console.time('for loop');

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
}

console.timeEnd('for loop')

console.time('foreach loop');

arr.forEach(element => {
    const element1 = element;
});

console.timeEnd('foreach loop')


console.time('map loop');

arr.map((item) => item);

console.timeEnd('map loop')

console.time('reduce loop');

arr.reduce((previous, current) => {
   return previous 
}, 0);

console.timeEnd('reduce loop')


console.time('forof loop');

for (const i of arr) {
    const el = i;
}

console.timeEnd('forof loop')



const users = [{
    name: 'yagnesh',
    gender: 'male'
},
{
    name: 'virat',
    gender: 'male',
    dob: '04081987'
},
{
    name: 'rohit',
    gender: 'male'
},
{
    name: 'shikhar',
    gender: 'male'
}]


for (const i of users) {
    console.log(i)
}


 const user = {
    firstName: 'yagnesh1',
    lastName: 'Modh'
 }


 for (const key in user) {
     console.log(key);
 }


 const user = {
    firstName: 'yagnesh1',
    lastName: 'Modh'
 }


 for (const [key, value] of Object.entries(user)) {
     console.log(key);
     console.log(value);
 }

 const c = new Promise((resolve, reject) => {
    setTimeout(() => {
    }, 2000);
  });
  
  c.then(data => console.log(data)).catch(err => {
    console.log(err);
  });




const a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise 1');
    }, 1000);
});


const b = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promise 2');
    }, 1000);
});

const d = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promise 3');
    }, 1000);
});


const c = Promise.all([a, b, d]).then(x => console.log(x)).catch(err => console.log(err))




const a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise 5');
    }, 10000);
});


const b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise 7');
    }, 5000);
});


  
  

const a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise 5');
    }, 2000);
});


const b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise 6');
    }, 1000);
});




const handlePromise = async () => {
  
    const res = await Promise.race([a, b]);

    console.log(res);

}

handlePromise();

  
function* xyz() {
    yield 1;
    yield 2;
    yield 3;
    return 5;
}

const obj = xyz();

console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())


for (const i of obj) {
    console.log(i)
}


import moduleName from 'module';
import {  } from 'module';
import * as name from 'module';
  
  
const a = {
    a: 1,
    b: {
        c: 2,
        d: { 
            e: 4,
            f: 5
        }
    }
}


const b = {
    a: 1,
    b: {}
}

if(a === b) -> true


1
2
3
10, <- cursor
11
4 
5
6
7
8