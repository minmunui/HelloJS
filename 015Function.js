// 1. key word 'function'
// 2. function name
// 3. parameters
// 4. function body

var greeting_expression = function(name) {  // assign function to variables
    console.log('Hi, ' + name);
}

function greeting_declaration(name) {   // 
    console.log('Hi, ' + name);
}
greeting_expression('Chloe');
greeting_declaration('Chloe');