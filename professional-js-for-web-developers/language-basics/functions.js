///////////////
// FUNCTIONS //
///////////////

function sayHi (name, message) {
	alert("Hello " + name + ", " + message);
}
sayHi(Mark, "Weather is good today");

// Any function can return a value at any time by using the return statement 
// Keep in mind that a function stops executing and exits immediately when it encounters the return statement

function sum(num1, num2) {
	return num1 + num2;
    alert('Hello world'); //never executed
}

// also possible to have more than one return statement in a function

function diff(num1, num2) {
	if (num1 < num2) {
		return num2 - num1;
	}
	else {
		return num1 - num2;
	}
}

// The return statement can also be used without specifying a return value
// It’s recommended that a function either always return a value or never return a value. Writing a function that sometimes returns a value causes confusion, especially during debugging.


// Understanding Arguments
//  arguments in ECMAScript are represented as an array internally. The array is always passed to the function, but the function doesn’t care what (if anything) is in the array
function sayHi() {
	alert('Hello ' + arguments[0] + ', ' + arguments[1]);
}
// ECMAScript: named arguments are a convenience, not a necessity

// length property
function howManyArgs() { 
	alert(arguments.length);
}

howManyArgs('string', 45); //2 
howManyArgs(); //0 
howManyArgs(12); //1

// arguments correspond to the value of num1 so they can be used interchangeably
function doAdd(num1, num2) {
    if(arguments.length == 1) {
		alert(num1 + 10);
    } else if (arguments.length == 2) {
		alert(arguments[0] + num2);
	}
}

// No Overloading
// ECMAScript functions cannot be overloaded in the traditional sense

// If two functions are defined to have the same name in ECMAScript, it is the last function that becomes the owner of that name.
function addSomeNumber(num){
	return num + 100;
}
function addSomeNumber(num) {
	return num + 200;
}
var result = addSomeNumber(100);
