// DATA TYPES

// Five simple data types a.k.a primitive types

var mark;
//Undefined - "undefined" if the value is undefined
// any uninitialized variable gets the value of undefined.

// The typeof operator returns "undefined" when called on an uninitialized variable, 
// but it also returns "undefined" when called on an undeclared variable, which can be a bit confusing. 

null
// Null - a null value is an empty object pointer
// typeof returns "object" when it's passed a null value
// When defining a variable that is meant to later hold an object, 
// it is advisable to initialize the variable to null as opposed to anything else

var answer = true;
//Boolean - "boolean" if the value is a Boolean
var answerAsBoolean = Boolean(answer); // True
var zero = 0;
var zeroAsBoolean = Boolean(zero); //False
Boolean(Object); //True
Boolean(mark); //False
//Note:  It's important to understand what variable you're using in a flow-control 
// statement because of this automatic conversion

var numero = 100;
//Number - "number" if the value is a number

var message = 'I am string';
// - "string" if the value is a string

var school = {
	name: 'Harvard',
 country: 'USA'
}
//Object - unordered list of name-value pairs
