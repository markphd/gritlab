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

