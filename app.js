/**
 * Created by joelmiller on 7/14/15.
 */
console.log(1);

for(var x = 0; x < 1000; x++) {
    //console.log(x);
}

var joelsArray = [];

for(var x = 0; x < 1000; x+=25) {
    joelsArray.push(x);
}

console.log(joelsArray)

var primeArray = [1, 2, 3];

console.log('Array is ' + primeArray.length + ' characters long');


primeArray.push(4);


console.log('Array is ' + primeArray.length + ' characters long');

var lastNumber = primeArray.pop();

console.log('Last number is: ' + lastNumber);

var someNumber = "3";

var realNumber = parseInt(someNumber);

console.log(someNumber + ' was translated to ' + realNumber);

for (var y = 0; y < joelsArray.length; y++){
   joelsArray[y] = joelsArray[y].toString();
}

console.log(joelsArray);

var someAwesomeString = "Joel is awesome";

console.log(someAwesomeString.charAt(0));

for(var iterator = 0; iterator < someAwesomeString.length; iterator++) {
    console.log(someAwesomeString.charAt(iterator).toUpperCase());
}

function augmentA(value) {
    return value;
}

console.log(augmentA(6));

var area = function(width, height) {

    return width * height;

}

console.log(area(50,75));