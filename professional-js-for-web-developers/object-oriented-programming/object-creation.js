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

