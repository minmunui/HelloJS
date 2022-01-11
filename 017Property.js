var obj = {}; // first, make a object 오브젝트를 만들고
for (var i = 0 ; i < 4 ; i ++) {
    obj['key' + i] = i; // assign property by using bracket []를 이용해서 속성을 할당한다.
}
console.log(obj);

var profile = 'chloe:30';
var person = {
    [profile] : true,   // by using bracket make property have value of profile as name 괄호를 씌움으로써 profile의 값을 속성의 이름으로 지정할 수 있다.
    [profile.split(':')[0]]: profile.split(':')[1]  // also 마찬가지
};
console.log(person);