function Teacher(name, age, subject) {      // using key word 'this' you can define construct.
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function(student) {
        console.log('Teach ' + subject + ' to ' + student );
    };
}

const jay = new Teacher('jay', 30, 'Javascript');
console.log(jay);
jay.teach('Bbo');

console.log(jay.constructor);
console.log(jay instanceof Teacher);

const jay2 = Teacher('jay', 30, 'JavaScript'); // if omit key word 'new' object is not constructed
console.log(jay2);
console.log(age);