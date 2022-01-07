function checkNumber(val) {
    if (typeof val !== 'number') throw 'Invalid value';
    console.log('confirm number type value');
}

// checkNumber(100);
// checkNumber('Wrong Type');
// console.log('complete');


try{
    checkNumber(100);
    checkNumber('Wrong type');
} catch (e) {
    console.log(`Error occured >>> ${e}`);
} finally {
    console.log('Complete');
}