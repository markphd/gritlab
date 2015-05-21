Chapter 2: Data Types and Variables
..look specifically at how JavaScript handles data such as numbers and text. An understanding of how data are handled is fundamental to any programming language.

Types of Data in JavaScript
Some programming languages are strongly typed. In these languages, whenever you use a piece of data, you need to explicitly state what sort of data you are dealing with, and use of those data must follow strict rules applicable to its type. For example, you can't add a number and a word together.
JavaScript, on the other hand, is a weakly typed language and a lot more forgiving about how you use different types of data.

while JavaScript is very good at working out what data it's dealing with, there are occasions when it'll get things wrong or at least not do what you want it to do

Numerical Data
Numerical data come in two forms:
Whole numbers, such as 145, which are also known as integers. These numbers can be positive or negative and can span a very wide range in JavaScript: −253 to 253.
Fractional numbers, such as 1.234, which are also known as floating-point numbers. Like integers, they can be positive or negative, and they also have a massive range.

Text Data
JavaScript has a lot of other special characters, which can't be typed in but can be represented using the escape character in conjunction with other characters to create escape sequences. 
The least obvious of these is the last, which represents individual characters by their character number in the Latin-1 character set rather than by their normal appearance. 
Similarly, you can refer to characters using their Unicode escape sequence. These are written \uNNNN, where NNNN refers to the Unicode number for that particular character

Boolean Data
The purpose of Boolean data in JavaScript is just the same as in the world outside programming: They enable you to answer questions and make decisions based on the answer.
In JavaScript, you can use the same sort of Boolean logic to give our programs decision-making abilities.

Variables — Storing Data in Memory
Data can be stored either permanently or temporarily.
You will want to keep important data, such as the details of a person's bank account, in a permanent store.
However, there are other cases where you don't want to permanently store data, but simply want to keep a temporary note of it. 
So what makes variables good places for temporarily storing your data? Well, variables have a limited lifetime. 

Invalid names include:
with
99variables
my%Variable
theGood&theBad

Valid names include
myVariable99
myPercent_Variable
the_Good_and_the_Bad

One common method is Hungarian notation, where the beginning of each variable name is a three-letter identifier indicating the data type.
Once declared, a variable can be used to store any type of data.

However, JavaScript is a weakly typed language; you don't need to limit yourself to what type of data a variable can hold.
What variables enable you to do is temporarily hold information that you can use for processing in mathematical calculations, in building up text messages, or in processing words that the user has entered.

Increment and Decrement Operators
A number of operations using the math operators are so commonly used that they have been given their own operators.

myVariable++;
myVariable--;

Before going on, this seems to be a good point to introduce another operator: +=. This operator can be used as a shortcut for increasing the value held by a variable by a set amount. For example,
myVar += 6;

Operator Precedence
* has a higher precedence than +. The = symbol, also an operator (called the assignment operator), has the lowest precedence
The + and – operators have an equal precedence, so which one gets done first? Well, JavaScript works from left to right, so if operators with equal precedence exist in a calculation, they get calculated in the order in which they appear when going from left to right. The same applies to * and /, which are also of equal precedence.

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <body>
    <script type="text/javascript">
    // Equation is °C = 5/9 (°F - 32).
    var degFahren = prompt("Enter the degrees in Fahrenheit",50);
    var degCent;

    degCent = 5/9 * (degFahren - 32);

    alert(degCent);

    </script>

    </body>
    </html>


These two pieces of information must be specified in the given order and separated by a comma. If you don't want a default value to be contained in the input box when the prompt box opens, use an empty string (“”) for the second piece of information.

Starting from the left, first JavaScript works out 5/9 = .5556 (approximately). Then it comes to the multiplication, but wait … the last bit of our equation, degFahren − 32, is in parentheses. This raises the order of precedence and causes JavaScript to calculate the result of degFahren − 32 before doing the multiplication. 

For example, when degFahren is set to 50, (degFahren - 32) = (50 − 32) = 18. Now JavaScript does the multiplication, .5556 * 18, which is approximately 10.
What if you didn't use the parentheses? Then your code would be

    degCent = 5/9 * degFahren -; 32;
The calculation of 5/9 remains the same, but then JavaScript would have calculated the multiplication, 5/9 * degFahren. This is because the multiplication takes precedence over the subtraction. When degFahren is 50, this equates to 5/9 * 50 = 27.7778. Finally, JavaScript would have subtracted the 32, leaving the result as –4.2221; not the answer you want!



Basic String Operations
 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <body>

    <script type="text/javascript">

    var greetingString = "Hello";
    var myName = prompt("Please enter your name", "");
    var concatString;

    document.write(greetingString + " " + myName + "<br>");
    concatString = greetingString + " " + myName;

    document.write(concatString);


    </script>

    </body>
    </html>


