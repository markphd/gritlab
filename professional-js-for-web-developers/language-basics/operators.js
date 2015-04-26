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



