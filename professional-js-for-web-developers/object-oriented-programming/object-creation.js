// OBJECT CREATION
// creating multiple objects with the same interface requires a lot of code duplication. To solve this problem, developers began using a variation of the factory pattern.

// The Factory Pattern
// The factory pattern is a well-known design pattern used in software engineering to abstract away the process of creating specific objects.
function createPerson(name, age, job){
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function(){
      alert(this.name);
  };
  return o;
  }

  var person1 = createPerson("Nicholas", 29, "Software Engineer");
  var person2 = createPerson("Greg", 27, "Doctor");

// this solved the problem of creating multiple similar objects, the factory pattern didn't address the issue of object identification (what type of object an object is)


// The Constructor Pattern
// There are native constructors, such as Object and Array, which are available automatically in the execution environment at runtime. 
// It is also possible to define custom constructors that define properties and methods for your own type of object

function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function(){
     alert(this.name);
  };
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

// the Person() function takes the place of the factory createPerson() function. 
// Note that the code inside Person() is the same as the code inside createPerson(), with the following exceptions:
// There is no object being created explicitly.
// The properties and method are assigned directly onto the this object.
// There is no return statement.

// By convention, constructor functions always begin with an uppercase letter

alert(person1.constructor == Person);  //true
alert(person2.constructor == Person);  //true
// The constructor property was originally intended for use in identifying the object type. 
// However, the instanceof operator is considered to be a safer way of determining type.

alert(person1 instanceof Object);  //true
alert(person1 instanceof Person);  //true
alert(person2 instanceof Object);  //true
alert(person2 instanceof Person);  //true

// Constructors as Functions
// The only difference between constructor functions and other functions is the way in which they are called. 
// Constructors are, after all, just functions; there's no special syntax to define a constructor that 
// automatically makes it behave as such. Any function that is called with the new operator acts as a constructor, 
// whereas any function called without it acts just as you would expect a normal function call to act.

//use as a constructor
var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName();   //"Nicholas"

//call as a function
Person("Greg", 27, "Doctor");  //adds to window
window.sayName();   //"Greg"

//call in the scope of another object
var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName();    //"Kristen"

// Remember that the this object always points to the Global object (window in web browsers) 
// The Person() function can also be called within the scope of a particular object using call() (or apply()). 
// In this case, it's called with a this value of the object o, which then gets assigned all of the properties and the sayName() method.

// Problems with Constructors
// Though the constructor paradigm is useful, it is not without its faults. 
// The major downside to constructors is that methods are created once for each instance. 
// So, in the previous example, both person1 and person2 have a method called sayName(), 
// but those methods are not the same instance of Function. 
// Remember, functions are objects in ECMAScript, so every time a function is defined, it's actually an object being instantiated. 

function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = new Function("alert(this.name)");  //logical equivalent
}

// So, functions of the same name on different instances are not equivalent, as the following code proves:
alert(person1.sayName == person2.sayName); //false

// It doesn't make sense to have two instances of Function that do the same thing, 
// especially when the this object makes it possible to avoid binding functions to particular objects until runtime.

// Workaround
function Person(name, age, job){
   this.name = name;
   this.age = age;
   this.job = job;
   this.sayName = sayName;
}

