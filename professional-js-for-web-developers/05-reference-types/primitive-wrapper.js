// Three special reference types are designed to ease interaction with primitive values: the Boolean type, the Number type, and the String type. 

var s1 = "some text";
var s2 = s1.substring(2);

// In this code, sl is a variable containing a string, which is a primitive value. On the next line, the substring() method is called on sl and stored in s2. 

var s1 = new String("some text");
var s2 = s1.substring(2);
s1 = null;

// This behavior allows the primitive string value to act like an object. These same three steps are repeated for Boolean and numeric values using the Boolean and Number types, respectively.
// The major difference between reference types and primitive wrapper types is the lifetime of the object. 

var s1 = "some text";
s1.color = "red";
alert(s1.color);   //undefined

// properties and methods cannot be added at runtime.
// second line attempts to add a color property to the string sl. However, when sl is accessed on the third line, the color property is gone. 

// This happens because the String object that was created in the second line is destroyed by the time the third line is executed. The third line creates its own String object, which doesn't have the color property.

// The Object constructor also acts as a factory method and is capable of returning an instance of a primitive wrapper based on the type of value passed into the constructor.
var obj = new Object("some text");
alert(obj instanceof String);   //true

var value = "25";
var number = Number(value);   //casting function
alert(typeof number);   //"number"

var obj = new Number(value);    //constructor
alert(typeof obj);              //"object"
// In this example, the variable number is filled with a primitive number value of 25 while the variable obj is filled with an instance of Number.

// Even though it's not recommended to create primitive wrapper objects explicitly, their functionality is important in being able to manipulate primitive values. Each primitive wrapper type has methods that make data manipulation easier.


// The Boolean Type
var booleanObject = new Boolean(true);
// Instances of Boolean override the valueOf() method to return a primitive value of either true or false. The toString() method is also overridden to return a string of "true" or "false" when called.
var falseObject = new Boolean(false);
var result = falseObject && true;
alert(result);  //true

var falseValue = false;
result = falseValue && true;
alert(result);  //false

// In Boolean math, false AND true is equal to false.
// all objects are automatically converted to true in Boolean expressions, so falseObject actually is given a value of true in the expression. Then, true ANDed with true is equal to true.
// a Boolean object is an instance of the Boolean type and will return true when used with the instanceof operator, whereas a primitive value returns false, as shown here:

alert(typeof falseObject);   //object
alert(typeof falseValue);    //boolean
alert(falseObject instanceof Boolean);  //true
alert(falseValue instanceof Boolean);   //false

// The Number Type
var numberObject = new Number(1O);
// the Number type overrides valueOf(), toLocaleString(), and toString(). The valueOf() method returns the primitive numeric value represented by the object, whereas the other two methods return the number as a string.
var num = 10;
alert(num.toString());       //"10"
alert(num.toString(2));      //"1010"
alert(num.toString(8));      //"12"
alert(num.toString(10));     //"10"
alert(num.toString(16));     //"a"

// The toFixed() method returns a string representation of a number with a specified number of decimal points, as in this example:

var num = 10;
alert(num.toFixed(2));    //"10.00"

// If the number has more than the given number of decimal places, the result is rounded to the nearest decimal place, as shown here:

var num = 10.005;
alert(num.toFixed(2));    //"10.01"
// The rounding nature of toFixed() may be useful for applications dealing with currency, though it's worth noting that rounding using this method differs between browsers.
// The toFixed() method can represent numbers with 0 through 20 decimal places. Some browsers may support larger ranges, but this is the typically implemented range.

// Just as with toFixed(), toExponential() accepts one argument, which is the number of decimal places to output. Consider this example:

var num = 10;
alert(num.toExponential(1));    //"1.0e+1"

// The toPrecision() method returns either the fixed or the exponential representation of a number, depending on which makes the most sense
var num = 99;
alert(num.toPrecision(1));    //"1e+2"
alert(num.toPrecision(2));    //"99"
alert(num.toPrecision(3));    //"99.0"

// The toPrecision() method essentially determines whether to call toFixed() or toExponential() based on the numeric value you're working with; all three methods round up or down to accurately represent a number with the correct number of decimal places.


// The typeof and instanceof operators work differently when dealing with primitive numbers versus reference numbers, as shown in the following examples:

var numberObject = new Number(10);
var numberValue = 10;
alert(typeof numberObject);    //"object"
alert(typeof numberValue);     //"number"
alert(numberObject instanceof Number);  //true
alert(numberValue instanceof Number);   //false
// Primitive numbers always return "number" when typeof is called on them, whereas Number objects return "object". Similarly, a Number object is an instance of Number, but a primitive number is not.

// The String Type
var stringObject = new String("hello world");
// The methods of a String object are available on all string primitives. All three of the inherited methods—valueOf(), toLocaleString(), and toString()—return the object's primitive string value.
var stringValue = "hello world";
alert(stringValue.length);     //"11"

