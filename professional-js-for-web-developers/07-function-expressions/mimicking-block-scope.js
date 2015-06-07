// MIMICKING BLOCK SCOPE
// As mentioned previously, JavaScript has no concept of block-level scoping, meaning variables defined inside of block statements 
// are actually created in the containing function, not within the statement.

function outputNumbers(count){
	for(var i=0; i < count; i++){
		alert(i);
	}
	alert(i);   //count
}

// In this function, a for loop is defined and the variable i is initialized to be equal to 0.
//  the variable i is defined as part of the outputNumbers() activation object, 
// meaning it is accessible inside the function from that point on. 
// Even the following errant redeclaration of the variable won't wipe out its value:

function outputNumbers(count){
	for (var i=0; i < count; i++){
		alert(i);
	}
	var i;  //variable redeclared
	alert(i);   //count
}

// JavaScript will never tell you if you've declared the same variable more than once; it simply ignores all subsequent declarations (though it will honor initializations). Anonymous functions can be used to mimic block scoping and avoid such problems.
// The basic syntax of an anonymous function used as a block scope (often called a private scope) is as follows:

(function(){
    //block code here
})();

// This syntax defines an anonymous function that is called immediately and is also sometimes called an immediately invoked function. 
// What looks like a function declaration is enclosed in parentheses to indicate that it's actually a function expression. 
// This function is then called via the second set of parentheses at the end. 
// If this syntax is confusing, consider the following example:

var count = 5;
outputNumbers(count);

// In this example, a variable count is initialized with the value of 5. 
// Of course, the variable is unnecessary since the value is being passed directly into a function. 
// To make the code more concise, the value 5 can replace the variable count when calling the function as follows:

outputNumbers(5);
// This works the same as the previous example because a variable is just a representation of another value, 
// so the variable can be replaced with the actual value, and the code works fine.

var someFunction = function(){
//block code here
};
someFunction();
// a function is defined and then called immediately. An anonymous function is created and assigned to the variable someFunction. 
// The function is then called by placing parentheses after the function name, becoming someFunction()

function(){
//block code here
}();   //error!

// This code causes a syntax error, because JavaScript sees the function keyword as the beginning of a function declaration, and function declarations cannot be followed by parentheses. 
// Function expressions, however, can be followed by parentheses.

(function(){
//block code here
})();
// These private scopes can be used anywhere variables are needed temporarily

function outputNumbers(count){
	(function () {
		for (var i=0; i < count; i++){
			alert(i);
		}
	})();

	alert(i);   //causes an error
}

//  Any variables defined within the anonymous function are destroyed as soon as it completes execution, 
// so the variable i is used in the loop and then destroyed. 

// This technique is often used in the global scope outside of 
// functions to limit the number of variables and functions added to the global scope.

// Typically you want to avoid adding variables and functions to the global scope, 
// especially in large applications with multiple developers, to avoid naming collisions.

(function(){
	var now = new Date();
	if (now.getMonth() == 0 && now.getDate() == 1){
		alert("Happy new year!");
	}
})();

// This pattern limits the closure memory problem, because there is no reference to the anonymous function. 
// Therefore the scope chain can be destroyed immediately after the function has completed.
