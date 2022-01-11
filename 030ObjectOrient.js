const teacherJay = {
    name: 'Jay',
    age: 30,
    teachJavascript: function(student) {
        student.gainExp();
    }
}

const studentBbo = {
    name: 'Bbo',
    age: 20,
    exp: 0,
    gainExp: function() {
        this.exp++
    }
}

console.log(studentBbo.exp);
teacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp);

console.log()

const studentProto = {          // 1. define a object 객체 선언하기
    gainExp: function() {
        this.exp++;
    }
}

const harin = {
    name: 'harin',
    age: 10,
    exp: 0,
    __proto__: studentProto     // 2. by using '__proto__' key designate a prototype object __proto__ 키에 객체를 할당하여. 프로토타입 설정.
};

const bbo = {
    name: 'Bbo',
    age: 20,
    exp: 10,
    __proto__: studentProto
};

bbo.gainExp();
harin.gainExp();                // 3. You can use method of prototype.
harin.gainExp();
console.log(harin);
console.log(bbo);