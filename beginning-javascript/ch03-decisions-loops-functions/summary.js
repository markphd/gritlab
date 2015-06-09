
// Decision making with the if and switch statements. 

// The ability to make decisions is essentially what gives the code its "intelligence." 
// Based on whether a condition is true or false, you can decide on a course of action to follow.

// Comparison operators. 
// == is the LHS equal to the RHS?
// != is the LHS not equal to the RHS?
// <= is the LHS less than or equal to the RHS?
// >= is the LHS greater than or equal to the RHS?
// < is the LHS less than the RHS?
// > is the LHS greater than the RHS?

// The if statement. Using the if statement, you can choose to execute a block of code (defined by being in curly braces) 
// when a condition is true. The if statement has a test condition, specified in parentheses. 
// If this condition evaluates to true, the code after the if statement will execute.

// The else statement. If you want code to execute when the if statement is false, you can use the else statement that 
// appears after the if statement.

// Logical operators. To combine conditions, you can use the three logical operators: AND, OR, and NOT, represented by &&, ‖, and !, 
// respectively.

// The AND operator returns true only if both sides of the expression are true.

// The OR operator returns true when either one or both sides of an expression are true.

// The NOT operator reverses the logic of an expression.

// The switch statement. This compares the result of an expression with a series of possible cases and 
// is similar in effect to a multiple if statement.



// Looping with for, for…in, while, and do…while. 

// The for loop. Useful for looping through code a certain number of times, the for loop consists of three parts: 
// the initialization, test condition, and increment parts. Looping continues while the test condition is true. 
// Each loop executes the block of code and then executes the increment part of the for loop before re-evaluating 
// the test condition to see if the results of incrementing have changed it.

// The for…in loop. This is useful when you want to loop through an array without knowing the number of elements in the array. 
// JavaScript works this out for you so that no elements are missed.

// The while loop. This is useful for looping through some code for as long as a test condition remains true. 
// It consists of a test condition and the block of code that's executed only if the condition is true. 
// If the condition is never true, the code never executes.

// The do…while loop. This is similar to a while loop, except that it executes the code once and then keeps executing the code 
// as long as the test condition remains true.

// break and continue statements. Sometimes you have a good reason to break out of a loop prematurely, 
// in which case you need to use the break statement. On hitting a break statement, code execution stops for the block of code 
// marked out by the curly braces and starts immediately after the closing brace. 

// The continue statement is similar to break, except that when code execution stops at that point in the loop, 
// the loop is not broken out of but instead continues as if the end of that reiteration had been reached.

// Functions are reusable bits of code. JavaScript has a lot of built-in functions that provide programmers services, 
// such as converting a string to a number. However, JavaScript also enables you to define and use your own functions 
// using the function keyword. Functions can have zero or more parameters passed to them and can return a value if you so wish.

// Variable scope and lifetime. Variables declared outside a function are available globally — that is, anywhere in the page. 
// Any variables defined inside a function are private to that function and can't be accessed outside of it. 
// Variables have a lifetime, the length of which depends on where the variable was declared. 
// If it's a global variable, its lifetime is that of the page — while the page is loaded in the browser, 
// the variable remains alive. For variables defined in a function, the lifetime is limited to the execution of that function. 
// When the function has finished being executed, the variables die, and their values are lost. 
