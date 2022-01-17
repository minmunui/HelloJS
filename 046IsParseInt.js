console.log(parseInt('15'));
console.log(parseInt('15', 10));    // parseInt('number string', binary, octal, decimal);
console.log(parseInt('15', 2));     // It returns 15 as binary.
console.log(parseInt(5.15));
console.log(parseInt('5.15'));

console.log(parseFloat(5.55));
console.log(parseFloat('5.55'));
console.log(parseFloat('5.55 lll'));    // blank or character is ignored, 5.55 will be returned only.