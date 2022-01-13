// this.valueA = 'a';          // this in global imply window so this 'a' is assigned to windows.valueA. 글로벌에서 this를 이용하면 전역 객체인 windows를 의미하게 된다.
// console.log(valueA);
// valueB = 'b';
// console.log(this.valueB);

function checkThis() {
    console.log(this);
}
function checkThis2() {
    "use strict";               // if you use strict mode, 'this' is not defined -> undefined. 엄격한 모드를 사용하면 this는 정의되지 않는다.
    console.log(this);
}
console.log('[checkThis1]');
checkThis();
console.log('[checkThis2]');
checkThis2();

function Product(name, price) {
    this.name = name;
    this.price = price;
}
const product1 = Product('bag', 2000);  // there are no key word 'new' so product1 is not defined newly. new 키워드를 붙이지 않으면, 새로운 객체의 this는 window를 가르킴
// console.log(window.name);
// console.log(window.price);

const product2 = { 
    name: 'bag',
    price: 3000,
    getVAT() {
        console.log("getVAT() in product2");
        return this.price / 10;
    }
}
const valueOfProduct2 = product2.getVAT();
console.log("valyeOfProduct2 = " + valueOfProduct2);

const calVAT = product2.getVAT;
const VAT2 = calVAT();
console.log("VAT2 => " + VAT2);     // Due to line 22, window.price is 2000. so calVAT(); return 200. 22줄에서 전역 price에 2000이 대입되면서 일반 calVAT()는 200을 반환하게 된다.

const newCalVAT = calVAT.bind(product2); // by concatenating .bind(object) after method, designate 'this'. 메서드 뒤에 .bind(object)를 두면 메서드의 this를 특정 object로 지정할 수 있다. 
const VAT3 = newCalVAT();
console.log("VAT3 => " + VAT3);     // this is binded to product2. this 가 product2로 바인딩 되었다. calVAT는 window가, newCalVAT는 product2가 this로 바인딩 되었다.

const counter1 = {
    count: 0,
    addAfter1Sec() {
        setTimeout(function() {
            this.count += 1;
            console.log("this.count => " + this.count);
        }, 1000)
    }
};
counter1.addAfter1Sec();

const counter2= {
    count: 0,
    addAfter1Sec() {
            setTimeout(() => {
                this.count+=1;
                console.log("this.count => " + this.count);
            }, 1000)
    }
};
counter2.addAfter1Sec();