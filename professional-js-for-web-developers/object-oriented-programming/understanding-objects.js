// UNDERSTANDING OBJECTS
//  the simplest way to create a custom object is to create a new instance of Object and add properties and methods to it

// Creating new instance of Object
var person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";

person.sayName = function(){
      alert(this.name);
};

// Object literals
var person = {
	name: "Nicholas",
	age: 29,
	job: "Software Engineer",

	sayName: function(){
	alert(this.name);
	}
};

// Types of Properties
// There are two types of properties: data properties and accessor properties.

// Data Properties
// Data properties contain a single location for a data value. Values are read from and written to this location. Data properties have four attributes describing their behavior:
