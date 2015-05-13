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

// [[Configurable]]—Indicates if the property may be redefined by removing the property via delete, changing the property's attributes, or changing the property into an accessor property. By default, this is true for all properties defined directly on an object, as in the previous example.
// [[Enumerable]]—Indicates if the property will be returned in a for-in loop. By default, this is true for all properties defined directly on an object, as in the previous example.
// [[Writable]]—Indicates if the property's value can be changed. By default, this is true for all properties defined directly on an object, as in the previous example.
// [[Value]]—Contains the actual data value for the property. This is the location from which the property's value is read and the location to which new values are saved. The default value for this attribute is undefined.

// When a property is explicitly added to an object as in the previous examples, [[Configurable]], [[Enumerable]], and [[Writable]] are all set to true while the [[Value]] attribute is set to the assigned value. For example:
var person = {
	name: "Nicholas"
};
// Here, the property called name is created and a value of "Nicholas" is assigned. That means [[Value]] is set to "Nicholas", and any changes to that value are stored in this location.



