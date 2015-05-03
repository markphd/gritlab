////////////////
// ARRAY TYPE //
////////////////

// ECMAScript arrays are also dynamically sized, automatically growing to accommodate any data that is added to them.
var colors = new Array();

// If you know the number of items that will be in the array, you can pass the count into the constructor, and the length property will automatically be created with that value
var colors = new Array(20);

var colors = new Array(3);       //create an array with three items
var names = new Array("Greg");   //create an array with one item, the string "Greg"

// It's possible to omit the new operator when using the Array constructor. It has the same result, as you can see here:

var colors = Array(3);      //create an array with three items
var names = Array("Greg");  //create an array with one item, the string "Greg"

// The second way to create an array is by using array literal notation

var colors = ["red", "blue", "green"];    //creates an array with three strings
var names = [];                           //creates an empty array
var values = [1,2,];                      //AVOID! Creates an array with 2 or 3 items
var options = [,,,,,];                    //AVOID! creates an array with 5 or 6 items

// To get and set array values, you use square brackets and provide the zero-based numeric index of the value, as shown here:

var colors = ["red", "blue", "green"];              //define an array of strings
alert(colors[0]);                                   //display the first item
colors[2] = "black";                                //change the third item
colors[3] = "brown";                                //add a fourth item

// The number of items in an array is stored in the length property, which always returns 0 or more, as shown in the following example:

var colors = ["red", "blue", "green"];    //creates an array with three strings
var names = [];                           //creates an empty array

alert(colors.length);  //3
alert(names.length);   //0

// By setting the length property, you can easily remove items from or add items to the end of the array. 

var colors = ["red", "blue", "green"];    //creates an array with three strings
colors.length = 2;
alert(colors[2]);              //undefined

//  If the length were set to a number greater than the number of items in the array, the new items would each get filled with the value of undefined

var colors = ["red", "blue", "green"];    //creates an array with three strings
 colors.length = 4;
alert(colors[3]);        //undefined

// The length property can also be helpful in adding items to the end of an array, as in this example:

var colors = ["red", "blue", "green"];    //creates an array with three strings
colors[colors.length] = "black";            //add a color (position 3)
colors[colors.length] = "brown";            //add another color (position 4)

// The last item in an array is always at position length - 1, so the next available open slot is at position length. 

var colors = ["red", "blue", "green"];   //creates an array with three strings
colors[99] = "black";                        //add a color (position 99)
alert(colors.length);    //100

// In this code, the colors array has a value inserted into position 99, resulting in a new length of 100 (99 + 1).

// Detecting Arrays
// Array.isArray() method. The purpose of this method is to definitively determine if a given value is an array regardless of the global execution context in which it was created

if (Array.isArray(value)){
     //do something on the array
 }

 // Conversion Methods

 // The toString() and valueOf() methods return the same value when called on an array. The result is a comma-separated string that contains the string equivalents of each value in the array, which is to say that each item has its toString()
 var colors = ["red", "blue", "green"];        //creates an array with three strings
 alert(colors.toString());      //red,blue,green
 alert(colors.valueOf());       //red,blue,green
 alert(colors);                 //red,blue,green

 var person1 = {
      toLocaleString : function () {
          return "Nikolaos";
      },

      toString : function() {
          return "Nicholas";
      }
  };

  var person2 = {
      toLocaleString : function () {
          return "Grigorios";
      },

      toString : function() {
         return "Greg";
      }
  };

  var people = [person1, person2];
  alert(people);                                   //Nicholas,Greg
  alert(people.toString());                 //Nicholas,Greg
  alert(people.toLocaleString());     //Nikolaos,Grigorios


















