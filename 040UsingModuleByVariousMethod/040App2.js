// from now I will refer to google translator.
import * as add from './040ExportVariousComponents.js'; // You can import multiple elements at once via wildcards.
import './040ExportWindow.js';  // import all code from window in module to window. 모듈의 window에 잇는 모든 요소를 현재의 window로 다 불러옴. as 가 없으므로 별도의 이름 필요하지 않음.

console.log(add.version);
const added = add.default(1, 2);    // function is defined as default
console.log(added);

hello('harin');

console.log(add.value);
setTimeout(()=> console.log(add.value), 500);   // before value is not modified in imported module, value is 1. 모듈에서 변수가 수정되기 전에는 변수가 1로 유지되어 있다.
setTimeout(()=> console.log(add.value), 2000); // setTimeout(function, time) => function is called after time. 해당 함수는 time후 function을 호출함. 모듈에서 value를 수정한 후이므로 2가 된다.