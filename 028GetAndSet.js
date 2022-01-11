let user = {};
Object.defineProperty(user, "age", {    // get and set methods are called when a value is called or set. get 과 set 메서드는 객체의 멤버가 호출되거나 대입될 때 불러와진다.
    get: function() {
        return this._age;       // _ means this field is private. _는 해당 필드가 비공개임을 나타냄 JS에는 따로 private키워드가 없음.
    },
    set: function(age) {
        if (age < 0) {
            console.error('age must be non-negative Integer');
        } else {
            this._age = age;
        }
    },
    enumerable: true
});
user.age = 10;
console.log(user.age);
user.age = -1;

let user2 = {
    get name() {
        return this._name;
    },
    set name(val) {
        if (val.length < 3) {
            throw new Error('Its length must be longer than 2');
        }
        this._name = val;
    }
}
user2.name = 'harin';
console.log(user2.name);
user2.name = 'ha';