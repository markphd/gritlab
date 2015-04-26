/*Unary Operators*/
// simplest operators in ECMAScript

/*Increment/Decrement*/
var age = 29;
   ++age;
//adding 1 to its previous value of 29

 var age = 29;
  --age;
//subtractring 1 to its previous value of 29  

var num1 = 33;
var num2 = num1-- + 4; // 37
console.log(num1); // 32

// When used on a string that is a valid representation of a number, convert to a number and apply the change. 
// The variable is changed from a string to a number.
num1 = "10";
num1++; // converts to integer 10 
console.log(num1); // 11

// When used on a Boolean value, converts to number and add/subsctract 1.
var boFalse = 0;
boFalse++; 
console.log(boFalse); //1

//When used on a floating-point value, apply the change by adding or subtracting 1.
var tFloat = 1.3;
tFloat++;
console.log(tFloat); // 2.3

var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o = {
    valueOf: function() {
       return -1;
    }
};

s1++;   //value becomes numeric 3
s2++;   //value becomes NaN
b++;    //value becomes numeric 1
f--;    //value becomes 0.10000000000000009 (due to floating-point inaccuracies)
o--;    //value becomes numeric -2

/*Unary Plus and Minus*/
// placed before a variable and does nothing to a numeric value

The following example demonstrates the behavior of the unary plus when acting on different data types:

   var s1 = "01";
   var s2 = "1.1";
   var s3 = "z";
   var b = false;
   var f = 1.1;
   var o = {
         valueOf: function() {
            return -1;
      }
   };

   s1 = +s1;   //value becomes numeric 1
   s2 = +s2;   //value becomes numeric 1.1
   s3 = +s3;   //value becomes NaN
   b = +b;     //value becomes numeric 0
   f = +f;     //no change, still 1.1
   o = +o;     //value becomes numeric -1

// The unary minus operator's primary use is to negate a numeric value, such as converting 1 into -1. 


/*Bitwise Operators*/ -- SKIPPED

/*Boolean Operators*/
// Boolean operators are what make a programming language function

// Logical NOT
// first converts the operand to a Boolean value and then negates it

alert(!false);       //true
alert(!"blue");      //false
alert(!0);           //true
alert(!NaN);         //true
alert(!"");          //true
alert(!12345);       //false

// By using two NOT operators in a row, you can effectively 
// simulate the behavior of the Boolean() casting function

alert(!!"blue");      //true
alert(!!0);           //false
alert(!!NaN);         //false
alert(!!"");          //false
alert(!!12345);       //true

// Logical AND

var result = true && false;

// The logical AND operator is a short-circuited operation, 
// meaning that if the first operand determines the result, the second operand is never evaluated.

var found = true;
var result = (found && someUndeclaredVariable);    //error occurs here
alert(result);    //this line never executes
//The value of the variable found is true, 
//so the logical AND operator continued to evaluate the variable someUndeclaredVariable.


var found = false;
var result = (found && someUndeclaredVariable);    //no error
alert(result);    //works

// Logical OR
var result = true || false;

// Also like the logical AND operator, the logical OR operator is short-circuited. 
// In this case, if the first operand evaluates to true, the second operand is not evaluated.

var found = true;
var result = (found || someUndeclaredVariable);    //no error
alert(result);    //works

var found = false;
var result = (found || someUndeclaredVariable);    //error occurs here
alert(result);    //this line never executes


// You can also use this behavior to avoid assigning a null or undefined value to a variable. 
var myObject = preferredObject || backupObject;

// Multiplicative Operators
var result = 34 * 56;

// Divide
var result = 66 / 11;

// Modulus
 var result = 26 % 5;    //equal to 1

// Additive Operators
// The additive operators, add and subtract, 
// are typically the simplest mathematical operators in programming languages

var result1 = 5 + 5;     //two numbers
alert(result1);                  //10
var result2 = 5 + "5";   //a number and a string
alert(result2);                  //"55"

// One of the most common mistakes in ECMAScript is being 
// unaware of the data types involved with an addition operation
 
var num1 = 5;
var num2 = 10;
var message = "The sum of 5 and 10 is " + num1 + num2;
alert(message);    //"The sum of 5 and 10 is 510"

// Here, the two number variables are surrounded by parentheses, 
// which instruct the interpreter to calculate its result before adding it to the string
var message = "The sum of 5 and 10 is " + (num1 + num2); // FIX

// Subtract
var result = 2 - 1;

var result1 = 5 - true;    //4 because true is converted to 1
var result2 = NaN - 1;     //NaN
var result3 = 5 - 3;       //2
var result4 = 5 - "";      //5 because "" is converted to 0
var result5 = 5 - "2";     //3 because "2" is converted to 2
var result6 = 5 - null;    //5 because null is converted to 0

// Relational Operators
var result1 = 5 > 3;    //true
var result2 = 5 < 3;    //false

// For strings, each of the first string's character codes is numerically compared 
// against the character codes in a corresponding location in the second string. 
// After this comparison is complete, a Boolean value is returned. 
// The problem here is that the character codes of uppercase letters are all 
// lower than the character codes of lowercase letters
var result = "Brick" < "alphabet"; //true

var result = "23" < "3"; //true
// This code returns true when comparing the string "23" to "3". Because both operands are strings, 
// they are compared by their character codes (the character code for "2" is 50; the character code for "3" is 51)

var result = "23" < 3; //false
// Here, the string "23" is converted into the number 23 and then compared to 3, 
// giving the expected result

var result = "a" < 3; //false because "a" becomes NaN

var result1 = NaN < 3;     //false
var result2 = NaN >= 3;    //false
// In most comparisons, if a value is not less than another, it is always greater than or equal to it. 
// When using NaN, however, both comparisons return false.
