// CLOSURES
// Closures are functions that have access to variables from another function's scope. 
// This is often accomplished by creating a function inside a function, as in the following highlighted lines from the previous createComparisonFunction() 

function createComparisonFunction(propertyName) {
	return function(object1, object2){
	var value1 = object1[propertyName]; //
	var value2 = object2[propertyName]; //

	if (value1 < value2){
		return -1;
	} else if (value1 > value2){
		return 1;
	} else {
		return 0;
	}
	};
}
// The highlighted lines in this example are part of the inner function (an anonymous function) 
// that is accessing a variable (propertyName) from the outer function.

// The details of how scope chains are created and used are important for a good understanding of closures. 

// When a function is called, an execution context is created, and its scope chain is created. 
// The activation object for the function is initialized with values for arguments and any named arguments. 
// The outer function's activation object is the second object in the scope chain. 
// This process continues for all containing functions until the scope chain terminates with the global execution context.

function compare(value1, value2){
  if (value1 < value2){
      return -1;
  } else if (value1 > value2){
      return 1;
  } else {
      return 0;
  }
}

var result = compare(5, 10);

// This code defines a function named compare() that is called in the global execution context. 
// When compare() is called for the first time, a new activation object is created that contains arguments, valuel, and value2. 
// The global execution context's variable object is next in the compare() execution context's scope chain, which contains this, result, and compare.

// In this example, that means the compare() function's execution context has two variable objects in its scope chain: 
// the local activation object and the global variable object. 
// Note that the scope chain is essentially a list of pointers to variable objects and does 
// not physically contain the objects.

// Once the function has completed, the local activation object is destroyed, leaving only the global scope in memory. 
// Closures, however, behave differently.

// A function that is defined inside another function adds the containing function's activation object 
// into its scope chain. 
// So, in createComparisonFunction(), the anonymous function's scope chain actually contains a 
// reference to the activation object for createComparisonFunction().

var compare = createComparisonFunction("name");
var result = compare({ name: "Nicholas" }, { name: "Greg" });

// Another interesting side effect is that the activation object from createComparisonFunction() cannot be destroyed once the function finishes executing, because a reference still exists in the anonymous function's scope chain. 
// After createComparisonFunction() completes, the scope chain for its execution context is destroyed, 
// but its activation object will remain in memory until the anonymous function is destroyed

//create function
var compareNames = createComparisonFunction("name");

//call function
var result = compareNames({ name: "Nicholas" }, { name: "Greg"});

//dereference function - memory can now be reclaimed
compareNames = null;

// Here, the comparison function is created and stored in the variable compareNames. 
// Setting compareNames equal to null dereferences the function and allows the garbage collection routine to clean it up.


// Since closures carry with them the containing function's scope, they take up more memory than other functions. 
// Overuse of closures can lead to excess memory consumption, so it's recommended you use them only when absolutely necessary. 


// Closures and Variables
// The closure always gets the last value of any variable from the containing function. 
// Remember that the closure stores a reference to the entire variable object, not just to a particular variable. 

function createFunctions(){
	var result = new Array();
	for (var i=0; i < 10; i++){
		result[i] = function(){
		return i;
		};
	}
	return result;
}

// every function returns 10. Since each function has the createFunctions() activation object in its scope chain, they are all referring to the same variable, i. 
// When createFunctions() finishes running, the value of i is 10, and since every function 
// references the same variable object in which i exists, the value of i inside each function is 10.

function createFunctions(){
	var result = new Array();

	for (var i=0; i < 10; i++){
		result[i] = function(num){
		return function(){
			return num;
			};
		}(i);
	}
	return result;
}

// With this version of createFunctions(), each function returns a different number. 
// Instead of assigning a closure directly into the array, an anonymous function is defined and called immediately. 
// The anonymous function has one argument, num, which is the number that the result function should return. 
// The variable i is passed in as an argument to the anonymous function. 
// Since function arguments are passed by value, the current value of i is copied into the argument num.




// The this Object

