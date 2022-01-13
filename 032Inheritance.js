function Storage() {
    this.dataStore = {};
}
Storage.prototype.put = function(key, data) {
    this.dataStore[key] = data;
}
Storage.prototype.getData = function(key) {
    return this.dataStore[key];
}

const productStorage = new Storage();
productStorage.put('id001', {name: 'KeyBoard', price: 2000});
console.log(productStorage.getData('id001'));

function RemovableStorage() {
    Storage.call(this);         // it call constructor of Storage. .call()은 생성자를 호출함.
}
RemovableStorage.prototype = Object.create(Storage.prototype);  // method Object.crate() convert parameter to prototype. Object.create()함수는 주어진 인자를 __proto__에 연결한 객체를 반환함.
// __proto__ = Storage;
RemovableStorage.prototype.removeAll = function() {
    this.dataStore = {}
}
const productStorage2 = new RemovableStorage();
productStorage2.put('id001', {name: 'KeyBoard', price: 2000});
productStorage2.removeAll();
const item2 = productStorage2.getData('id001');
console.log(item2);
