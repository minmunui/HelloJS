import {add, Person, version} from "./039ExportWithVariousName.js";

const result = add(1, 2);
const harin = new Person("Harin");

console.log(result);
console.log(harin.name);
console.log(version);

//personA = 'v2' imported name cannot be reused.