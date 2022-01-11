for (var i = 0 ; i < 10 ; i ++ ) {
    console.log( "Repeated " + i + " times");
}

var hometown = [
    {name: 'Jin', place: "Changwon", city: "GN"},
    {name: 'Hoon', place: "Jangyu", city: "GN"},
    {name: 'Sang', place: "Incheon"},
    {name: 'Eun', place: "Kangreung", city: "G"}
];

for ( var i = 0 ; i < hometown.length ; i ++ ) {
    var h = hometown[i];
    if (!h) continue;

    console.log( i );
    if ( h.name == 'Sang') {
        console.log('The home town of ' + h.name + ' is ' + h.place + ' in ' + h.city );
        break;
    }
}

var store = {snack: 1000, flower: 5000, beverage: 2000};

for ( var item in store) {
    if ( !store.hasOwnProperty(item)) continue;

    console.log('The price of ' + item + ' is $' + store[item] ); // Key : value
}