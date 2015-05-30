// RECURSION
// A recursive function typically is formed when a function calls itself by name

function factorial(num){
	if (num <= 1){
    return 1;
	} else {
    return num * factorial(num-1);
	}
}
// This is the classic recursive factorial function. 
// Although this works initially, it's possible to prevent it from functioning by running the following code 

var anotherFactorial = factorial;
factorial = null;
alert(anotherFactorial(4));  //error!

// Here, the factorial() function is stored in a variable called anotherFactorial. 
// The factorial variable is then set to null, so only one reference to the original function remains. 
// When anotherFactorial() is called, it will cause an error, because it will try to execute factorial(), which is no longer a function. 
// Using arguments.callee can alleviate this problem.


// Recall that arguments.callee is a pointer to the function being executed and, as such, 
// can be used to call the function recursively, as shown here:
function factorial(num){
  if (num <= 1){
      return 1;
  } else {
      return num * arguments.callee(num-1);
  }
}

// Changing the highlighted line to use arguments.callee instead of the function name ensures that this function will work regardless of how it is accessed. 
// It's advisable to always use arguments.callee of the function name whenever you're writing recursive functions.

// The value of arguments.callee is not accessible to a script running in strict mode and will cause an error when attempts are made to read it. 
// Instead, you can use named function expressions to achieve the same result. 

var factorial = (function f(num){
  if (num <= 1){
      return 1;
  } else {
      return num * f(num-1);
  }
});

// In this code, a named function expression f() is created and assigned to the variable factorial. 
// The name f remains the same even if the function is assigned to another variable, so the recursive call will always execute correctly.
