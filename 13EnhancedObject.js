
//Destructing Assignment enable developer to assign variables easily 비구조화 할당을 통해 객체의 값을 새로운 변수에 쉽게 할당할 수 있다.
var obj = {a: 1, b: 2, c: 30, d: 44, e: 5};

var {a, c} = obj;           // you can get and assign many variables from object 
console.log(`a >>> ${a}`);
console.log(`c >>> ${c}`);

var {a:newA=10, f:newF=5} = obj;    // a:newA=10 -> Assign value of 'a' to 'newA'. If a is not defined, assign 10 to 'newA' newA에 a의 값을 할당한다. 만약 a가 undefined하다면 10이 기본으로 할당된다.
console.log(`newA >>> ${newA}`);    
console.log(`newF >>> ${newF}`);

var arr = [1, 2, 30, 44, 5];        

var [b, c, ...rest] = arr;          // first element of arr is assigned to b, rest elements is assigned to 'rest'
console.log(`0) b >>> ${b}`);       // 첫 번째 원소는 b에 두 번재는 c에 나머지는 rest에 저장된다.       
console.log(`0) c >>> ${c}`);
console.log(`0) rest >>> ${rest}`);

var [a=10, f=9] = [1];              // first element of arr is assigned to a. there are no second element so default value 9 is assigned to f
console.log(`1) a >>> ${a}`);       
console.log(`1) f >>> ${f}`);

[a, f] = [f, a];                    // 
console.log(`2) a >>> ${a}`);
console.log(`2) f >>> ${f}`);

function getArr() {
    return [1, 2, 3, 4, 5 ,6];
}

[a, , , , , f] = getArr();
console.log(`3) a >>> ${a}`);
console.log(`3) f >>> ${f}`);