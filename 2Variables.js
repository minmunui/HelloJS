var x = 5;          // number
var y = 'five';     // string
var isTrue = true;  // boolean
var empty = null    // null
var nothing // undefined
var sym = Symbol('me'); // symbol is not modifiable

var item = {
    price : 5000,
    count : 10
};

var fruits = ['apple', 'orange', 'kiwi'];
var addFruit = function (fruit) {
    fruits.push(fruit);
}

addFruit("Watermelon");
console.log(fruits);