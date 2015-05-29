// The first, function declaration, has the following form:
    function functionName(arg0, arg1, arg2) {
        //function body
    }
// The name of the function follows the function keyword, and this is how the function's name is assigned.


// One of the key characteristics of function declarations is function declaration hoisting, whereby function declarations are read before the code executes.

// The second way to create a function is by using a function expression. Function expressions have several forms. The most common is as follows:

var functionName = function(arg0, arg1, arg2){
   //function body
};

// This pattern of function expression looks like a normal variable assignment. A function is created and assigned to the variable functionName. 
// The created function is considered to be an anonymous function, because it has no identifier after the function keyword. 
// (Anonymous functions are also sometimes called lambda functions.) 

// Understanding function hoisting is key to understanding the differences between function declarations and function expressions. For instance, the result of the following code may be surprising:

//never do this!
if(condition){
	function sayHi(){
    	alert("Hi!");
	}
} else {
	function sayHi(){
   		alert("Yo!");
	}
}

// In fact, this is not valid syntax in ECMAScript, so JavaScript engines try to error correct into an appropriate state. 
// The problem is that browsers don't consistently error correct in this case. 

//this is okay
var sayHi;

if(condition){
   sayHi = function(){
          alert("Hi!");
   };
} else {
   sayHi = function(){
          alert("Yo!");
};
}

// This example behaves the way you would expect, assigning the correct function expression to the variable sayHi based on condition.

// The ability to create functions for assignment to variables also allows you to return functions as the value of other functions.

function createComparisonFunction(propertyName) {
return function(object1, object2){
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];

    if (value1 < value2){
        return -1;
    } else if (value1 > value2){
        return 1;
    } else {
        return 0;
    }
 };
}

// createComparisonFunction() returns an anonymous function. The returned function will, presumably, be either assigned to a variable or otherwise called, but within createComparisonFunction() it is anonymous. 
// Any time a function is being used as a value, it is a function expression. 

