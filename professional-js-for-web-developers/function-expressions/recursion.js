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

