// Number

console.log("[Number]");

console.log(Infinity);
console.log(1 / Infinity);
console.log(0 / 0);
console.log(Infinity - Infinity);
console.log(0 / 'Just Value :)');

// String Type

console.log("[String]");

console.log("Hello World with double quotation mark");
console.log('Hello world with quotation mark');

// Boolean Type

console.log("[Boolean]")

console.log(7 > 3);
console.log(3 < 7);


// null and undefined

console.log("[null and undefined]");

var value = null;
console.log(value);
console.log(typeof value);
var value;
console.log(value);
console.log(typeof value);

// template

console.log("[Template]");

var cart = [
    {name: 'dress', price: 2000},
    {name: 'bag', price: 1000}
];


var numberOfItems = `There are ${cart.length} items in cart`;
var cartTable =
`<ul>
  <li>item: ${cart[0].name}, price: ${cart[0].price} </li>
  <li>item: ${cart[1].name}, price: ${cart[1].price} </li>
</ul>`
console.log(numberOfItems);
console.log(cartTable);

var personName = 'harin';
var helloString = 'hello ' + personName;
var helloTemplateString = `hello ${personName}`;
console.log(helloString === helloTemplateString);       // Two strings are same
console.log(typeof helloTemplateString);