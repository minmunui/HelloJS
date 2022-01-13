// The variable defined using 'var' is valid in fuction variable defined
// using 'let', the variable is valid in the block.

// var 를 사용하면 해당 functon 안에서만 유효하다.
// let 을 사용하면 해당 block 안에서만 유효하다.
if (true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}

console.log(functionScopeValue);
console.log(blockScopeValue);

let value = "outside";
if ( true ) {
    let value = 'Inside' // if value is not declared, "outside" will be called. 내부에서 let을 이용해서 선언하지 않는다면 외부의 변수가 호출된다.
}