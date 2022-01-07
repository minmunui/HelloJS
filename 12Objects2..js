var address = 'Seoul';
var members = {};
var addFamily = function(age, name, role) {
    this.members[role] = {age, name};
};

var getHeadCount = function() {
    return Object.keys(this.members).length;
};

var family = {address, members, addFamily, getHeadCount};   //선언해 놓은 요소들을 family라는 객체에 집어넣는다. put defined components to Object family

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');
console.log(family.getHeadCount());

var obj = {};
for ( var i = 0 ; i < 4 ; i ++ ) {
    obj['key' + i] = i;
}

console.log(obj);

var profile = 'chloe:30';
var person = {
    [profile] : true,   //대괄호를 씌우지 않으면 profile이라는 속성의 true가 된다. If no bracket, the profile become property name of 'true'
    [profile.split(':')[0]]:profile.split(':')[1]
};

console.log(person);