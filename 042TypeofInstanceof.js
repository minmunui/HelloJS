const str = 'JavaScript';
const strObj = new String('JavaScript');
const num = 200;
const numObj = new Number(200);
const bool = true;
const boolObj = new Boolean(true);
const func = function(){};
const arr = [10, 20, 4000];
const obj = {a1: 'test'};
const empty = null;
const notCalled = undefined;

console.log('[Type of]');   // It return type of instance to String value
console.log(typeof str === 'string');
console.log(typeof strObj === 'object');
console.log(typeof num === 'number');
console.log(typeof numObj === 'object');
console.log(typeof bool === 'boolean');
console.log(typeof boolObj === 'object');
console.log(typeof func === 'function');
console.log(typeof arr === 'object');
console.log(typeof obj === 'object');
console.log(typeof empty === 'object');
console.log(typeof notCalled === 'undefined');

console.log('[Instance Of]');   // If value is defined as built-in object, It will return true.
console.log(str instanceof String); //false
console.log(strObj instanceof String);  
console.log(num instanceof Number); // false
console.log(numObj instanceof Number);
console.log(bool instanceof Boolean);   //false
console.log(boolObj instanceof Boolean);
console.log(arr instanceof Array);  // false
console.log(obj instanceof Object);
console.log(func instanceof Function);
console.log(empty instanceof Object);
console.log(notCalled instanceof undefined);    // false

