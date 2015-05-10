// Three special reference types are designed to ease interaction with primitive values: the Boolean type, the Number type, and the String type. 

var s1 = "some text";
var s2 = s1.substring(2);

// In this code, sl is a variable containing a string, which is a primitive value. On the next line, the substring() method is called on sl and stored in s2. 

var s1 = new String("some text");
var s2 = s1.substring(2);
s1 = null;

// This behavior allows the primitive string value to act like an object. These same three steps are repeated for Boolean and numeric values using the Boolean and Number types, respectively.
