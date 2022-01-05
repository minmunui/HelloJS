// It is almost same as other languages :D

console.log('[Arithmetic Operator]');

var x = 10;
x += 5;
x *= 2;
console.log(x);
var y = 10;
y -= 5;
y /= 5;
console.log(y);

console.log(15 % 4);    // it means remains
console.log(3 ** 3);    // it means power
console.log(+10);
console.log(-10);
var value = 10;
++ value;
-- value;
console.log(value);

console.log('[Comparison Operator]');

// double equality -> type casting will occur
// triple equality -> No casting

console.log("[equality]")
console.log(5 == 5);
console.log("5" == 5);
console.log(5 == '5');
console.log(5 != 1);
console.log(5 != "5");
console.log(5 === 5);
console.log(5 === "5");
console.log(5 !== 10);
console.log( 5 !== "5");

console.log("[comparing]");
console.log( 5 > 3 );
console.log( 5 < 3 );
console.log( 5 <= 6 );
console.log( 5 >= 5 );

// Logic

console.log("[And Logic operator]");

console.log(true && true);
console.log(true && false);
console.log('statement' == 'statement' && 5 == 5 );
console.log(5 == 5 && 'other statement 1' == 'other statement 2');

console.log("[Or Logic Operator]");

console.log(true || false);
console.log(false || false);
console.log('statement' == 'statement' || 5 == 10);

console.log("[Not Logic Operator]");

console.log(!true);
console.log(!false);
console.log(!5);
console.log(!'Statement');  // if value is not NaN(null or undefined), false will be returned.
console.log(!!5);
console.log(!!'Statement');

console.log('[Operator for three operand]');

var condition = 5 > 10;
condition? console.log('Left') : console.log('Right');

var result = condition ? (          // Only last value in bracket will be substituted to result.
    console.log('First expression'),
    "expression 1"
) : (
    console.log('Second expression'),
    "expression 2"
);
console.log(result);