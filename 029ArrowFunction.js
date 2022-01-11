// fuctionName = parameters => returnValue or fuctionBodyBlock

const double = x => x + x;      // you can omit parenthesis, if there is only one parameter.
console.log(double(2));         // parameter가 하나라면 소괄호를 생략해도 좋다.

const add = (a, b) => a + b;
console.log(add(1, 2));

const printArguments = () => {  // Arrow function can't use arguments key word.
    console.log(arguments);     // 화살표함수는 arguments를 사용할 수 없음.
}
printArguments(1, 2, 3);

const sum = (...args) => {      // ... rest key word is available.
    let total = 0;              // ... 키워드 사용 가능.
    for (let i = 0 ; i < args.length; i ++) {
        total += args[i];
    } 
    return total;
}

console.log(sum(1, 2, 3));

setTimeout(() => {
    console.log('Arrow Fuction!');
}, 10);

hello(() => {console.log("hi")});

hello();