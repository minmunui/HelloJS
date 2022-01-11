function sum(...args) { // by using ... key word rest parameter can be assigned to variable  ...뒤에 변수이름을 적음으로써 남는 매개변수를 array형태로 받을 수 있다.
    var total = 0;
    for ( var i = 0 ; i < args.length ; i ++ ) {
        total += args[i];
    }

    console.log(args.indexOf(1));
    return total;
}
console.log(sum(1, 2, 3));

function sum2(a, b, ...others) { 
    var total = a + b;
    for ( var i = 0 ; i < others.length ; i ++ ) {
        total += others[i];
    }
    return total;
}

console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 4));