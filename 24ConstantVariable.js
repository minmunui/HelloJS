const URL = 'http://js.com';
// URL = 'http://js.com'; // constant can not be modified. 상수는 변환될 수 없음.

if ( true ) {
    const URL2 = 'http://js.com';   
}

// console.log(URL2);

const CONST_USER = {name: 'jay', age: 30};
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = 'jay2';   // property of constant object can be modified. 
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER = {name: 'bbo'}; // but reassignment is unable.