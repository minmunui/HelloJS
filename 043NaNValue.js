console.log(Number.isNaN(NaN)); // NaN is 'Not a Number'. it returns true.
console.log(Number.isNaN(undefined));
console.log(Number.isNaN('Is it Number?'));
console.log(Number.isNaN(0));
console.log(Number.isNaN(null));

console.log(Number.isNaN(-1));
console.log(Number.isNaN(0/0)); // reutnrn true
console.log(Number.isNaN(new Date()));  // new Date() returns number as long type.
console.log(Number.isNaN(new Date().toString)); // it returns date as string.
console.log(Number.isNaN('Infinity'));

function verifyNumber(n) {
    if (!n || Number.isNaN(n)) return 0;
    return n;
}
const num1 = verifyNumber(15);
const num2 = verifyNumber(undefined); //0 other value is uncalculatable.
const num3 = verifyNumber(null);    //0
const num4 = verifyNumber(NaN); //0
console.log(num1 + num2 + num3 + num4);