// Character Methods
//  The charAt() method simply returns the character in the given position as a single-character string. (There is no character type in ECMAScript.) 

var stringValue = "hello world";
alert(stringValue.charAt(1));  

var stringValue = "hello world";
alert(stringValue.charCodeAt(1));   //outputs "101"
// This example outputs "l0l", which is the character code for the lowercase "e" character.

var stringValue = "hello world";
alert(stringValue[1]);     //"e"

// String-Manipulation Methods
var stringValue = "hello ";
var result = stringValue.concat("world");
alert(result);            //"hello world"
alert(stringValue);       //"hello"
// The result of calling the concat() method on stringValue in this example is "hello world"—the value of stringValue remains unchanged. The concat() method accepts any number of arguments, so it can create a string from any number of other strings

var stringValue = "hello ";
var result = stringValue.concat("world", "!");
alert(result);            //"hello world!"
alert(stringValue);       //"hello"
// This modified example concatenates "world" and "!" to the end of "hello ". Although the concat() method is provided for string concatenation, the addition operator (+) is used more often and, in most cases, actually performs better than the concat() method even when concatenating multiple strings.

var stringValue = "hello world";
alert(stringValue.slice(3));         //"lo world"
alert(stringValue.substring(3));     //"lo world"
alert(stringValue.substr(3));        //"lo world"
alert(stringValue.slice(3, 7));      //"lo w"
alert(stringValue.substring(3,7));   //"lo w"
alert(stringValue.substr(3, 7));     //"lo worl"
// In this example, slice(), substr(), and substring() are used in the same manner and, in most cases, return the same value. 

//  For the slice() method, a negative argument is treated as the length of the string plus the negative argument.
// For the substr() method, a negative first argument is treated as the length of the string plus the number, whereas a negative second number is converted to 0. For the substring() method, all negative numbers are converted to 0. 

var stringValue = "hello world";
alert(stringValue.slice(-3));          //"rld"
alert(stringValue.substring(-3));      //"hello world"
alert(stringValue.substr(-3));         //"rld"
alert(stringValue.slice(3, -4));       //"lo w"
alert(stringValue.substring(3, -4));   //"hel"
alert(stringValue.substr(3, -4));      //"" (empty string)
// This example clearly indicates the differences between three methods. When slice() and substr() are called with a single negative argument, they act the same. This occurs because -3 is translated into 7 (the length plus the argument), effectively making the calls slice(7) and substr(7). The substring() method, on the other hand, returns the entire string, because -3 is translated to 0.

// String Location Methods
// There are two methods for locating substrings within another string: indexOf() and lastlndexOf()
// The difference between the two is that the indexOf() method begins looking for the substring at the beginning of the string, whereas the lastlndexOf() method begins looking from the end of the string. 

var stringValue = "hello world";
alert(stringValue.indexOf("o"));          //4
alert(stringValue.lastIndexOf("o"));      //7
// Here, the first occurrence of the string "o" is at position 4, which is the "o" in "hello". The last occurrence of the string "o" is in the word "world", at position 7. If there is only one occurrence of "o" in the string, then indexOf() and lastIndexOf() return the same position.

var stringValue = "hello world";
alert(stringValue.indexOf("o", 6));           //7
alert(stringValue.lastIndexOf("o", 6));       //4

// Using this second argument allows you to locate all instances of a substring by looping callings to indexOf() or lastIndexOf(), as in the following example:

var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var positions = new Array();
var pos = stringValue.indexOf("e");

while(pos < -1){
   positions.push(pos);
   pos = stringValue.indexOf("e", pos + 1);
}

alert(positions);    //"3,24,32,35,52"
// This example works through a string by constantly increasing the position at which indexOf() should begin. It begins by getting the initial position of "e" in the string and then enters a loop that continually passes in the last position plus one to indexOf(), ensuring that the search continues after the last substring instance. Each position is stored in the positions array so the data can be used later.

// The trim() Method
// ECMAScript 5 introduces a trim() method on all strings. The trim() method creates a copy of the string, removes all leading and trailing white space, and then returns the result. 
var stringValue = "    hello world    ";
var trimmedStringValue = stringValue.trim();
alert(stringValue);            //"    hello world    "
alert(trimmedStringValue);     //"hello world"

// String Case Methods
// The next set of methods involves case conversion. Four methods perform case conversion: toLowerCase(), toLocaleLowerCase(), toUpperCase(), and toLocaleUpperCase(). 
var stringValue = "hello world";
alert(stringValue.toLocaleUpperCase());  //"HELLO WORLD"
alert(stringValue.toUpperCase());        //"HELLO WORLD"
alert(stringValue.toLocaleLowerCase());  //"hello world"
alert(stringValue.toLowerCase());        //"hello world"

