// INHERITANCE
// Interface inheritance is not possible in ECMAScript, because, as mentioned previously, 
// functions do not have signatures. Implementation inheritance is the only type of inheritance supported by ECMAScript, and this is done primarily through the use of prototype chaining.

// Prototype Chaining
// The basic idea is to use the concept of prototypes to inherit properties and methods between two reference types.

// Implementing prototype chaining involves the following code pattern:

function SuperType(){
   this.property = true;
}

SuperType.prototype.getSuperValue = function(){
     return this.property;
};

function SubType(){
   this.subproperty = false;
}

//inherit from SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function (){
   return this.subproperty;
};

var instance = new SubType();
alert(instance.getSuperValue());   //true

// The main difference between the two is that SubType inherits from SuperType by creating a new instance of SuperType and assigning it to SubType.prototype. 
// This overwrites the original prototype and replaces it with a new object, which means that all properties and methods that typically exist on an instance of SuperType now also exist on SubType.prototype. 


// Diagram: http://img.testdomainet.com/ch006fig04_0.jpg


// Note that the getSuperValue() method remains on the SuperType.prototype object, 
// but property ends up on SubType.prototype. That's because getSuperValue() is a prototype method, 
// and property is an instance property. SubType.prototype is now an instance of SuperType, so property is stored there. 
// Also note that instance.constructor points to SuperType, because the constructor property on the SubType.prototype was overwritten.

// 1) the instance, 2) SubType.prototype, and 3) SuperType.prototype, where the method is found. 
// The search for properties and methods always continues until the end of the prototype chain is reached.



// Default Prototypes
// All reference types inherit from Object by default, which is accomplished through prototype chaining. 
// The default prototype for any function is an instance of Object, meaning that its internal prototype pointer points to Object.prototype. 
// SubType inherits from SuperType, and SuperType inherits from Object. When instance.toString() is called, the method being called actually exists on Object.prototype.


// Prototype and Instance Relationships
// The relationship between prototypes and instances is discernible in two ways. 
// The first way is to use the instanceof operator, which returns true whenever an instance is used 
// with a constructor that appears in its prototype chain

alert(instance instanceof Object);       //true
alert(instance instanceof SuperType);    //true
alert(instance instanceof SubType);      //true
// the instance object is technically an instance of Object, SuperType, and SubType because of the prototype chain relationship


// The second way to determine this relationship is to use the isPrototypeOf() method. Each prototype in the chain has access to this method
alert(Object.prototype.isPrototypeOf(instance));    //true
alert(SuperType.prototype.isPrototypeOf(instance)); //true
alert(SubType.prototype.isPrototypeOf(instance));   //true



// Working with Methods
// Often a subtype will need to either override a supertype method or introduce new methods that don't exist on the supertype. 
// To accomplish this, the methods must be added to the prototype after the prototype has been assigned. 

function SuperType(){
   this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
};

function SubType(){
  this.subproperty = false;
}

//inherit from SuperType
SubType.prototype = new SuperType();

//new method
SubType.prototype.getSubValue = function (){
  return this.subproperty;
};

//override existing method
SubType.prototype.getSuperValue = function (){
  return false;
};

var instance = new SubType();
alert(instance.getSuperValue());   //false

// When getSuperValue() is called on an instance of SubType, it will call this one, but instances of SuperType will still call the original. The important thing 
// to note is that both of the methods are defined after the prototype has been assigned as an instance of SuperType.

// Another important thing to understand is that the object literal approach to creating prototype methods cannot be used with prototype chaining, because you end up overwriting the chain.

function SuperType(){
  this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
};

function SubType(){
  this.subproperty = false;
}

//inherit from SuperType
SubType.prototype = new SuperType();

//try to add new methods - this nullifies the previous line
SubType.prototype = {
  getSubValue : function (){
      return this.subproperty;
  },

  someOtherMethod : function (){
      return false;
  }
};

var instance = new SubType();
alert(instance.getSuperValue());   //error!
// the prototype is reassigned to be an object literal after it was already assigned to be an instance of SuperType. 
// The prototype now contains a new instance of Object instead of an instance of SuperType, 
// so the prototype chain has been broken—there is no relationship between SubType and SuperType.


