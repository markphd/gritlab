// FUNCTION TYPE
// Some of the most interesting parts of ECMAScript are its functions, primarily because functions actually are objects.

function sum (num1, num2) {
   return num1 + num2;
}
// This is almost exactly equivalent to using a function expression, such as this:

var sum = function(num1, num2){
   return num1 + num2;
};

//  it's possible to have multiple names for a single function, as in this example:

function sum(num1, num2){
   return num1 + num2;
}
alert(sum(10,10));    //20

var anotherSum = sum;
alert(anotherSum(10,10));  //20

sum = null;
alert(anotherSum(10,10));  //20

// When sum is set to null, it severs its relationship with the function, although anotherSum() can still be called without any problems.
