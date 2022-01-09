let user = {
    name: "jaedo"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name'); // Every objects in JS have property descriptor(기술어(구)) 
console.log(descriptor);    // Everything 

let user2 = {};
Object.defineProperty(user2, "name", {  // Object.defineProperty(Object, Member, Properties) allow you configure member property 해당 함수를 통해 오브젝트 멤버의 속성을 설정할 수 있다.
    value: "jaedo",
    enumerable: true,           // if enumerable is true, "name" can be iterated by using for ... in, or Object.keys true일 때, for 혹은 Object.keys를 통해 해당 속성을 순회할 수 있게 된다.
    configurable: true,         // if true, you can modify descriptor. configure 환경설정하다. 
    writable: false             // if true, you can modify this property. true일 경우 해당 속성을 변경할 수 있다.
});
console.log(user2.name);        
user2.name = "bbo";             // you can't modify "name", since writable is false.
console.log(user2.name);

let user3 = {
    name: "jaedo",
    toString() {
        return this.name;
    }
};
Object.defineProperty(user3, "toString", {
    enumerable: false
});
for (let key in user3) {
    console.log("enumberable" + key);
}

let user4 = {};
Object.defineProperty(user4, "name", {
    value: "jaebo",
    configurable: false
});
delete user4.name;
console.log(user4);
Object.defineProperty(user4, "name", {
    writable: true
});