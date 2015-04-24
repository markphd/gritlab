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
var intNum = 56; //Integer
var octalNum = 070; // octal for 56;
var hexNum1 = 0xA;        //hexadecimal for 10


var floatNum = 1.1;
var floatNum = .1; // not recommended
// adding 0.1 and 0.2 yields 0.30000000000000004 instead of 0.3


// NaN
// There is a special numeric value called NaN, short for Not a Number
// NaN is not equal to any value, including NaN. For example, the following returns false:
alert(NaN == NaN);    //false


// Number conversion
Number("091734947209"); // 91734947209
Number("0x483"); // Integer 1155
Number(""); // Empty string outputs 0
Number(test); //Passes function or object returns NaN

// Because of the complexities and oddities of the Number() function when converting strings, 
// the parseInt() function is usually a better option when you are dealing with integers.
var num1 = parseInt("1234blue");    //1234
var num2 = parseInt("");            //NaN
var num3 = parseInt("0xA");         //10 - hexadecimal
var num4 = parseInt(22.5);          //22
var num5 = parseInt("70");          //70 - decimal
var num6 = parseInt("0xf");         //15 - hexadecimal

 // providing the hexadecimal radix, you can leave off the leading "0x" and the conversion 
 //will work as follows:
var num1 = parseInt("AF", 16);         //175
var num2 = parseInt("AF");             //NaN

//Passing in a radix can greatly change the outcome of the conversion
var num1 = parseInt("10", 2);         //2 - parsed as binary
var num2 = parseInt("10", 8);         //8 - parsed as octal
var num3 = parseInt("10", 10);        //10 - parsed as decimal
var num4 = parseInt("10", 16);        //16 - parsed as hexadecimal

//if the string represents a whole number (no decimal point or only a zero after the decimal point), 
// parseFloat() returns an integer
var num1 = parseFloat("1234blue");    //1234 - integer
var num2 = parseFloat("0xA");         //0
var num3 = parseFloat("22.5");        //22.5
var num4 = parseFloat("22.34.5");     //22.34
var num5 = parseFloat("0908.5");      //908.5
var num6 = parseFloat("3.125e7");     //31250000


var message = 'I am string';
// - "string" if the value is a string
var text = "This is the letter sigma: \u03a3.";
//The entire escape sequence represents a single character

//Strings are immutable in ECMAScript, meaning that once they are created, their values cannot change
var lang = "Java";
lang = lang + "Script";

// This example shows how the output of toString() can change for numbers when providing a radix
var num = 10;
alert(num.toString());       //"10"
alert(num.toString(2));      //"1010"
alert(num.toString(8));      //"12"
alert(num.toString(10));     //"10"
alert(num.toString(16));     //"a"



var school = {
	name: 'Harvard',
 country: 'USA'
}
//Object - unordered list of name-value pairs

var o = new Object(); //recommended

toLocaleString() //—Returns a string representation of the object 
//that is appropriate for the locale of execution environment.
toString() //—Returns a string representation of the object.
valueOf() //—Returns a string, number, or Boolean equivalent of the object. 
//It often returns the same value as toString().