// String Pattern-Matching Methods
// The String type has several methods designed to pattern-match within the string. The first of these methods is match() and is essentially the same as calling a RegExp object's exec() method. The match() method accepts a single argument, which is either a regular-expression string or a RegExp object. 
var text = "cat, bat, sat, fat";
var pattern = /.at/;

//same as pattern.exec(text)
var matches = text.match(pattern);
alert(matches.index);        //0
alert(matches[0]);           //"cat"
alert(pattern.lastIndex);   //0

// Another method for finding patterns is search(). The only argument for this method is the same as the argument for match(): a regular expression specified by either a string or a RegExp object. The search() method returns the index of the first pattern occurrence in the string or -1 if it's not found. search() always begins looking for the pattern at the beginning of the string.
var text = "cat, bat, sat, fat";
var pos = text.search(/at/);
alert(pos);   //1

var text = "cat, bat, sat, fat";
var result = text.replace("at", "ond");
alert(result);    //"cond, bat, sat, fat"

result = text.replace(/at/g, "ond");
alert(result);    //"cond, bond, sond, fond"
// In this example, the string "at" is first passed into replace() with a replacement text of "ond". The result of the operation is that "cat" is changed to "cond", but the rest of the string remains intact. By changing the first argument to a regular expression with the global flag set, each instance of "at" is replaced with "ond".


var text = "cat, bat, sat, fat";
result = text.replace(/(.at)/g, "word ($1)");
alert(result);    //word (cat), word (bat), word (sat), word (fat)
// Here, each word ending with "at" is replaced with "word" followed in parentheses by what it replaces by using the $1 sequence.
// The second argument of replace() may also be a function. When there is a single match, the function gets passed three arguments: the string match, the position of the match within the string, and the whole string. When there are multiple capturing groups, each matched string is passed in as an argument, with the last two arguments being the position of the pattern match in the string and the original string


function htmlEscape(text){
	return text.replace(/[<>"&]/g, function(match, pos, originalText){
		switch(match){
        case "<":
            return "<";
        case ">":
            return ">";
        case "&":
            return "&";
        case "\"":
            return "\"";
        }
	});
}

alert(htmlEscape("<p class=\"greeting\">Hello world!</p>"));
//"&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt";
// the function htmlEscape() is defined to escape four characters for insertion into HTML: the less-than, greater-than, ampersand, and double-quote characters all must be escaped. The easiest way to accomplish this is to have a regular expression to look for those characters and then define a function that returns the specific HTML entities for each matched character.

// The last string method for dealing with patterns is split(), which separates the string into an array of substrings based on a separator. The separator may be a string or a RegExp object. (The string is not considered a regular expression for this method.) An optional second argument, the array limit, ensures that the returned array will be no larger than a certain size. 
var colorText = "red,blue,green,yellow";
var colors1 = colorText.split(",");      //["red", "blue", "green", "yellow"]
var colors2 = colorText.split(",", 2);   //["red", "blue"]
var colors3 = colorText.split(/[^\,]+/); //["", ",", ",", ",", ""]

// Browsers vary in their exact support for regular expressions in the split() method. While simple patterns typically work the same way, patterns where no match is found and patterns with capturing groups can behave wildly different across browsers.
 
// The localeCompare() Method
// The last method is localeCompare(), which compares one string to another 
var stringValue = "yellow";
alert(stringValue.localeCompare("brick"));  //1
alert(stringValue.localeCompare("yellow")); //0
alert(stringValue.localeCompare("zoo"));    //-1
// In this code, the string "yellow" is compared to three different values: "brick", "yellow", and "zoo". Because "brick" comes alphabetically before "yellow", localeCompare() returns 1; "yellow" is equal to "yellow", so localeCompare() returns 0 for that line; and "zoo" comes after "yellow", so localeCompare() returns -1 for that line. 

// Once again, because the values are implementation-specific, it is best to use localeCompare() as shown in this example:

function determineOrder(value) {
   var result = stringValue.localeCompare(value);
   if (result < 0){
        alert("The string 'yellow' comes");
   } else if (result > 0) {
        alert("The string 'yellow' comes");
   } else {
       alert("The string 'yellow' is equal");
   }
}

determineOrder("brick");
determineOrder("yellow");
determineOrder("zoo");

// By using this sort of construct, you can be sure that the code works correctly in all implementations.

// The fromCharCode() Method
// There is one method on the String constructor: fromCharCode(). This method's job is to take one or more character codes and convert them into a string. Essentially, this is the reverse operation from the charCodeAt() instance method
alert(String.fromCharCode(104, 101, 108, 108, 111)); //"hello"
// In this code, fromCharCode() is called on a series of character codes from the letters in the word "hello".

// HTML Methods
// The web browser vendors recognized a need early on to format HTML dynamically using JavaScript. As a result, they extended the specification to include several methods specifically designed to aid in common HTML formatting tasks.



