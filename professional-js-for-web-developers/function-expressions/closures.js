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


