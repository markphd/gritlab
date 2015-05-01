/////////////////
// OBJECT TYPE //
/////////////////

// A reference value (object) is an instance of a specific reference type
// Reference types are also sometimes called object definitions, because they describe the properties and methods that objects should have.

// A constructor is simply a function whose purpose is to create a new object.
var person = new Object();
person.name = "Nicholas";
person.age = 29;

// Object literal
var person = {
  name : "Nicholas",
  age : 29
};
// An expression context in ECMAScript is a context in which a value (expression) is expected. 

// It's also possible to create an object with only the default properties and methods using object literal notation by leaving the space between the curly braces empty, such as this:

var person = {};                    //same as new Object()
person.name = "Nicholas";
person.age = 29;

// It's recommended to use object literal notation only when you're going to specify properties for readability.

function displayInfo (args) {
	var output = "";

	if (typeof args.name == "string") {
		output += "Name: " + args.name + "\n";
	};

	if (typeof args.age == "number") {
		output += "Age: " + args.age + "\n";
	};

	alert(output);
}

displayInfo({
	name: "Nicholas",
	age: 29
});

displayInfo({
	name: "Greg"
});

// Although object properties are typically accessed using dot notation, which is common to many object-oriented languages, it's also possible to access properties via bracket notation. 
alert(person["name"]); //"Nicholas"

// The main advantage of bracket notation is that it allows you to use variables for property access, such as in this example:
var propertyName = "name";
alert(person[propertyName]);    //"Nicholas"

person["first name"] = "Nicholas"
// Since the name "first name" contains a space, you can't use dot notation to access it. However, property names can contain nonalphanumeric characters, you just need to use bracket notation to access them.
