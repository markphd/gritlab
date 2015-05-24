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
// Since the process of looking up values on a prototype is a search, changes made to the prototype at any point are immediately reflected on instances,

var friend= new Person();

Person.prototype.sayHi = function(){
   alert("hi");
};

friend.sayHi();   //"hi" - works!

// Even though the friend instance was created prior to this change, it still has access to the new method. 
// When friend.sayHi() is called, the instance is first searched for a property named sayHi; when it's not found, the search continues to the prototype. 

// Although properties and methods may be added to the prototype at any time, 
// and they are reflected instantly by all object instances, 
// you cannot overwrite the entire prototype and expect the same behavior.

function Person(){
}

var friend = new Person();

Person.prototype = {
      constructor: Person,
      name : "Nicholas",
      age : 29,
      job : "Software Engineer",
      sayName : function () {
            alert(this.name);
      }
};

friend.sayName();    //error

// In this example, a new instance of Person is created before the prototype object is overwritten. 
// When friend.sayName() is called, it causes an error, because the prototype that friend points to doesn't contain a property of that name. 
// Overwriting the prototype on the constructor means that new instances will reference 
// the new prototype while any previously existing object instances still reference the old prototype.



// Native Object Prototypes
// The prototype pattern is important not just for defining custom types but also because it is the pattern used to implement all of the native reference types.
// Native object prototypes can be modified just like custom object prototypes, so methods can be added at any time.

String.prototype.startsWith = function (text) {
             return this.indexOf(text) == 0;
       };

      var msg = "Hello world!";
      alert(msg.startsWith("Hello"));   //true

// The startsWith() method in this example returns true if some given text occurs at the beginning of a string. The method is assigned to String.prototype, making it available to all strings in the environment. 
// Since msg is a string, the String primitive wrapper is created behind the scenes, making startsWith() accessible.

// Although possible, it is not recommended to modify native object prototypes in a production environment. 
// This can often cause confusion and create possible name collisions if a method that didn't exist natively in one browser is implemented natively in another. 
// It's also possible to accidentally overwrite native methods.


// Problems with Prototypes
// The prototype pattern isn't without its faults. 
// For one, it negates the ability to pass initialization arguments into the constructor, 
// meaning that all instances get the same property values by default. 
// Although this is an inconvenience, it isn't the biggest problem with prototypes. 
// The main problem comes with their shared nature.

// The real problem occurs when a property contains a reference value.

function Person(){
}

Person.prototype = {
  constructor: Person,
  name : "Nicholas",
  age : 29,
  job : "Software Engineer",
  friends : ["Shelby", "Court"],
  sayName : function () {
      alert(this.name);
  }
};

var person1 = new Person();
var person2 = new Person();

person1.friends.push("Van");

alert(person1.friends);     //"Shelby,Court,Van"
alert(person2.friends);     //"Shelby,Court,Van"
alert(person1.friends === person2.friends);  //true

// The person1.friends array is altered by adding another string. 
// Because the friends array exists on Person.prototype, not on person1, the changes made are also reflected on person2.friends (which points to the same array). If the intention is to have an array shared by all instances, then this outcome is okay. Typically, though, instances want to have their own copies of all properties. 
// This is why the prototype pattern is rarely used on its own.


// Combination Constructor/Prototype Pattern
// The most common way of defining custom types is to combine the constructor and prototype patterns.
// The constructor pattern defines instance properties, whereas the prototype pattern defines methods and shared properties. With this approach, each instance ends up with its own copy of the instance properties, but they all share references to methods, conserving memory. 
// This pattern allows arguments to be passed into the constructor as well, effectively combining the best parts of each pattern.

function Person(name, age, job){
 this.name = name;
 this.age = age;
 this.job = job;
 this.friends = ["Shelby", "Court"];
}

Person.prototype = {
 constructor: Person,
 sayName : function () {
       alert(this.name);
   }
};

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

person1.friends.push("Van");

alert(person1.friends);    //"Shelby,Court,Van"
alert(person2.friends);    //"Shelby,Court"
alert(person1.friends === person2.friends);  //false
alert(person1.sayName === person2.sayName);  //true

