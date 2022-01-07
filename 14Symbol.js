const symbol = Symbol();            // symbol can be made by using function Symbol() 
const hello = Symbol('hello');      // 심볼은 Symbol()함수를 통해 생성 가능합니다.

console.log(Number(3) === Number(3));   // Symbol() always return unique value. parameter is invalid it is just used to debug.
console.log(Symbol('symbol') === Symbol('symbol'));
console.log(Symbol() === Symbol());
console.log(typeof Symbol());

const nationility = Symbol('netionility');
const user = {
    name: 'jay'
};

user[nationility] = 'korean';
console.log(user[nationility]);

for (let key in user) {
    console.log(key);
}

console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));

const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);