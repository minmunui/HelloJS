export default function add1(a, b) {
    return a + b;
}
export const version = 'v1.0';

export let value = 1;   // Modifying value in here, affect importing javaScript. 이곳에서 value를 수정하면 import하는 코드에서도 영향을 받는다.

setTimeout( () => {
    value++;
}, 1000);