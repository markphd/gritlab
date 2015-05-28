// SUMMARY
// ECMAScript supports object-oriented (OO) programming without the use of classes or interfaces. 
// Objects are created and augmented at any point during code execution, making objects into dynamic rather than strictly defined entities. 
// In place of classes, the following patterns are used for the creation of objects:

	// The factory pattern uses a simple function that creates an object, assigns properties and methods, and then returns the object. 
	// This pattern fell out of favor when the constructor pattern emerged.


	// Using the constructor pattern, it's possible to define custom reference types that can be created using the new operator in the same way as built-in object instances are created. 
	// The constructor pattern does have a downside, however, in that none of its members are reused, including functions. 
	// Since functions can be written in a loosely typed manner, there's no reason they cannot be shared by multiple object instances.

	// The prototype pattern takes this into account, using the constructor's prototype property to assign properties and methods that should be shared. The combination constructor/ prototype pattern uses the constructor to define instance properties and the prototype pattern to define shared properties and methods.



// Inheritance in JavaScript is implemented primarily using the concept of prototype chaining. Prototype chaining involves assigning a constructor's prototype to be an instance of another type. 
// In doing so, the subtype assumes all of the properties and methods of the supertype in a manner similar to class-based inheritance. The problem with prototype chaining is that all of the inherited properties and methods are shared among object instances, making it ill-suited for use on its own. 
// The constructor stealing pattern avoids these issues, calling the supertype's constructor from inside of the subtype's constructor. This allows each instance to have its own properties but forces the types to be defined using only the constructor pattern. The most popular pattern of inheritance is combination inheritance, which uses prototype chaining to inherit shared properties and methods and uses constructor stealing to inherit instance properties.

	// Prototypal inheritance implements inheritance without the need for predefined constructors, essentially performing a shallow clone operation on a given object. The result of the operation then may be augmented further.
	// Closely related is parasitic inheritance, which is a pattern for creating an object based on another object or some information, augmenting it, and returning it. This pattern has also been repurposed for use with combination inheritance to remove the inefficiencies related to the number of times the supertype constructor is called.
	// Parasitic combination inheritance is considered the most efficient way to implement type-based inheritance.
	