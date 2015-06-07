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

  var data = [{name: "Zachary", age: 28}, {name: "Nicholas", age: 29}];

     data.sort(createComparisonFunction("name"));
     alert(data[0].name);  //Nicholas

     data.sort(createComparisonFunction("age"));
     alert(data[0].name);  //Zachary

// In this code, an array called data is created with two objects. Each object has a name property and an age property. By default, the sort() method would call toString() on each object to determine the sort order, which wouldn't give logical results in this case.


// Function Internals
// Two special objects exist inside a function: arguments and this. The arguments object, 

function factorial(num){
       if (num <= 1) {
           return 1;
       } else {
           return num * factorial(num-1)
       }
   }
// Factorial functions are typically defined to be recursive, as in this example, which works fine when the name of the function is set and won't be changed. 

function factorial(num){
       if (num <= 1) {
           return 1;
       } else {
           return num * arguments.callee(num-1)
       }
   }

// In this rewritten version of the factorial() function, there is no longer a reference to the name "factorial" in the function body, which ensures that the recursive call will happen on the correct function no matter how the function is referenced

////////////////////////////////////////////////////////////////////////////////////////
// Coupling describes the degree of dependency between one entity to another entity.  //
////////////////////////////////////////////////////////////////////////////////////////

var trueFactorial = factorial;

   factorial = function(){
       return 0;
   };

   alert(trueFactorial(5));   //120
   alert(factorial(5));       //0

   // The factorial variable is then reassigned to a function that simply returns 0. Without using arguments.callee in the original factorial() function's body, the call to trueFactorial() would return 0. 

// this is a reference to the context object that the function is operating on—often called the this value (when a function is called in the global scope of a web page, the this object points to window).

window.color = "red";
var o = { color: "blue" };

function sayColor(){
   alert(this.color);
}

sayColor();     //"red"

o.sayColor = sayColor;
o.sayColor();   //"blue"

// The function sayColor() is defined globally but references the this object. The value of this is not determined until the function is called, so its value may not be consistent throughout the code execution. When sayColor() is called in the global scope, it outputs "red" because this is pointing to window, which means this.color evaluates to window.color.

// Remember that function names are simply variables containing pointers, so the global sayColor () function and o. sayColor () point to the same function even though they execute in different contexts.

function outer(){
      inner();
  }

  function inner(){
      alert(inner.caller);
  }

  outer();

  // This code displays an alert with the source text of the outer() function. Because outer() calls inner(), then inner.caller points back to outer().  

  // For looser coupling, you can also access the same information via arguments.callee.caller
  
  function outer(){
        inner();
    }

    function inner(){
        alert(arguments.callee.caller);
    }

    outer();
// Strict mode places one additional restriction: you cannot assign a value to the caller property of a function. Doing so results in an error.

// Function Properties and Methods
// Each function has two properties: length and prototype. The length property indicates the number of named arguments that the function expects

function sayName(name){
       alert(name);
   }

   function sum(num1, num2){
       return num1 + num2;
   }

   function sayHi(){
       alert("hi");
   }

   alert(sayName.length);  //1
   alert(sum.length);      //2
   alert(sayHi.length);    //0

// Prototype
// The prototype property is perhaps the most interesting part of the ECMAScript core. The prototype is the actual location of all instance methods for reference types, meaning methods such as toString() and valueOf() actually exist on the prototype and are then accessed from the object instances.

// There are two additional methods for functions: apply() and call(). These methods both call the function with a specific this value, effectively setting the value of the this object inside the function body. The apply() method accepts two arguments: the value of this inside the function and an array of arguments. 

function sum(num1, num2){
      return num1 + num2;
  }

  function callSum1(num1, num2){
      return sum.apply(this, arguments);    //passing in arguments object
  }

  function callSum2(num1, num2){
      return sum.apply(this, [num1, num2]); //passing in array
  }

  alert(callSum1(10,10));   //20
  alert(callSum2(10,10));   //20

  // The call() method exhibits the same behavior as apply(), but arguments are passed to it differently. The first argument is the this value, but the remaining arguments are passed directly into the function. 


  function sum(num1, num2){
      return num1 + num2;
  }

  function callSum(num1, num2){
      return sum.call(this, num1, num2);
  }

  alert(callSum(10,10));   //20

// The true power of apply() and call() lies not in their ability to pass arguments but rather in their ability to augment the this value inside of the function. 

window.color = "red";
  var o = { color: "blue" };

  function sayColor(){
      alert(this.color);
  }

  sayColor();            //red

  sayColor.call(this);     //red
  sayColor.call(window);   //red
  sayColor.call(o);        //blue

  // The advantage of using call() (or apply()) to augment the scope is that the object doesn't need to know anything about the method.
  // The bind() method creates a new function instance whose this value is bound to the value that was passed into bind()

  window.color = "red";
     var o = { color: "blue" };

     function sayColor(){
         alert(this.color);
     }
     var objectSayColor = sayColor.bind(o);
     objectSayColor();   //blue

  // The objectSayColor() function has a this value equivalent to o, so calling the function, even as a global call, results in the string "blue" being displayed.
     




