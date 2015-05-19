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
