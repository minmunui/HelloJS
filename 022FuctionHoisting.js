// Hoist 끌어올리다.

hello();
function hello() {
    console.log('Hello');
}

hello2();
var hello2 = function() {
    console.log('hello');
}