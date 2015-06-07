////////////////////////////////
// SINGLETON BUILT-IN OBJECTS //
////////////////////////////////

// ECMA-262 defines a built-in object as "any object supplied by an ECMAScript implementation, independent of the host environment, which is present at the start of the execution of an ECMAScript program." This means the developer does not need to explicitly instantiate a built-in object; it is already instantiated. 

// The Global Object
//  In truth, there is no such thing as a global variable or global function; all variables and functions defined globally become properties of the Global object

// URI-Encoding Methods
// The URI-encoding methods encode the URIs so that a browser can still accept and understand them, replacing all invalid characters with a special UTF-8 encoding.

// The encodeURI() method is designed to work on an entire URI
// encodeURI() does not encode special characters that are part of a URI, such as the colon, forward slash, question mark, and pound sign, whereas encodeURIComponent() encodes every nonstandard character it finds. 

var uri = "http://www.wrox.com/illegal value.htm#start";

//"http://www.wrox.com/illegal%20value.htm#start"
alert(encodeURI(uri));

//"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start"
alert(encodeURIComponent(uri));

// Generally speaking, you'll use encodeURIComponent() much more frequently than encodeURI(), because it's more common to encode query string arguments separately from the base URI.

// Likewise, decodeURIComponent() decodes all characters encoded by encodeURIComponent(), essentially meaning it decodes all special values. 

var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";

//http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start
alert(decodeURI(uri));

//http://www.wrox.com/illegal value.htm#start
alert(decodeURIComponent(uri));

// The first value output is the result of decodeURI(), which replaced only the %2 0 with a space. The second value is the output of decodeURIComponent(), which replaces all the special characters and outputs a string that has no escaping in it.
// The URImethods encodeURI(), encodeURIComponent(), decodeURI(), and decodeURIComponent() replace the escape() and unescape() methods, which are deprecated in the ECMA-262 third edition. The URI methods are always preferable, because they encode all Unicode characters, whereas the original methods encode only ASCII characters correctly. Avoid using escape() and unescape() in production code.

// The eval() Method
// When the interpreter finds an eval() call, it interprets the argument into actual ECMAScript statements and then inserts it into place. 
var msg = "hello world";
eval("alert(msg)");    //"hello world"
// the variable msg is defined outside the context of the eval() call, yet the call to alert() still displays the text "hello world", because the second line is replaced with a real line of code.

eval("function sayHi() { alert('hi'); }");
sayHi();
// the sayHi() function is defined inside an eval() call. Because that call is replaced with the actual function, it is possible to call sayHi() on the following line.

eval("var msg = 'hello world';");
alert(msg);  //"hello world"

// Any variables or functions created inside of eval() will not be hoisted, as they are contained within a string when the code is being parsed. They are created only at the time of eval() execution.

// Global Object Properties
// The Global object has a number of properties, some of which have already been mentioned in this book. The special values of undefined, NaN, and Infinity are all properties of the Global object. Additionally, all native reference type constructors, such as Object and Function, are properties of the Global object. 


// In ECMAScript 5, it's explicitly disallowed to assign values to undefined, NaN, and Infinity. Doing so causes an error even in nonstrict mode.

// The Window Object
// Though ECMA-262 doesn't indicate a way to access the Global object directly, web browsers implement it such that the window is the Global object's delegate. Therefore, all variables and functions declared in the global scope become properties on window.
var color = "red";

function sayColor(){
   alert(window.color);
}

window.sayColor();  //"red"

// The window object does much more in JavaScript than just implement the ECMAScript Global object. 

// Another way to retrieve the Global object is to use the following code:

var global = function(){
   return this;
}();

// As mentioned previously, the this value is equivalent to the Global object when a function is executed with no explicit this value specified (either by being an object method or via call()/apply())
// calling a function that simply returns this is a consistent way to retrieve the Global object in any execution environment. 

// The Math Object
// ECMAScript provides the Math object as a common location for mathematical formulas and information. The computations available on the Math object execute faster than if you were to write the computations in JavaScript directly. 

// The min() and max() Methods
// The Math object also contains many methods aimed at performing both simple and complex mathematical calculations.
// These methods accept any number of parameters

var max = Math.max(3, 54, 32, 16);
alert(max);    //54

var min = Math.min(3, 54, 32, 16);
alert(min);    //3

// These methods are useful for avoiding extra loops and if statements to determine the maximum value out of a group of numbers.

// To find the maximum or the minimum value in an array, you can use the apply() method as follows:

   var values = [1, 2, 3, 4, 5, 6, 7, 8];
   var max = Math.max.apply(Math, values);
// The key to this technique is to pass in the Math object as the first argument of apply() so that the this value is set appropriately. Then you can pass an array in as the second argument.

// Rounding Methods
// The next group of methods has to do with rounding decimal values into integers. Three methods—Math.ceil(), Math.floor(), and Math.round()

alert(Math.ceil(25.9));      //26
alert(Math.ceil(25.5));      //26
alert(Math.ceil(25.1));      //26

alert(Math.round(25.9));     //26
alert(Math.round(25.5));     //26
alert(Math.round(25.1));     //25

alert(Math.floor(25.9));     //25
alert(Math.floor(25.5));     //25
alert(Math.floor(25.1));     //25

// The random() Method
// The Math.random() method returns a random number between the 0 and the 1, not including either 0 or 1.

// You can use Math.random() to select numbers within a certain integer range by using the following formula:
number = Math.floor(Math.random() * total_number_of_choices + first_possible_value);

// The Math.floor() method is used here because Math.random() always returns a decimal value, meaning that multiplying it by a number and adding another still yields a decimal value. So, if you wanted to select a number between 1 and 10, the code would look like this:
var num = Math.floor(Math.random() * 10 + 1);

// If you want to select a number between 2 and 10, then the code would look like this:

var num = Math.floor(Math.random() * 9 + 2);
// There are only nine numbers when counting from 2 to 10, so the total number of choices is nine, with the first possible value being 2.

function selectFrom(lowerValue, upperValue) {
   var choices = upperValue - lowerValue + 1;
   return Math.floor(Math.random() * choices + lowerValue);
}

var num = selectFrom(2,10);
alert(num);  //number between 2 and 10, inclusive
//  the function selectFrom() accepts two arguments: the lowest value that should be returned and the highest value that should be returned. The number of choices is calculated by subtracting the two values and adding one and then applying the previous formula to those numbers

// Using the function, it's easy to select a random item from an array, as shown here:

var colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"];
var color = colors[selectFrom(0, colors.length-1)];

// In this example, the second argument to selectFrom() is the length of the array minus 1, which is the last position in an array.

// Other Methods
// The Math object has a lot of methods related to various simple and higher-level mathematical operations.

