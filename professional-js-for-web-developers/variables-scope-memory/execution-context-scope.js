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

