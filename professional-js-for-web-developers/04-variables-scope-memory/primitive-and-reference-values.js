// ECMAScript variables may contain two different types of data: primitive values and reference values. 
// Primitive values are simple atomic pieces of data, 
// while reference values are objects that may be made up of multiple values.

// Reference values are objects stored in memory

var person = new Object();
  person.name = "Nicholas";
  alert(person.name);    //"Nicholas"

// Primitive values can't have properties added to them even though attempting to do so won't cause an error

var name = "Nicholas";
	name.age = 27;
	alert(name.age);    //undefined

// Only reference values can have properties defined dynamically for later use.

// Copying Values

var num1 = 5;
var num2 = num1;
// This value is completely separate from the one that is stored in numl, because it's a copy of that value.

var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Nicholas";
alert(obj2.name);    //"Nicholas"

// In this example, the variable obj1 is filled with a new instance of an object. This value is then copied into obj2, meaning that both variables are now pointing to the same object. When the property name is set on obj1, it can later be accessed from obj2

// Argument Passing

function addTen(num) {
	num += 10;
	return num;
 }

 var count = 20;
 var result = addTen(count);
 alert(count);    //20 - no change
 alert(result);   //30

// The argument num and the variable count do not recognize each other; they only happen to have the same value

function setName(obj) {
	obj.name = "Nicholas";
}

var person = new Object();
setName(person);
alert(person.name);    //"Nicholas"

// obj is accessing an object by reference, even though it was passed into the function by value


// When obj is overwritten inside the function, it becomes a pointer to a local object. That local object is destroyed as soon as the function finishes executing.
function setName(obj) {
  obj.name = "Nicholas";
  obj = new Object();
  obj.name = "Greg";
}

var person = new Object();
setName(person);
alert(person.name);    //"Nicholas"

// Think of function arguments in ECMAScript as nothing more than local variables.

// Determining Type
// The typeof operator is the best way to determine if a variable is a primitive type

var s = "Nicholas";
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();

alert(typeof s);   //string
alert(typeof i);   //number
alert(typeof b);   //boolean
alert(typeof u);   //undefined
alert(typeof n);   //object
alert(typeof o);   //object

// Although typeof works well for primitive values, it's of little use for reference values. 

alert(person instanceof Object);   //is the variable person an Object?
alert(colors instanceof Array);    //is the variable colors an Array?
alert(pattern instanceof RegExp);  //is the variable pattern a RegExp?

// All reference values, by definition, are instances of Object, so the instanceof operator always returns true when used with a reference value and the Object constructor. Similarly, if instanceof is used with a primitive value, it will always return false, because primitives aren't objects.

// The typeof operator also returns "function" when used on a function. 