// Problems with Prototype Chaining
// Recall from earlier that prototype properties containing reference values are shared with all instances; 
// this is why properties are typically defined within the constructor instead of on the prototype. 
// When implementing inheritance using prototypes, the prototype actually becomes an instance of another type, 
// meaning that what once were instance properties are now prototype properties.

function SuperType(){
  this.colors = ["red", "blue", "green"];
}

function SubType(){
}

//inherit from SuperType
SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);     //"red,blue,green,black"

var instance2 = new SubType();
alert(instance2.colors);     //"red,blue,green,black"

// When SubType inherits from SuperType via prototype chaining, SubType.prototype becomes an instance of SuperType 
// and so it gets its own colors property, which is akin to specifically creating SubType.prototype.colors. 
// The end result: all instances of SubType share a colors property. 
// This is indicated as the changes made to instancel.colors are reflected on instance2.colors.



// Constructor Stealing
// In an attempt to solve the inheritance problem with reference values on prototypes, 
// developers began using a technique called constructor stealing (also sometimes called object masquerading or classical inheritance).
// Keeping in mind that functions are simply objects that execute code in a particular context, the apply() and call() methods can be used to execute a constructor on the newly created object

function SuperType(){
  this.colors = ["red", "blue", "green"];
}

function SubType(){
   //inherit from SuperType
   SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);    //"red,blue,green,black"

var instance2 = new SubType();
alert(instance2.colors);    //"red,blue,green"

// By using the call() method (or alternately, apply()), the SuperType constructor is called in the context of the newly created instance of SubType. Doing this effectively runs all of the object-initialization code in the SuperType() function on the new SubType object. The result is that each instance has its own copy of the colors property.


// Passing Arguments
// One advantage that constructor stealing offers over prototype chaining is the ability to pass arguments into the supertype constructor from within the subtype constructor.

function SuperType(name){
  this.name = name;
}

function SubType(){
  //inherit from SuperType passing in an argument
  SuperType.call(this, "Nicholas");

  //instance property
  this.age = 29;
}

var instance = new SubType();
alert(instance.name);    //"Nicholas";
alert(instance.age);     //29

// A value can be passed into the SuperType constructor when called from within the SubType constructor, effectively setting the name property for the SubType instance. 

// To ensure that the SuperType constructor doesn't overwrite those properties, you can define additional properties on the subtype after the call to the supertype constructor.

// Problems with Constructor Stealing
// The downside to using constructor stealing exclusively is that it introduces the same problems as the constructor pattern for custom types: methods must be defined inside the constructor, so there's no function reuse. 


// Combination Inheritance
// Combination inheritance (sometimes also called pseudoclassical inheritance) combines prototype chaining and constructor stealing to get the best of each approach.

function SuperType(name){
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function(){
 alert(this.name);
};


function SubType(name, age){

//inherit properties
SuperType.call(this, name);

this.age = age;
}

//inherit methods
SubType.prototype = new SuperType();

SubType.prototype.sayAge = function(){
alert(this.age);
};

var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors);  //"red,blue,green,black"
instance1.sayName();      //"Nicholas";
instance1.sayAge();       //29

var instance2 = new SubType("Greg", 27);
alert(instance2.colors);  //"red,blue,green"
instance2.sayName();      //"Greg";
instance2.sayAge();       //27

// In this example, the SuperType constructor defines two properties, name and colors, and the SuperType prototype has a single method called sayName(). The SubType constructor calls the SuperType constructor, passing in the name argument, and defines its own property called age. Additionally, the SubType prototype is assigned to be an instance of SuperType, and then a new method called sayAge() is defined. With this code, it's then possible to create two separate instances of SubType that have their own properties, including the colors property, but all use the same methods.

// combination inheritance is the most frequently used inheritance pattern in JavaScript. It also preserves the behavior of instanceof and isPrototypeOf() for identifying the composition of objects.


// Prototypal Inheritance
// ..prototypes allow you to create new objects based on existing objects without the need for defining custom types. 

function object(o){
  function F(){}
  F.prototype = o;
  return new F();
}

// The object() function creates a temporary constructor, assigns a given object as the constructor's prototype, and returns a new instance of the temporary type. Essentially, object() performs a shadow copy of any object that is passed into it. 

var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

alert(person.friends);   //"Shelby,Court,Van,Rob,Barbie"

