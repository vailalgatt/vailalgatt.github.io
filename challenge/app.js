/*
writing an incrementing loop without the final comma
*/
/*
var message = ''

for(var i=0; i < 10; i++){
    //normal loop along in scope *
    message += i + ','
    //ternary example
    //message += i === 9 ? i : i + ',';
} 

document.write(message)
*/

/*      DO WHILE LOOP
var message = "";
var i = 0;

do {
    message += i + ',';
    i++;
} while (i <10)

document.write(message);
*/


/*      WHILE LOOP
var message = "";
var counter = 0;

while(counter < 10){
    message += counter === 9 ? counter : counter + ',';
    counter++;
}

document.write(message);
*/




/* DISPLAYING ARRAYS --- WHILE LOOP
let cars = ['Saab','Volvo', 'BMW'];
let counter = 0;
while(counter < cars.length){
    console.log(cars[counter]);
    counter++;
}
*/


/*  DISPLAYING ARRAYS ---- FOR EACH LOOP
let cars = ['Saab','Volvo', 'BMW', 'Ford', 'Volkswagon', 'Audi'];
cars.forEach(function(item) {
    console.log(item);
});
*/



/* FOR EACH ---- TERNARY EXAMPLE
let nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let message = '';

nums.forEach(function(item, index, array){
    let isLast = index === array.length - 1;
    message += isLast ? item : item + ', ';
});
 console.log(message);
*/


/*  FOR EACH ---- BUTTON ARRAY
let nums = ['Saab', 'Audi', 'BMW' ];

nums.forEach(function(item){
    document.write('<button type="button">' + item + '</button>')
});
*/

/*  FOR IN ----- KEY PROPERTY DISPLAYS FULL LIST
let car = {
    make: 'BMW',
    model: '338',
    year: 2000
};

for(key in car){
    console.log(key + ": " + car[key]);
}
*/

/*      FOR IN------ LET CAR2 ADDS ADDITIONAL ARRAYS
let car = {
    make: 'BMW',
    model: '338',
    year: 2000
};

let car2 = [];

car2['make'] = 'Volvo';

car2.make

for(key in car){
    console.log(key + ": " + car[key]);
}
*/

/* NESTED LOOP --USE DIFFERENT VARIABLE (J VS I) INSIDE LOOP--
document.write('<table>');
for (var i = 0; i < 10; i++) {
    document.write('<tr>');
    for (var j = 0; j < 10; j++){
        document.write('<td>' + (j+1) + '</td>');
    }
        document.write('<tr>');
}
document.write('<table>');
*/


/*SEARCHING AND PULLING INFO FROM AN ARRAY
let people = [
    {
        firstName: 'Bill',
        lastName: 'Jones'
    },
    {
        firstName: 'Wyatt',
        lastName: 'Erp'
    },
    {
        firstName: 'Jessie ',
        lastName: 'James'
    },
    {
        firstName: 'David',
        lastName: 'Bowie'
    },
];

function findPerson(searchTerm) {

    let person = null;

    people.forEach(function(item) {
        if(item.firstName.toLowerCase().includes(seachTerm .toLowerCase()) || item.lastName.toLowerCase().includes(searchTerm.toLowerCase())){
            person = item;
            return;
        }
    });
    return person;
}

let person = findPerson('James');

console.log('Person: ', person);
*/

//read about break && continue statements


var deck = [];
var suitValues = ['Heart','Spade','Diamond','Club'];
var faceValues = ['A','J','Q','K'];

// Our previous code
var deck = [];
var suitValues = ['Hearts','Spades','Diamonds','Clubs'];
var faceValues = ['A','J','Q','K'];

// Let's add another empty array for our for to push into 
var suit = [];

// And now let's build our loop
for (var i = 2; i <= 10; i++) {
    suit.push(i);
};

// And another loop to add our face values
for (var i = 0; i < faceValues.length; i++) {
    suit.push(faceValues[i]);
}


// Our previous code
var deck = [];
var suitValues = ['Hearts','Spades','Diamonds','Clubs'];
var faceValues = ['A','J','Q','K'];
var suit = [];

for (var i = 2; i <= 10; i++) {
    suit.push(i);
};

for (var i = 0; i < faceValues.length; i++) {
    suit.push(faceValues[i]);
}

// Here we go, this loop will execute 4 times for each of the Suits
for (var i = 0; i < suitValues.length; i++) {
    // This loop will execute 13 times for each of the individual cards
    for (var j = 0; j < suit.length; j++) {
        deck.push(suit[j] + ' of ' + suitValues[i]);
    }
}




