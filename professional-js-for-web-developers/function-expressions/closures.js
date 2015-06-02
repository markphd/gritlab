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
// Using the this object inside closures introduces some complex behaviors. 
// The this object is bound at runtime based on the context in which a function is executed: 
// when used inside global functions, this is equal to window in nonstrict mode 
// and undefined in strict mode, whereas this is equal to the object when called as an object method. 

var name = "The Window";

var object = {
  name : "My Object",
  getNameFunc : function(){
       return function(){
           return this.name;
      };
  }
};

alert(object.getNameFunc()());  //"The Window" (in non-strict mode)

// Since getNameFunc() returns a function, calling object.getNameFunc()() immediately calls the function that is returned, which returns a string. 
// In this case, however, it returns "The Window", which is the value of the global name variable

// An inner function can never access these variables directly from an outer function. 
// It is possible to allow a closure access to a different this object by storing it in another variable that the closure can access

var name = "The Window";

var object = {
	name : "My Object",
	getNameFunc : function(){
		var that = this;
    return function(){
			return that.name;
    };
	}
};
alert(object.getNameFunc()());  //"My Object"

// When the closure is defined, it has access to that, since it is a uniquely named variable in the containing function. 
// Even after the function is returned, that is still bound to object, so calling object.getNameFunc()() returns "My Object".
	
// Both this and arguments behave in this way. 
// If you want access to a containing scope's arguments object, you'll need to save a reference 
// into another variable that the closure can access.

var name = "The Window";

var object = {
	name : "My Object",
	getName: function(){
		return this.name;
	}
};

// The getName() method simply returns the value of this.name. Here are various ways to call object.getName() and the results:
object.getName();      //"My Object"
(object.getName)();    //"My Object"
(object.getName = object.getName)();   //"The Window" in non-strict mode

// It's unlikely that you'll intentionally use the patterns in lines two or three, 
// but it is helpful to know that the value of this can change in unexpected ways when syntax is changed slightly.

// Memory Leaks
// The way closures work causes particular problems in Internet Explorer prior to version 9 because of the different garbage-collection routines used for JScript objects versus COM objects

function assignHandler(){
	var element = document.getElementById("someElement");
	element.onclick = function(){
		alert(element.id);
	};
}

// This code creates a closure as an event handler on element, which in turn creates a circular reference (events are discussed in Chapter 13). The anonymous function keeps a reference to the assignHandler() function's activation object, which prevents the reference count for element from being decremented. 
// As long as the anonymous function exists, the reference count for element will be at least 1, which means the memory will never be reclaimed.

function assignHandler(){
	var element = document.getElementById("someElement"); 
	var id = element.id;
	element.onclick = function(){
		alert(id);
	};
	element = null;
}

// In this version of the code, a copy of element's ID is stored in a variable that is used in the closure, eliminating the circular reference. That step alone is not enough, however, to prevent the memory problem. 
// Remember: the closure has a reference to the containing function's entire activation object, which contains element. 

// Even if the closure doesn't reference element directly, a reference is still stored in the containing function's activation object. It is necessary, therefore, to set the element variable equal to null. 
// This dereferences the COM object and decrements its reference count, ensuring that the memory can be reclaimed when appropriate.
