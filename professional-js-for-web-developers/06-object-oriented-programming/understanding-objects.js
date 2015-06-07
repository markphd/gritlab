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


//  once a property has been defined as nonconfigurable, it cannot become configurable again.
var person = {};
   Object.defineProperty(person, "name", {
           configurable: false,
           value: "Nicholas"
   });

   //throws an error
   Object.defineProperty(person, "name", {
          configurable: true,
          value: "Nicholas"
      });

// So although you can call Object.defineProperty() multiple times for the same property, there are limits once configurable has been set to false.


// Accessor Properties
// Accessor properties do not contain a data value. Instead, they contain a combination of a getter function and a setter function (though both are not necessary). 

// Accessor properties have four attributes:
// [[Configurable]]—Indicates if the property may be redefined by removing the property via delete, changing the property's attributes, or changing the property into a data property. By default, this is true for all properties defined directly on an object.
// [[Enumerable]]—Indicates if the property will be returned in a for-in loop. By default, this is true for all properties defined directly on an object.
// [[Get]]—The function to call when the property is read from. The default value is undefined.
// [[Set]]—The function to call when the property is written to. The default value is undefined.
// It is not possible to define an accessor property explicitly; you must use Object.defineProperty()

// It is not possible to define an accessor property explicitly; you must use Object.defineProperty()
var book = {
     _year: 2004,
     edition: 1
};

Object.defineProperty(book, "year", {
   get: function(){
        return this._year;
   },
   set: function(newValue){

       if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
       }
   }
});

book.year = 2005;
alert(book.edition);    //2

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The underscore on _year is a common notation to indicate that a property is not intended to be accessed from outside of the object's methods. //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var book = {
   _year: 2004,
   edition: 1
};

//legacy accessor support
book.__defineGetter__("year", function(){
    return this._year;
});

book.__defineSetter__("year", function(newValue){
    if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
    }
});

book.year = 2005;
alert(book.edition);   //2

// There is no way to modify [[Configurable]] or [[Enumerable]] in browsers that don't support Object.defineProperty().

// Defining Multiple Properties
// the Object.defineProperties() method. This method allows you to define multiple properties using descriptors at once. There are two arguments: the object on which to add or modify the properties and an object whose property names correspond to the properties' names to add or modify.

var book = {};

Object.defineProperties(book, {
      _year: {
             value: 2004
    },

    edition: {
          value: 1
    },

    year: {
          get: function(){
               return this._year;
        },

        set: function(newValue){
             if (newValue > 2004) {
                  this._year = newValue;
                  this.edition += newValue - 2004;
            }
        }
    }
});

// he resulting object is identical to the example in the previous section. The only difference is that all of these properties are created at the same time.

// Reading Property Attributes
// It's also possible to retrieve the property descriptor for a given property by using the ECMAScript 5 Object.getOwnPropertyDescriptor() method. 
// The return value is an object with properties for configurable, enumerable, get, and set for accessor properties or configurable, enumerable, writable, and value for data properties.

var book = {};

Object.defineProperties(book, {
      _year: {
             value: 2004
    },

   edition: {
         value: 1
    },

   year: {
       get: function(){
           return this._year;
    },

       set: function(newValue){
             if (newValue > 2004) {
                  this._year = newValue;

               this.edition += newValue - 2004;
           }
       }
   }
});

var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
alert(descriptor.value);           //2004
alert(descriptor.configurable);   //false
alert(typeof descriptor.get);      //"undefined"

var descriptor = Object.getOwnPropertyDescriptor(book, "year");
alert(descriptor.value);          //undefined
alert(descriptor.enumerable);     //false
alert(typeof descriptor.get);     //"function"
 
// For the data property _year, value is equal to the original value, configurable is false, and get is undefined. For the accessor property year, value is undefined, enumerable is false, and get is a pointer to the specified getter function.
