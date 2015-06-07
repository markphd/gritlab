//  execution context of a variable or function defines what other data it has access to, as well as how it should behave

Window object // global execution context
// (the global context isn't destroyed until the application exits, such as when a web page is closed or a web browser is shut down

// scope chain

var color = "blue";
function changeColor(){
   if (color === "blue"){
       color = "red";
   }  else {
       color = "blue";
   }
}
changeColor();

// the function changeColor() has a scope chain with two objects in it: its own variable object (upon which the arguments object is defined) and the global context's variable object. The variable color is therefore accessible inside the function, because it can be found in the scope chain.

 var color = "blue";

   function changeColor(){
        var anotherColor = "red";

        function swapColors(){
            var tempColor = anotherColor;
            anotherColor = color;
            color = tempColor;

         //color, anotherColor, and tempColor are all accessible here
     }

    //color and anotherColor are accessible here, but not tempColor
    swapColors();
}

//only color is accessible here
changeColor();

// There are three execution contexts in this code: global context, the local context of changeColor(), and the local context of swapColors(). The global context has one variable, color, and one function, changeColor(). The local context of changeColor() has one variable named anotherColor and one function named swapColors(), but it can also access the variable color from the global context. The local context of swapColors() has one variable, named tempColor, that is accessible only within that context. Neither the global context nor the local context of swapColors() has access to tempColor.

// Function arguments are considered to be variables and follow the same access rules as any other variable in the execution context.

//////////////////////////////
// Scope Chain Augmentation //
//////////////////////////////

function buildUrl() {
	var qs = "?debug=true";

with(location){	//location.href
	var url = href + qs;
}

return url;
}

// When the variable qs is referenced, it's referring to the variable defined in buildUrl(), which is in the function context's variable object. Inside the with statement is a variable declaration for url, which becomes part of the function's context and can, therefore, be returned as the function value.


///////////////////////////
// No Block-Level Scopes //
///////////////////////////

// JavaScript's lack of block-level scopes is a common source of confusion. 

if (true) {
       var color = "blue";
   }

   alert(color);    //"blue"

//  the variable declaration adds a variable into the current execution context (the global context, in this case)

for (var i=0; i < 10; i++){
       doSomething(i);
   }

   alert(i);    //10
// the i variable is created by the for statement and continues to exist outside the loop after the statement executes.


//////////////////////////
// Variable Declaration //
//////////////////////////

var;
// var, it is automatically added to the most immediate context available. 

// If a variable is initialized without first being declared, it gets added to the global context automatically
function add(num1, num2) {
   var sum = num1 + num2;
   return sum;
}

var result = add(10, 20);  //30
alert(sum);                //causes an error since sum is not a valid variable

// This value is returned as the function value, but the variable sum isn't accessible outside the function

function add(num1, num2) {
       sum = num1 + num2;
       return sum;
   }

var result = add(10, 20);  //30
alert(sum);                //30

// When add() is called, sum is created in the global context and continues to exist even after the function has completed, allowing you to access it later.

	
// Initializing variables without declaring them is a very common mistake in JavaScript programming and can lead to errors. It's advisable to always declare variables before initializing them to avoid such issues. In strict mode, initializing variables without declaration causes an error.

///////////////////////
// Identifier Lookup //
///////////////////////

var color = "blue";

 function getColor(){
     return color;
 }

 alert(getColor());  //"blue"

 // getColor() 's variable object is searched for an identifier named color. When it isn't found, the search goes to the next variable object (from the global context) 

// Variable lookup doesn't come without a price. It's faster to access local variables than global variables because there's no search up the scope chain. JavaScript engines are getting better at optimizing identifier lookup, though, so this difference may end up negligible in the future. 