alert(degFahren + "\xB0 Fahrenheit is " + degCent + "\xB0 centigrade");

Something to be aware of when using special characters is that they are not necessarily cross-platform-compatible. Although you can use \xNN for a certain character on a Windows computer, you may find you need to use a different character on a Mac or a Unix machine.

Data Type Conversion
In this section you'll look at two conversion functions that convert strings to numbers: parseInt() and parseFloat().

 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <body>

    <script type="text/javascript">

    var myString = "56.02 degrees centigrade";
    var myInt;
    var myFloat;

    document.write("\"" + myString + "\" is " + parseInt(myString) +
       " as an integer" + "<BR>");

    myInt = parseInt(myString);
    document.write("\"" + myString + "\" when converted to an integer equals " +
       myInt + "<BR>");

    myFloat = parseFloat(myString);
    document.write("\"" + myString +
       "\" when converted to a floating point number equals " + myFloat);

    </script>

    </body>
    </html>


As you can see, you can use parseInt() and parseFloat() in the same places you would use a number itself or a variable containing a number.

Dealing with Strings That Won't Convert
Some strings simply are not convertible to numbers, such as strings that don't contain any numerical data. What happens if you try to convert these strings? As a little experiment, try changing the preceding example so that myString holds something that is not convertible.

You can see that in the place of the numbers you got before, you get NaN. What sort of number is that? Well, it's Not a Number at all!

If you use parseInt() or parseFloat() with any string that is empty or does not start with at least one valid digit, you get NaN, meaning Not a Number.

  myVar2 = isNaN("34");
will store the value false in the variable myVar2, since 34 can be converted successfully from a string to a number by the isNaN() function.


Arrays
The difference between such a normal variable and an array is that an array can hold more than one item of data at the same time. 
Arrays can be very useful since you can store as many (within the limits of the language, which specifies a maximum of two to the power of 32 elements) or as few items of data in an array as you want. 

 var myArray = new Array();

var arr = new Array(6);

   var myArray = new Array();
    myArray[0] = "Paul";
    myArray[1] = 345;
    myArray[2] = "John";
    myArray[3] = 112;
    myArray[4] = "Bob";
    myArray[5] = 99;


A Multi-Dimensional Array

 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <body>

    <script type="text/javascript">

    var personnel = new Array();

    personnel[0] = new Array();
    personnel[0][0] = "Name0";
    personnel[0][1] = "Age0";
    personnel[0][2] = "Address0";

    personnel[1] = new Array();
    personnel[1][0] = "Name1";
    personnel[1][1] = "Age1";
    personnel[1][2] = "Address1";

    personnel[2] = new Array();
    personnel[2][0] = "Name2";
    personnel[2][1] = "Age2";
    personnel[2][2] = "Address2";

    document.write("Name : " + personnel[1][0] + "<BR>");
    document.write("Age : " + personnel[1][1] + "<BR>");
    document.write("Address : " + personnel[1][2]);


    </script>

    </body>
    </html>

So what's going on? Well, the truth is that JavaScript doesn't actually support multi-dimensional arrays, only single ones. However, JavaScript enables us to fake multi-dimensional arrays by creating an array inside another array.

It's possible to create multi-dimensional arrays of three, four, or even a hundred dimensions, but things can start to get very confusing, and you'll find that you rarely, if ever, need more than two dimensions.


SUMMARY
JavaScript supports a number of types of data, such as numbers, text, and Booleans.

Text is represented by strings of characters and is surrounded by quotes. You must match the quotes surrounding strings. Escape characters enable you to include characters in your string that cannot be typed.

Variables are JavaScript's means of storing data, such as numbers and text, in memory so that they can be used again and again in your code.

Variable names must not include certain illegal characters, like the percent sign (%) and the ampersand (&), or be a reserved word, like with.

Before you can give a value to a variable, you must declare its existence to the JavaScript interpreter.

JavaScript has the four basic math operators, represented by the symbols plus (+), minus (-), star (*), and forward slash (/). To assign values of a calculation to a variable, you use the equals sign (=), termed the assignment operator.

Operators have different levels of precedence, so multiplication and division will be calculated before addition and subtraction.

Strings can be joined, or concatenated, to produce one big string by means of the + operator. When numbers and strings are concatenated with the + operator, JavaScript automatically converts the number into a string.

Although JavaScript's automatic data conversion suits us most of the time, there are occasions when you need to force the conversion of data. You saw how parseInt() and parseFloat() can be used to convert strings to numbers. Attempting to convert strings that won't convert will result in NaN (Not a Number) being returned.

Arrays are a special type of variable that can hold more than one piece of data. The data are inserted and accessed by means of a unique index number.






