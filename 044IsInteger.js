console.log(Number.isInteger(0));
console.log(Number.isInteger(-1));
console.log(Number.isInteger(777777777777777777777777777777777)); // The rest returned false only.
console.log(Number.isInteger(null));
console.log(Number.isInteger(0/0));
console.log(Number.isInteger('Infinity'));
console.log(Number.isInteger(true));
console.log(Number.isInteger({}));