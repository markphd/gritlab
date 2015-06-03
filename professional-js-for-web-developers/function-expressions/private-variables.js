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
// Privileged methods can also be created by using a private scope to define the private variables or functions. 

(function(){

	//private variables and functions
	var privateVariable = 10;

	function privateFunction(){
		return false;
	}

	//constructor
	MyObject = function(){
	};

	//public and privileged methods
	MyObject.prototype.publicMethod = function(){
		privateVariable++;
		return privateFunction();
	};

})();

// Public methods are defined on the prototype, as in the typical prototype pattern. 
// Note that this pattern defines the constructor not by using a function declaration but instead by using a function expression. Function declarations always create local functions, which is undesirable in this case. For this same reason, the var keyword is not used with MyObject. 
// Remember: initializing an undeclared variable always creates a global variable, so MyObject becomes global and available outside the private scope.


// private variables and functions are shared among instances. Since the privileged method is defined on the prototype, all instances use that same function. 
// The privileged method, being a closure, always holds a reference to the containing scope. 

(function(){
	var name = "";

	Person = function(value){
		name = value;
	};

	Person.prototype.getName = function(){
		return name;
	};

	Person.prototype.setName = function (value){
		name = value;
	};
})();

var person1 = new Person("Nicholas");
alert(person1.getName());   //"Nicholas"
person1.setName("Greg");
alert(person1.getName());   //"Greg"

var person2 = new Person("Michael");
alert(person1.getName());    //"Michael"
alert(person2.getName());    //"Michael"

// Creating static private variables in this way allows for better code reuse through prototypes, although each instance doesn't have its own private variable. Ultimately, the decision to use instance or static private variables needs to be based on your individual requirements.

// Note 	
// The farther up the scope chain a variable lookup is, the slower the lookup becomes because of the use of closures and private variables.


// The Module Pattern
// Singletons are objects of which there will only ever be one instance. Traditionally, singletons are created in JavaScript using object literal notation

var singleton = {
	name : value,
	method : function () {
		//method code here
	}
};

The module pattern augments the basic singleton to allow for private variables and privileged methods, taking the following format:

var singleton = function(){

	//private variables and functions
	var privateVariable = 10;

	function privateFunction(){
	return false;
	}

	//privileged/public methods and properties
	return {

		publicProperty: true,

		publicMethod : function(){
			privateVariable++;
		return privateFunction();
		}
	};
}();

// The module pattern uses an anonymous function that returns an object. 
// Inside of the anonymous function, the private variables and functions are defined first. After that, an object literal is returned as the function value. 
// That object literal contains only properties and methods that should be public

var application = function(){

	//private variables and functions
	var components = new Array();

	//initialization
	components.push(new BaseComponent());

	//public interface
	return {
		getComponentCount : function(){
			return components.length;
		},

		registerComponent : function(component){
			if (typeof component == "object"){
				components.push(component);
				}
			}
	};
}();

// In web applications, it's quite common to have a singleton that manages application-level information. 
// This simple example creates an application object that manages components. 
// When the object is first created, the private components array is created and a new instance of BaseComponent is added to its list. (The code for BaseComponent is not important; it is used only to show initialization in the example.) The getComponentCount() and registerComponent() methods are privileged methods with access to the components array. 

// The Module-Augmentation Pattern
