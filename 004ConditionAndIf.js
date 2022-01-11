var result = true;
if (result) console.log('result is true');
if (!result)
    console.log('It will be not excuted');
if (result) {
    console.log('result of result(?)');
    console.log('>> it is true');
}

var number = 2;
if (number == 1) {
    console.log('number is 1');
} else if (number == 2) {
    console.log('number is 2');
} else if (number == 3) {
    console.log('number is 3');
} else {
    console.log('number is not all 1, 2, 3');
}

var subject = 'JavaScript';
switch(subject) {
    case 'C':
        console.log('C++ 200 Questions for noob');
        break;
    case 'JavaScript':
        console.log('Java script 200 questions for noob');
        break;
    case 'Python':
        console.log('Python 200 questions for noob');
        break;
    default:
        console.log('You are not noob');
        break;
}