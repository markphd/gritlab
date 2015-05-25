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
