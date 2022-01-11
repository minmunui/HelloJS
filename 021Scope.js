var a = 10;
console.log(a);

function print() {
    var b = 10;
    if (true) {
        var c = 30;
    }
    console.log(c);
}

print();
// console.log(b);     // 'b' is not declared globally. b는 

var aa = "global";

function print1() {
    console.log(aa);
}

function print2() {
    var aa = "local";
    print1();
}

print1();
print2();