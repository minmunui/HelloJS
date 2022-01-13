var namespaceA = (function() {  // immediately call pattern (function(){//code})(); return object from function. 즉시 호출 패턴을 이용하여, namespaceA 변수에 한수에서 반환된 객체를 할당함.
    var privateVariable = 'Hidden Variable';
    return {
        publicApi: function() {
            console.log(privateVariable + 'can be accessed !');
        }
    }
})();

namespaceA.publicApi();