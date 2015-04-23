// VARIABLES
// ECMAScript variables are loosely typed
var message;
var message = 'hello';

function test(){
	var message = "hi";  //local variable
}

test();
alert(message); //error!

// using the var operator to define a variable makes it local to the scope in which it was defined. 

function test(){
       message = "hi";  //global variable
   }
   test();
   alert(message); //"hi"

//By removing the var operator from the example, the message variable becomes global.

var message = "hi",
    found = false,
    age = 29;

//defining three variables in one go.

// Note: When you are running in strict mode, you cannot define variables named eval or arguments. 
// Doing so results in a syntax error.
