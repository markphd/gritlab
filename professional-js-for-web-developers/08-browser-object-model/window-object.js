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



// Pop-up Blockers
// If the browser's built-in pop-up blocker stopped the pop-up, then window.open() will most likely return null.

var wroxWin = window.open("http://www.wrox.com", "_blank");
if (wroxWin == null){
    alert("The popup was blocked!");
}

// When a browser add-on or other program blocks a pop-up, window.open() typically throws an error. 
// So to accurately detect when a pop-up has been blocked, you must check the return value and wrap 
// the call to window.open() in a try-catch block

var blocked = false;

try {
  var wroxWin = window.open("http://www.wrox.com", "_blank");
  if (wroxWin == null){
    blocked = true;
  }
} catch (ex){
  blocked = true;
}

if (blocked){
  alert("The popup was blocked!");
}



// Intervals and Timeouts
// JavaScript execution in a browser is single-threaded, but does allow for the scheduling of code to run at specific points 
// in time through the use of timeouts and intervals. Timeouts execute some code after a specified amount of time, 
// whereas intervals execute code repeatedly, waiting a specific amount of time in between each execution.

  setTimeout(function() {
          alert("Hello world!");
    }, 1000);

// it's considered poor practice to use a string as the first argument, because it brings with it performance penalties.

// The second argument, the number of milliseconds to wait, is not necessarily when the specified code will execute. 
// JavaScript is single-threaded and, as such, can execute only one piece of code at a time. 
// To manage execution, there is a queue of JavaScript tasks to execute. 
// The tasks are executed in the order in which they were added to the queue. 
// The second argument of setTimeout() tells the JavaScript engine to add this task onto the queue after a set number of milliseconds. 
// If the queue is empty, then that code is executed immediately; if the queue is not empty, the code must wait its turn.

// When setTimeout() is called, it returns a numeric ID for the timeout. 
// The timeout ID is a unique identifier for the scheduled code that can be used to cancel the timeout. 
// To cancel a pending timeout, use the clearTimeout() method and pass in the timeout ID

var timeoutId = setTimeout(function() {
  alert("Hello world!");
  }, 1000);

//nevermind - cancel it
clearTimeout(timeoutId);

// As long as clearTimeout() is called before the specified amount of time has passed, a timeout can be canceled completely. 
// Calling clearTimeout() after the code has been executed has no effect.

// All code executed by a timeout runs in the global scope, so the value of this inside the function will 
// always point to window when running in nonstrict mode and undefined when running in strict mode.

// The setlnterval() method lets you set up intervals, and it accepts the same arguments as setTimeout(): 
// the code to execute (string or function) and the milliseconds to wait between executions

setInterval(function() {
  alert("Hello world!");
}, 10000);

// The setlnterval() method also returns an interval ID that can be used to cancel the interval at some point in the future. 
// The clearlnterval() method can be used with this ID to cancel all pending intervals. 
// This ability is more important for intervals than timeouts since, if left unchecked, they continue to execute until the page is unloaded. 

var num = 0;
var max = 10;
var intervalId = null;

function incrementNumber() {
  num++;

  //if the max has been reached, cancel all pending executions
  if (num == max) {
    clearInterval(intervalId);
    alert("Done");
  }
}

intervalId = setInterval(incrementNumber, 500);
// the variable num is incremented every half second until it finally reaches the maximum number, at which point the interval is canceled.

var num = 0;
var max = 10;

function incrementNumber() {
  num++;

  //if the max has not been reached, set another timeout
  if (num < max) {
    setTimeout(incrementNumber, 500);
  } else {
    alert("Done");
  }
}

setTimeout(incrementNumber, 500);


// Note that when you're using timeouts, it is unnecessary to track the timeout ID, because the execution 
// will stop on its own and continue only if another timeout is set. 
// This pattern is considered a best practice for setting intervals without actually using intervals. 
// True intervals are rarely used in production environments because the time between the end of one interval and the beginning of the next is not necessarily guaranteed, and some intervals may be skipped. 
// Using timeouts, as in the preceding example, ensures that can't happen. 
// Generally speaking, it's best to avoid intervals.



// System Dialogs
// The browser is capable of invoking system dialogs to display to the user through the alert(), confirm(), and prompt() methods.

if (confirm("Are you sure?")) {
      alert("I'm so glad you're sure! ");
  } else {
      alert("I'm sorry to hear you're not sure. ");
  }

// To determine if the user clicked OK or Cancel, the confirm() method returns a Boolean value: true if OK was clicked, or false if Cancel 
// was clicked or the dialog box was closed by clicking the X in the corner. 
