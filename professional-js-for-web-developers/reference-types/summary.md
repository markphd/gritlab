###SUMMARY
Objects in JavaScript are called reference values, and several built-in reference types can be used to create specific types of objects, as follows:

- Reference types are similar to classes in traditional object-oriented programming but are implemented differently.
- The Object type is the base from which all other reference types inherit basic behavior.
- The Array type represents an ordered list of values and provides functionality for manipulating and converting the values.
- The Date type provides information about dates and times, including the current date and time and calculations.
- The RegExp type is an interface for regular-expression support in ECMAScript, providing most basic and some advanced regular-expression functionality.

One of the unique aspects of JavaScript is that functions are actually instances of the Function type, meaning functions are objects. Because functions are objects, functions have methods that can be used to augment how they behave.

Because of the existence of primitive wrapper types, primitive values in JavaScript can be accessed as if they were objects. There are three primitive wrapper types: Boolean, Number, and String. They all have the following characteristics:

- Each of the wrapper types maps to the primitive type of the same name.
- When a primitive value is accessed in read mode, a primitive wrapper object is instantiated so that it can be used to manipulate the data.
- As soon as a statement involving a primitive value is executed, the wrapper object is destroyed

There are also two built-in objects that exist at the beginning of code execution: Global and Math. The Global object isn't accessible in most ECMAScript implementations; however, web browsers implement it as the window object. The Global object contains all global variables and functions as properties. The Math object contains properties and methods to aid in complex mathematical calculations.