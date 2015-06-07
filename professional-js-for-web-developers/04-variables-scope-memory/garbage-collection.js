////////////////////////
// GARBAGE COLLECTION //
////////////////////////

// execution environment is responsible for managing the memory required during code execution
// JavaScript frees developers from worrying about memory management by automatically allocating what is needed and reclaiming memory that is no longer being used. 
// The garbage collector must keep track of which variables can and can't be used so it can identify likely candidates for memory reclamation. 

// Mark-and-Sweep
// The variables that are marked after that are considered ready for deletion, because they can't be reached by any in-context variables. The garbage collector then does a memory sweep, destroying each of the marked values and reclaiming the memory associated with them.


// Reference Counting
// every value keeps track of how many references are made to it
// garbage collector frees the memory for values with a reference count of zero the next time it runs.

// A circular reference occurs when object A has a pointer to object B and object B has a reference to object A, such as in the following example:

   function problem(){
       var objectA = new Object();
       var objectB = new Object();

       objectA.someOtherObject = objectB;
       objectB.anotherObject = objectA;
   }

// In a reference-counting system, though, objectA and objectB will continue to exist after the function has exited, because their reference counts will never reach zero. If this function were called repeatedly, it would lead to a large amount of memory never being reclaimed.

var element = document.getElementById("some_element");
var myObject = new Object();
myObject.element = element;
element.someObject = myObject;

// Because of this circular reference, the memory for the DOM element will never be reclaimed even if it is removed from the page.
// break the connection between native JavaScript objects and DOM elements when you're finished using them

myObject.element = null;
element.someObject = null; 

// Setting a variable to null effectively severs the connection between the variable and the value it previously referenced. The next time the garbage collector runs, these values will be deleted and the memory will be reclaimed.

// Performance
// With the release of Internet Explorer 7, the JavaScript engine's garbage-collection routine was tuned to dynamically change the allocation threshold of variables, literals, and/or array slots that triggered garbage collection.


// Managing Memory
// The best way to optimize memory usage is to ensure that you're keeping around only data that is necessary for the execution of your code.

// When data is no longer necessary, it's best to set the value to null, freeing up the reference—this is called dereferencing the value

function createPerson(name){
      var localPerson = new Object();
      localPerson.name = name;
      return localPerson;
  }

  var globalPerson = createPerson("Nicholas");

  //do something with globalPerson

  globalPerson = null;

// Keep in mind that dereferencing a value doesn't automatically reclaim the memory associated with it. The point of dereferencing is to make sure the value is out of context and will be reclaimed the next time garbage collection occurs.  


//  To aid in memory reclamation, global objects, properties on global objects, and circular references should all be dereferenced when no longer needed.