// The new object has person as its prototype, meaning that it has both a primitive value property and a reference value property on its prototype. This also means that person.friends is shared not only by person but also with anotherPerson and yetAnotherPerson. Effectively, this code has created two clones of person.

// ECMAScript 5 formalized the concept of prototypal inheritance by adding the Object.create() method. This method accepts two arguments, an object to use as the prototype for a new object and an optional object defining additional properties to apply to the new object. When used with one argument, Object.create() behaves the same as the object() method

var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

alert(person.friends);   //"Shelby,Court,Van,Rob,Barbie"

// The second argument for Object.create() is in the same format as the second argument for Object.defineProperties(): each additional property to define is specified along with its descriptor.

var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = Object.create(person, {
  name: {
    value: "Greg"
  }
});

alert(anotherPerson.name);  //"Greg"

// Prototypal inheritance is useful when there is no need for the overhead of creating separate constructors, but you still need an object to behave similarly to another. Keep in mind that properties containing reference values will always share those values, similar to using the prototype pattern.




// Parasitic Inheritance
// Closely related to prototypal inheritance is the concept of parasitic inheritance, another pattern popularized by Crockford. The idea behind parasitic inheritance is similar to that of the parasitic constructor and factory patterns: create a function that does the inheritance, augments the object in some way, and then returns the object as if it did all the work. 

function createAnother(original){
  var clone = object(original);     //create a new object by calling a function
  clone.sayHi = function(){         //augment the object in some way
    alert("hi");
  };
  return clone;                     //return the object
}

// In this code, the createAnother() function accepts a single argument, which is the object to base a new object on. This object, original, is passed into the object() function, and the result is assigned to clone. Next, the clone object is changed to have a new method called sayHi(). The last step is to return the object.

var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = createAnother(person);
anotherPerson.sayHi();  //"hi"

// Keep in mind that adding functions to objects using parasitic inheritance leads to inefficiencies related to function reuse, similar to the constructor pattern.


// Parasitic Combination Inheritance
// The most inefficient part of the pattern is that the supertype constructor is always called twice: once to create the subtype's prototype, and once inside the subtype constructor.

function SuperType(name){
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function(){
   alert(this.name);
};

function SubType(name, age){
  SuperType.call(this, name);     //second call to SuperType()
  this.age = age;
}

SubType.prototype = new SuperType();  //first call to SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
  alert(this.age);
};

// The highlighted lines of code indicate when SuperType constructor is executed. When this code is executed, SubType.prototype ends up with two properties: name and colors. These are instance properties for SuperType, but they are now on the SubType's prototype. When the SubType constructor is called, the SuperType constructor is also called, which creates instance properties name and colors on the new object that mask the properties on the prototype.

// As you can see, there are two sets of name and colors properties: one on the instance and one on the SubType prototype. This is the result of calling the SuperType constructor twice.

// Parasitic combination inheritance uses constructor stealing to inherit properties but uses a hybrid form of prototype chaining to inherit methods. The basic idea is this: instead of calling the supertype constructor to assign the subtype's prototype, all you need is a copy of the supertype's prototype. Essentially, use parasitic inheritance to inherit from the supertype's prototype and then assign the result to the subtype's prototype.

function inheritPrototype(subType, superType){
  var prototype = object(superType.prototype);    //create object
  prototype.constructor = subType;                //augment object
  subType.prototype = prototype;                  //assign object
}

// The inheritPrototype() function implements very basic parasitic combination inheritance. This function accepts two arguments: the subtype constructor and the supertype constructor. Inside the function, the first step is to create a clone of the supertype's prototype. Next, the constructor property is assigned onto prototype to account for losing the default constructor property when the prototype is overwritten. Finally, the subtype's prototype is assigned to the newly created object. A call to inheritPrototype() can replace the subtype prototype assignment in the previous example, as shown here:

function SuperType(name){
this.name = name;
this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function(){
   alert(this.name);
};

function SubType(name, age){
   SuperType.call(this, name);

   this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function(){
   alert(this.age);
};

// This example is more efficient in that the SuperType constructor is being called only one time, avoiding having unnecessary and unused properties on SubType.prototype. Furthermore, the prototype chain is kept intact, so both instanceof and isPrototypeOf() behave as they would normally. Parasitic combination inheritance is considered the most optimal inheritance paradigm for reference types.