function sayName(){
alert(this.name);
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

// Since the sayName property now contains just a pointer to a function, both person1 and person2 
// end up sharing the sayName() function that is defined in the global scope.

// This solves the problem of having duplicate functions that do the same thing but also creates some clutter 
// in the global scope by introducing a function that can realistically be used only in relation to an object. 
// If the object needed multiple methods, that would mean multiple global functions, and all of a sudden the 
// custom reference type definition is no longer nicely grouped in the code.


// The Prototype Pattern
// Each function is created with a prototype property, which is an object containing properties and methods 
// that should be available to instances of a particular reference type.

// The benefit of using the prototype is that all of its properties and methods are shared among object instances. 
// Instead of assigning object information in the constructor, they can be assigned directly to the prototype, as in this example:

function Person(){
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    alert(this.name);
};

var person1 = new Person();
person1.sayName();   //"Nicholas"

var person2 = new Person();
person2.sayName();   //"Nicholas"

alert(person1.sayName == person2.sayName);  //true

// How Prototypes Work
// Whenever a function is created, its prototype property is also created according to a specific set of rules. 
// By default, all prototypes automatically get a property called constructor that points back to the function on which it is a property.

// The important thing to understand is that a direct link exists between the instance and the constructor's prototype but not between the instance and the constructor.
// The prototype contains the constructor property and the other properties that were added. 
// Each instance of Person, person1, and person2 has internal properties that point back to Person.prototype only; 
// each has no direct relationship with the constructor.

// Even though [[Prototype]] is not accessible in all implementations, the isPrototypeOf() method can be used to determine if this relationship exists between objects. Essentially, isPrototypeOf() returns true if [[Prototype]] points to the prototype on which the method is being called, as shown here:

alert(Person.prototype.isPrototypeOf(person1));  //true
alert(Person.prototype.isPrototypeOf(person2));  //true

// ECMAScript 5 adds a new method called Object.getPrototypeOf(), which returns the value of [[Prototype]] in all supporting implementations. For example:

alert(Object.getPrototypeOf(person1) == Person.prototype);  //true
alert(Object.getPrototypeOf(person1).name);  //"Nicholas

// you are able to retrieve an object's prototype easily, which becomes important once you want to implement inheritance using the prototype

// The constructor property mentioned earlier exists only on the prototype and so is accessible from object instances.

// If you add a property to an instance that has the same name as a property on the prototype, you create the property on the instance, which then masks the property on the prototype
function Person(){
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
          alert(this.name);
};

var person1 = new Person();
var person2 = new Person();

person1.name = "Greg";
alert(person1.name);   //"Greg" - from instance
alert(person2.name);   //"Nicholas" - from prototype

// In this example, the name property of person1 is shadowed by a new value. Both personi.name and person2.name still function appropriately, returning "Greg" (from the object instance) and "Nicholas" (from the prototype), respectively. When person1.name was accessed in the alert(), its value was read, so the search began for a property called name on the instance. Since the property exists, it is used without searching the prototype.

// Even setting the property to null only sets the property on the instance and doesn't restore the link to the prototype. The delete operator, however, completely removes the instance property and allows the prototype property to be accessed again

function Person(){
}



Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
   alert(this.name);
};

var person1 = new Person();
var person2 = new Person();

person1.name = "Greg";
alert(person1.name);   //"Greg" - from instance
alert(person2.name);   //"Nicholas" - from prototype

delete person1.name;
alert(person1.name);   //"Nicholas" - from the prototype

// The hasOwnProperty() method determines if a property exists on the instance or on the prototype.

function Person(){
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
 alert(this.name);
};

var person1 = new Person();
var person2 = new Person();

alert(person1.hasOwnProperty("name"));  //false

person1.name = "Greg";
alert(person1.name);   //"Greg" - from instance
alert(person1.hasOwnProperty("name"));  //true


alert(person2.name);   //"Nicholas" - from prototype
alert(person2.hasOwnProperty("name"));  //false

delete person1.name;
alert(person1.name);   //"Nicholas" - from the prototype
alert(person1.hasOwnProperty("name"));  //false

// Prototypes and the in Operator
// There are two ways to use the in operator: on its own or as a for-in loop. When used on its own, the in operator returns true when a property of the given name is accessible by the object, which is to say that the property may exist on the instance or on the prototype.
function Person(){
    }

    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayName = function(){
           alert(this.name);
    };

    var person1 = new Person();
    var person2 = new Person();

    alert(person1.hasOwnProperty("name"));  //false
    alert("name" in person1);  //true

    person1.name = "Greg";
    alert(person1.name);   //"Greg" - from instance
    alert(person1.hasOwnProperty("name"));  //true
    alert("name" in person1);  //true

    alert(person2.name);   //"Nicholas" - from prototype
    alert(person2.hasOwnProperty("name"));  //false
    alert("name" in person2);  //true

    delete person1.name;
    alert(person1.name);   //"Nicholas" - from the prototype
    alert(person1.hasOwnProperty("name"));  //false
    alert("name" in person1);  //true

// Throughout the execution of this code, the property name is available on each object either directly or from the prototype. Therefore, calling "name" in person1 always returns true, regardless of whether the property exists on the instance.

function hasPrototypeProperty(object, name){
    return !object.hasOwnProperty(name) && (name in object);
}

// Since the in operator always returns true so long as the property is accessible by the object, 
// and hasOwnProperty() returns true only if the property exists on the instance, 
// a prototype property can be determined if the in operator returns true but hasOwnProperty() returns false. 

