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

// Another window object is called parent. 
// The parent object always points to the current frame's immediate parent frame. 
// In some cases, parent may be equal to top, and when there are no frames, parent is equal to top

<html>
  <head>
        <title>Frameset Example</title>
  </head>
  <frameset rows="100,*">
       <frame src="frame.htm" name="topFrame">
       <frameset cols="50%,50%">
            <frame src="anotherframe.htm" name="leftFrame">
            <frame src="anotherframeset.htm" name="rightFrame">
           </frameset>
  </frameset>
</html>


// The top object always points to the very top (outermost) frame, which is the browser window itself. 
// There is one final window object, called self, which always points to window. The two can, in fact, be used interchangeably



// Window Position
// The position of a window object may be determined and changed using various properties and methods.
// The end result is that there's no accurate way to determine the size of the browser window itself, but it is possible to get the dimensions of the page viewport, as shown in the following example:



// Navigating and Opening Windows
// The window.open() method can be used both to navigate to a particular URL and to open a new browser window. This method accepts four arguments: the URL to load, the window target, a string of features, and a Boolean value indicating that the new page should take the place of the currently loaded page in the browser history. 



// Popping Up Windows
// When the second argument doesn't identify an existing window or frame, a new window or tab is created based on a string passed in as the third argument.

// Additionally, browsers will allow the creation of pop-up windows only after a user action. 
// A call to window.open() while a page is still being loaded, for instance, will not be executed and may cause an error to be displayed to the user. 
// Pop-up windows may be opened based only on a click or a key press.




