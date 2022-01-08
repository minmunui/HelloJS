function sum() {// parameter : when function is defined arguments : when function called  parameter는 함수 선언 시 작성되는 변수, arguments는 함수 호출 시 사용되는 변수.
    var total = 0;
    for ( var i = 0 ; i < arguments.length ; i ++ ) {   // arguments have length property that return length of parameter arguments는 length 속성을 지원한다.
        total += arguments[i];
    }
    console.log(arguments instanceof Array);
    return total;
}

var sumOf1to3 = sum(1, 2, 3);   // there are no function named sum with 3 parameters, but error don't occured 다른 언어와는 달리 에러가 발생하지 않음
console.log(sumOf1to3);

function testArg() {
    var newArr = Array.prototype.slice.call(arguments); // you can modify arguments to list by using function 특정 메서드를 통해 arguments를 배열로 전환할 수 있다.
    console.log(newArr);
    console.log(newArr.indexOf('b')); // because of newArr, you can use indexOf() 배열 덕분에 indexOf()메서드를 사용할 수 있다.
    console.log(arguments.indexOf('b')); // arguments have no indexOf() method
}

testArg('a', 'b');