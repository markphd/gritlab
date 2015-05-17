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

