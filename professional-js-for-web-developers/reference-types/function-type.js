// FUNCTION TYPE
// Some of the most interesting parts of ECMAScript are its functions, primarily because functions actually are objects.

function sum (num1, num2) {
   return num1 + num2;
}
// This is almost exactly equivalent to using a function expression, such as this:

var sum = function(num1, num2){
   return num1 + num2;
};

//  it's possible to have multiple names for a single function, as in this example:

function sum(num1, num2){
   return num1 + num2;
}
alert(sum(10,10));    //20

var anotherSum = sum;
alert(anotherSum(10,10));  //20

sum = null;
alert(anotherSum(10,10));  //20

// When sum is set to null, it severs its relationship with the function, although anotherSum() can still be called without any problems.

// No Overloading (Revisited)
// In this example, it's clear that declaring two functions with the same name always results in the last function overwriting the previous one

var addSomeNumber = function (num){
       return num + 100;
   };

   addSomeNumber = function (num) {
        return num + 200;
   };

   var result = addSomeNumber(100);    //300
// In this rewritten code, it's much easier to see exactly what is going on. The variable addSomeNumber is simply being overwritten when the second function is created.

// Function Declarations versus Function Expressions
// the function declaration and function expression are referred to as being almost equivalent
//  Function declarations are read and available in an execution context before any code is executed, whereas function expressions aren't complete until the execution reaches that line of code.

alert(sum(10,10));
  function sum(num1, num2){
      return num1 + num2;
  }

//  function declarations are read and added to the execution context before the code begins running through a process called function declaration hoisting

alert(sum(10,10));
  var sum = function(num1, num2){
      return num1 + num2;
  };

// This updated code will cause an error, because the function is part of an initialization statement, not part of a function declaration. 
// It is possible to have named function expressions that look like declarations, such as var sum = function sum() {}.


// Functions as Values
// it's possible not only to pass a function into another function as an argument but also to return a function as the result of another function
function callSomeFunction(someFunction, someArgument){
    return someFunction(someArgument);
   }
// This function accepts two arguments. The first argument should be a function, and the second argument should be a value to pass to that function.

function add10(num){
       return num + 10;
   }

   var result1 = callSomeFunction(add10, 10);
   alert(result1);   //20

   function getGreeting(name){
       return "Hello, " + name;
   }

   var result2 = callSomeFunction(getGreeting, "Nicholas");
   alert(result2);   //"Hello, Nicholas"

// The callSomeFunction() function is generic, so it doesn't matter what function is passed in as the first argument—the result will always be returned from the first argument being executed. 

// Returning a function from a function is also possible and can be quite useful. 







