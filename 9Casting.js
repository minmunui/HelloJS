console.log("5" + 1);   // for + operand is casted to string
console.log("5" - 1);   // otherwise, casted to number
console.log("5" * 2);
console.log("There is " + 5);
console.log("Five" * 2);    // It's invalid

console.log('Type casting using operator');
var str = 5 + "1";
console.log(str);
console.log(typeof str);

var num = +str;
console.log(num);
console.log(typeof num);

console.log("Type castring using function");
str = String(num);
console.log(str);
console.log(typeof str);

num = Number(str);
console.log(num);
console.log(typeof num);