function Person(){
 }

 Person.prototype.name = "Nicholas";
 Person.prototype.age = 29;
 Person.prototype.job = "Software Engineer";
 Person.prototype.sayName = function(){
        alert(this.name);
 };

 var person = new Person();
 alert(hasPrototypeProperty(person, "name"));  //true

 person.name = "Greg";
 alert(hasPrototypeProperty(person, "name"));  //false

 // In this code, the name property first exists on the prototype, so hasPrototypeProperty() returns true. 
 // Once the name property is overwritten, it exists on the instance, so hasPrototypeProperty() returns false.


// When using a for-in loop, all properties that are accessible by the object and can be enumerated will be returned, 
// which includes properties both on the instance and on the prototype.

// The old Internet Explorer implementation has a bug where properties that shadow non-enumerable properties will not show up in a for-in loop

var o = {
   toString : function(){
          return "My Object";
   }
};

for (var prop in o){
     if (prop == "toString"){
         alert("Found toString");   //won't display in Internet Explorer
   }
}

// ECMAScript 5 sets [[Enumerable]] to false on the constructor and prototype properties, but this is inconsistent across implementations.
// To retrieve a list of all enumerable instance properties on an object, you can use the ECMAScript 5 Object.keys() method, which accepts an object as its argument and returns an array of strings containing the names of all enumerable properties.

function Person(){
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
       alert(this.name);
};

var keys = Object.keys(Person.prototype);
alert(keys);       //"name,age,job,sayName"

var p1 = new Person();
p1.name = "Rob";
p1.age = 31;
var p1keys = Object.keys(p1);
alert(p1keys);    //"name,age"
// Here, the keys variable is filled with an array containing "name", "age", "job", and "sayName". This is the order in which they would normally appear using for-in. 


// If you'd like a list of all instance properties, whether enumerable or not, you can use Object.getOwnPropertyNames() in the same way:
var keys = Object.getOwnPropertyNames(Person.prototype);
alert(keys);   //"constructor,name,age,job,sayName"

// Note the inclusion of the non-enumerable constructor property in the list of results. Both Object.keys() and Object.getOwnPropertyNames() may be suitable replacements for using for-in. 

// Alternate Prototype Syntax
// You may have noticed in the previous example that Person.prototype had to be typed out for each property and method. 
// To limit this redundancy and to better visually encapsulate functionality on the prototype, it has become more common to simply overwrite the prototype with an object literal that contains all of the properties and methods, as in this example:
function Person(){
}

Person.prototype = {
  name : "Nicholas",
  age : 29,
  job : "Software Engineer",
  sayName : function () {
      alert(this.name);
  }
};

// In this rewritten example, the Person.prototype property is set equal to a new object created 
// with an object literal. The end result is the same, with one exception: 
// the constructor property no longer points to Person. 
// When a function is created, its prototype object is created and the constructor is automatically assigned. Essentially, this syntax overwrites the default prototype object completely, meaning that the constructor property is equal to that of a completely new object (the Object constructor) instead of the function itself. 

var friend = new Person();
alert(friend instanceof Object);      //true
alert(friend instanceof Person);      //true
alert(friend.constructor == Person);  //false
alert(friend.constructor == Object);  //true

// Here, instanceof still returns true for both Object and Person, but the constructor property is now equal to Object instead of Person. 
// If the constructor's value is important, you can set it specifically back to the appropriate value, as shown here:

function Person(){
}

Person.prototype = {
  constructor: Person,
  name : "Nicholas",
  age : 29,
  job : "Software Engineer",
  sayName : function () {
          alert(this.name);
  }
};

// This code specifically includes a constructor property and sets it equal to Person, ensuring that the property contains the appropriate value.
// Keep in mind that restoring the constructor in this manner creates a property with [[Enumerable]] set to true. 
// Native constructor properties are not enumerable by default, so if you're using an ECMAScript 5-compliant JavaScript engine, you may wish to use Object.defineProperty() instead:

function Person(){
}

Person.prototype = {
  name : "Nicholas",
  age : 29,
  job : "Software Engineer",
  sayName : function () {
          alert(this.name);
  }
};

//ECMAScript 5 only - restore the constructor
Object.defineProperty(Person.prototype, "constructor", {
  enumerable: false,
  value: Person
});


// Dynamic Nature of Prototypes














