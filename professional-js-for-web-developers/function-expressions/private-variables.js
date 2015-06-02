// PRIVATE VARIABLES
// Strictly speaking, JavaScript has no concept of private members; all object properties are public. 
// There is, however, a concept of private variables. 
// Any variable defined inside a function is considered private since it is inaccessible outside that function. 

function add(num1, num2){
	var sum = num1 + num2;
	return sum;
}
// In this function, there are three private variables: num1, num2, and sum. 
// These variables are accessible inside the function but can't be accessed outside it. 
// If a closure were to be created inside this function, it would have access to these variables through its scope chain. 
// Using this knowledge, you can create public methods that have access to private variables.

// A privileged method is a public method that has access to private variables and/or private functions

function MyObject(){
	//private variables and functions
	var privateVariable = 10;
	function privateFunction(){
		return false;
	}
	//privileged methods
	this.publicMethod = function (){
		privateVariable++;
		return privateFunction();
	};
}

// In this example, the variable privateVariable and the function privateFunction() are accessed only by publicMethod(). 
// Once an instance of MyObject is created, there is no way to access privateVariable and privateFunction() directly; 
// you can do so only by way of publicMethod().


function Person(name){
	this.getName = function(){
		return name;
	};

	this.setName = function (value) {
		name = value;
	};
}

var person = new Person("Nicholas");
alert(person.getName());   //"Nicholas"
person.setName("Greg");
alert(person.getName());   //"Greg"

// The constructor in this code defines two privileged methods: getName() and setName(). 
// Each method is accessible outside the constructor and accesses the private name variable. 
// Outside the Person constructor, there is no way to access name. 
// Since both methods are defined inside the constructor, they are closures and have access to name through the scope chain. 
// The private variable name is unique to each instance of Person since the methods are being re-created 
// each time the constructor is called. 

// One downside, however, is that you must use the constructor pattern to accomplish this result. 
// As discussed in Chapter 6, the constructor pattern is flawed in that new methods are created for each instance. 
// Using static private variables to achieve privileged methods avoids this problem.



// Static Private Variables




