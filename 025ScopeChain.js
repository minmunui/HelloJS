var person = 'harin';

function print() {
    var person2 = 'jay';

    function innerPrint() {
        console.log(person);    // person is not defined in innerPrint() so person2 in print() is found and person in global is found.
        console.log(person2);   // person이 innerPrint()에서 선언되지 않았으므로, print()의 person을 찾는다. 마찬가지로 global영역의 person을 찾는다.
    }

    innerPrint();

    console.log('print finished');
}

print();
console.log('finished');