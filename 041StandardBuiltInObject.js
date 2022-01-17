const str = new String('Java Script');  // there are various built-in object for Java Script
const num = new Number(200);
const bool = new Boolean(true);
const data = new Date();
const map = new Map();
const set = new Set();

console.log(Math.PI);
console.log(Date.parse('2019-01-01'));
console.log(JSON.parse('{}'));

const str1 = 'Java Script Q.200';
const str2 = new String('Java Script Q.200');

console.log(typeof str1);
console.log(typeof str2);

console.log(str1 === 'Java Script Q.200');
console.log(str2 === new String('Java Script'));

console.log(str1.valueOf());
console.log(str2.valueOf());