// Note that the instance properties are now defined solely in the constructor, 
// and the shared property constructor and the method sayName() are defined on the prototype. 
// When person1.friends is augmented by adding a new string, person2.friends is not affected, 
// because they each have separate arrays.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The hybrid constructor/prototype pattern is the most widely used and accepted practice for defining custom reference types in ECMAScript. Generally speaking, this is the default pattern to use for defining reference types. //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Dynamic Prototype Pattern
// Developers coming from other OO languages may find the visual separation between the constructor and the prototype confusing. 
// The dynamic prototype pattern seeks to solve this problem by encapsulating all of the information within the constructor while maintaining the benefits of using both a constructor and a prototype by initializing the prototype inside the constructor, but only if it is needed. 

// You can determine if the prototype needs to be initialized by checking for the existence of a method that should be available.

function Person(name, age, job){

 //properties
 this.name = name;
 this.age = age;
 this.job = job;

 //methods
 if (typeof this.sayName != "function"){

      Person.prototype.sayName = function(){
      alert(this.name);
      };
  }
}

var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();

// The highlighted section of code inside the constructor adds the sayName() method if it doesn't already exist. 
// This block of code is executed only the first time the constructor is called. 

// Remember that changes to the prototype are reflected immediately in all instances, so this approach works perfectly. 
// The if statement may check for any property or method that will be present once initialized—there's no need 
// for multiple if statements to check each property or method; any one will do. 
// This pattern preserves the use of instanceof in determining what type of object was created.

// You cannot overwrite the prototype using an object literal when using the dynamic prototype pattern. As described previously, 
// overwriting a prototype when an instance already exists effectively cuts off that instance from the new prototype.


// Parasitic Constructor Pattern
// The parasitic constructor pattern is typically a fallback when the other patterns fail. 
// The basic idea of this pattern is to create a constructor that simply wraps the creation and return of another object while looking like a typical constructor. 

function Person(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
    alert(this.name);
    };
    return o;
}

var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();  //"Nicholas"

// This is exactly the same as the factory pattern except that the function is called as a constructor, using the new operator.
// When a constructor doesn't return a value, it returns the new object instance by default. 
// Adding a return statement at the end of a constructor allows you to override the value that is returned when the constructor is called.


// This pattern allows you to create constructors for objects that may not be possible otherwise. For example, you may want to create a special array that has an extra method. 
// Since you don't have direct access to the Array constructor, this pattern works:

function SpecialArray(){
  //create the array
  var values = new Array();

  //add the values
  values.push.apply(values, arguments);

  //assign the method
  values.toPipedString = function(){
  return this.join("|");
  };

  //return it
  return values;
}

var colors = new SpecialArray("red", "blue", "green");
alert(colors.toPipedString()); //"red|blue|green"

// A few important things to note about this pattern: there is no relationship between the returned object 
// and the constructor or the constructor's prototype; the object exists just as if it were created outside of a constructor. 
// Therefore, you cannot rely on the instanceof operator to indicate the object type. 
// Because of these issues, this pattern should not be used when other patterns work.


// Durable Constructor Pattern
// Douglas Crockford coined the term durable objects in JavaScript to refer to objects that have no public properties 
// and whose methods don't reference the this object. Durable objects are best used in secure environments 
// (those that forbid the use of this and new) or to protect data from the rest of the application (as in mashups). 
// A durable constructor is a constructor that follows a pattern similar to the parasitic constructor pattern,
// with two differences: instance methods on the created object don't refer to this, 
// and the constructor is never called using the new operator. 
// The Person constructor from the previous section can be rewritten as a durable constructor like this:

function Person(name, age, job){

 //create the object to return
 var o = new Object();

 //optional: define private variables/functions here

 //attach methods
 o.sayName = function(){
        alert(name);
 };

 //return the object
 return o;
}

// Note that there is no way to access the value of name from the returned object. 
// The sayName() method has access to it, but nothing else does. 

var friend = Person("Nicholas", 29, "Software Engineer");
friend.sayName();  //"Nicholas"

// The person variable is a durable object, and there is no way to access any of its data members without calling a method. Even if some other code adds methods or data members to the object, there is no way to access the original data that was passed into the constructor. 
// Such security makes the durable constructor pattern useful when dealing with secure execution environments

  
// As with the parasitic constructor pattern, there is no relationship between the constructor and the object instance, so instanceof will not work.

