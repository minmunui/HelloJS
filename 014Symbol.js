const symbol = Symbol();            // symbol can be made by using function Symbol() 
const hello = Symbol('hello');      // 심볼은 Symbol()함수를 통해 생성 가능합니다.

console.log(Number(3) === Number(3));   // true Symbol() always return unique value. parameter is invalid it is just used to debug.
console.log(Symbol('symbol') === Symbol('symbol')); // false
console.log(Symbol() === Symbol()); // false
console.log(typeof Symbol());   // symbol

const nationility = Symbol('netionility');  
const user = {
    name: 'jay'
};

user[nationility] = 'korean';       // to use symbol made before again
console.log(user[nationility]);     // 만들어진 Symbol을 한 번 더 사용하기 위해서는 해당 레퍼런스를 변수에 저장한 후 사용해야 합니다.

for (let key in user) {
    console.log(key);
}

console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));

const symbolProperties = Object.getOwnPropertySymbols(user);    // if you get Symbol key, you can use getOwnPropertySymbols()
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);