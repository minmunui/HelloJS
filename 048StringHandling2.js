//String.includes(StringToFind, searchStartingIndex); return wether a string includes parameter

const includeStr = 'Make your lives extradordinary';

console.log(includeStr.includes('Make'));
console.log(includeStr.includes('Make', 1));   // this method search 'Make' from index 1. -> false


//toLowerCase, toUpperCase.
console.log('Find Your Own Voice'.toLowerCase());
console.log('Find your Own Voice'.toUpperCase());


//Array.from(str); return string as distributed array.
const strFrom = '12345678';

const distributedArr = Array.from(strFrom);
console.log(distributedArr);

const modifiedArr = Array.from(distributedArr, el => el * 2);
console.log(modifiedArr);

//String.split(); return array of String distributed by parameter
const capitals = 'Prague,Czech Republic\nCopenhagen,Denmark\nParis,France\nMadrid,Spain\nRome,Italy';

capitals.split('\n').forEach(s => {
    const capitals = s.split(',')[0];
    const country = s.split(',')[1];
    console.log(`${capitals} is in ${country}`);
})