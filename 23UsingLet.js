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
    let value = 'Inside' // if value is not declared, "outside" will be assigned.
}