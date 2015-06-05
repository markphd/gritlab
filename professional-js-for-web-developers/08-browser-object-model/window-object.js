// THE WINDOW OBJECT
// At the core of the BOM is the window object, which represents an instance of the browser. The window object serves a dual purpose in browsers, 
// acting as the JavaScript interface to the browser window and the ECMAScript Global object

// The Global Scope
// Since the window object doubles as the ECMAScript Global object, 
// all variables and functions declared globally become properties and methods of the window object. 

var age = 29;
function sayAge(){
	alert(this.age);
}

alert(window.age);     //29
sayAge();              //29
window.sayAge();       //29

//  the variable age is also accessible as window.age, 
// and the function sayAge() is also accessible via window.sayAge()


// global variables cannot be removed using the delete operator, while properties defined directly on window can. 

var age = 29;
window.color = "red";

//throws an error in IE < 9, returns false in all other browsers
delete window.age;

//throws an error in IE < 9, returns true in all other browsers
delete window.color;    //returns true

alert(window.age);      //29
alert(window.color);    //undefined

// Properties of window that were added via var statements have their 
// [[Configurable]] attribute set to false and so may not be removed via the delete operator.

// attempting to access an undeclared variable throws an error, but it is 
// possible to check for the existence of a potentially undeclared variable by looking on the window object.

//this throws an error because oldValue is undeclared
var newValue = oldValue;

//this doesn't throw an error, because it's a property lookup
//newValue is set to undefined
var newValue = window.oldValue;

// Keeping this in mind, there are many objects in JavaScript that are considered to be global, 
// such as location and navigator (both discussed later in the chapter), 
// but are actually properties of the window object.


// Window Relationships and Frames
// If a page contains frames, each frame has its own window object and is stored in the frames collection. Within the frames collection, the window objects are indexed both by number 
// (starting at 0, going from left to right, and then row by row) and by the name of the frame. 

<html>
 <head>
      <title>Frameset Example</title>
 </head>
 <frameset rows="160,*">
        <frame src="frame.htm" name="topFrame">
        <frameset cols="50%,50%">
              <frame src="anotherframe.htm" name="leftFrame">
              <frame src="yetanotherframe.htm" name="rightFrame">
        </frameset>
 </frameset>
</html>

// Here, the top frame can be referenced by window.frames[0] or window.frames["topFrame"]; 
// however, you would probably use the top object instead of window to refer to these frames 
// (making it top.frames[0], for instance).

