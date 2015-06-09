// Functions
// A function is something that performs a particular task. 
// Functions in JavaScript work a little like the function buttons on a pocket calculator: 
// They encapsulate a block of code that performs a certain task.
// The data that a function requires to be passed are known as its parameter(s).
// A function can have zero or more parameters, though even if it has no parameters, 
// you must still put the open and close parentheses after its name.

// You don't have to return a value if you don't want to, but you should always include a return statement at the end of your function, 
// although JavaScript is a very forgiving language and won't have a problem if you don't use a return statement at all.

// When JavaScript comes across a return statement in a function, it treats it a bit like a break statement in a for loop — 
// it exits the function, returning any value specified after the return keyword.




// Variable Scope and Lifetime
// Any variables declared in a web page outside of a function will be available to all script on the page, 
// whether that script is inside a function or otherwise — we term this a global or page-level scope. 

// variables declared inside a function are visible only inside that function — no code outside the function can access them

// Variables not only have the scope property — where they are visible — but they also have a lifetime. 
// When the function finishes executing, the variables in that function die and their values are lost

// Every so often JavaScript performs garbage collection, whereby it scans through the code and sees 
// if any variables are no longer in use; if so, the data they hold are freed from memory to make way for the data of other variables.

// Global variables are great when you need to keep track of data on a global basis. 
// However, because they are available for modification anywhere in your code, it does mean that if they are changed incorrectly due to a bug, that bug could be anywhere within the code, making debugging difficult. 
// It's best, therefore, to keep global variable use to a minimum