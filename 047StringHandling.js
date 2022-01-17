// String.trim()
const sentences = ['    ABC abc', 'ABC abc  ', ' first second third forth sentence'];

const filterSentence = (sentences) => {
    const filtered = [];
    sentences.forEach(s => {
        filtered.push(s.trim());
    });
    return filtered;
}

console.log(filterSentence(sentences));

// String.slice(startIndex, endIndex) return substring of string from startIndex to endIndex.
console.log('[slice()]')
const sentence1 = 'The sun will shine os us again';
console.log(sentence1.slice(13));    // from 13th to end.
console.log(sentence1.slice(13 ,24));// from 13th to 24th.
console.log(sentence1.slice(0));     // from start to end.
console.log(sentence1.slice(0, -23));// from 0 to -23(23th of tail)
console.log(sentence1.slice(50));    // nothing
console.log(sentence1.slice(7, 2));  // nothing

const sentence2 = 'Wakanda Forever!!!';
console.log(sentence2.substr(8));   // 
console.log(sentence2.substr(8, 7));// from 8, 7 characters.
console.log(sentence2.substr(0));
console.log(sentence2.substr(-10));
console.log(sentence2.substr(0, -3));//nothing
console.log(sentence2.substr(30));  // nothing
console.log(sentence2.substr(0, 30));

// String.length() returns length of String.
const StringArr = ['short', 'long sentence, it is not appropriate'];

StringArr.forEach(str => {
    if (str.length < 10) console.log(str);
});

// Object.toString() returns object as String.
const num = 5;
const bool = true;
const str = "String value";
const arr = [1, 2, 3];
const obj = {a: 15};
console.log('[toString()]');
console.log(num.toString());
console.log(bool.toString());
console.log(str.toString());
console.log(StringArr.toString());
console.log(obj.toString());

num.__proto__.toString = () => {    // method overwrite.
    return 'toString overwrite';
};
console.log(num.toString());

// String.concat(String ...);  -  concatenate string.
console.log('[String.concat()]')
const str1 = 'Good afternoon';
const str2 = ', Good evening';
const str3 = ', and Good night!';
const str4 = ' - The Truman Show, 1998';
console.log(str1.concat(str2, str3, str4));

// String.charAt(index); returns character at index.
const charAtStr = 'Good afternoon, Good evening, and Good night! ' + '- The Truman show, 1998';

console.log('[String.charAt]')
console.log(charAtStr.charAt(0));
console.log(charAtStr.charAt(5));
console.log(charAtStr.charAt(14));
console.log(str.length);
console.log(charAtStr.charAt(500));

// String.indexOf(character) returns first found index of character.
console.log('[String.indexOf()]');
const indexOfStr = 'Carpe diem, seize the day';
console.log(`"e" is in ${indexOfStr.indexOf('e')}th index.`);
console.log(`String ", se" is in ${indexOfStr.indexOf(', se')}th index.`);  // you can find location not only 

const IndexOfArr = ['Carpe', 'diem', 'seize', 'the', 'day'];
const howManyHasE = (arr) => {
    let count = 0;
    arr.forEach((str) => {
        if (str.indexOf('e') > -1) count++;
    });
    return count;
}

console.log(`In ${IndexOfArr}, there are ${howManyHasE(IndexOfArr)} elements that have 'e'`);

const lastIndexOfStr = 'Carpe diem, seize the day';

console.log(`"e" is at ${lastIndexOfStr.lastIndexOf('e')}th index.`);
console.log(`String is at ${lastIndexOfStr.lastIndexOf(', se')}th index.`);