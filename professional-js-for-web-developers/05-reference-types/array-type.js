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

// When toLocaleString() is called on the array, the result is "Nikolaos,Grigorios", because this calls toLocaleString() on each array item.

// The join() method accepts one argument, which is the string separator to use, and returns a string containing all items.
var colors = ["red", "green", "blue"];
alert(colors.join(","));      //red,green,blue
alert(colors.join("||"));     //red||green||blue

// 	If an item in the array is null or undefined, it is represented by an empty string in the result of join(), toLocaleString(), toString(), and valueOf().

// Stack Methods
// A stack is referred to as a last-in-first-out (LIFO) structure, meaning that the most recently added item is the first one removed. The insertion (called a push) and removal (called a pop) of items in a stack occur at only one point: the top of the stack. ECMAScript arrays provide push() and pop() specifically to allow stack-like behavior.

var colors = new Array();                         //create an array
var count = colors.push("red", "green");          //push two items
alert(count);  //2

count = colors.push("black");                     //push another item on
alert(count);  //3

var item = colors.pop();                          //get the last item
alert(item);   //"black"
alert(colors.length);  //2

// When pop() is called, it returns the string "black", which was the last value added to the array.

// Queue Methods
// A queue adds items to the end of a list and retrieves items from the front of the list. Because the push() method adds items to the end of an array, all that is needed to emulate a queue is a method to retrieve the first item in the array. The array method for this is called shift(), which removes the first item in the array and returns it

var colors = new Array();                      //create an array
var count = colors.push("red", "green");       //push two items
alert(count);  //2

count = colors.push("black");                  //push another item on
alert(count);  //3

var item = colors.shift();                    //get the first item
alert(item);  //"red"
alert(colors.length); //2

// ECMAScript also provides an unshift() method for arrays. As the name indicates, unshift() does the opposite of shift(): it adds any number of items to the front of an array and returns the new array length.

var colors = new Array();                            //create an array
var count = colors.unshift("red", "green");        //push two items
alert(count);  //2

count = colors.unshift("black");                   //push another item on
alert(count);  //3

var item = colors.pop();                           //get the first item
alert(item);  //"green"
alert(colors.length);  //2

// In this code, an array is created and then populated by using unshift(). First "red" and "green" are added to the array, and then "black" is added, resulting in an order of "black", "red", "green". When pop() is called, it removes the last item, "green", and returns it.

// Reordering Methods

// The reverse() method simply reverses the order of items in an array. 
var values = [1, 2, 3, 4, 5];
values.reverse();
alert(values);          //5,4,3,2,1

// This method is fairly straightforward but doesn't provide much flexibility, which is where the sort() method comes in.
// By default, the sort() method puts the items in ascending order—with the smallest value first and the largest value last. To do this, the sort() method calls the String() casting function on every item and then compares the strings to determine the correct order. 

var values = [0, 1, 5, 10, 15];
values.sort();
alert(values);      //0,1,10,15,5

// the sort() method changes that order based on their string equivalents
// the sort() method allows you to pass in a comparison function that indicates which value should come before which.

function compare(value1, value2) {
  if (value1 < value2) {
      return -1;
  } else if (value1 > value2) {
      return 1;
  } else {
      return 0;
  }
}

var values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values);   //0,1,5,10,15

// sort descending order:

function compare(value1, value2) {
 if (value1 < value2) {
     return 1;
 } else if (value1 > value2) {
     return -1;
 } else {
     return 0;
 }
}

var values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values);          //15,10,5,1,0

// simple compare
function compare(value1, value2){
      return value2 - value1;
  }

// Manipulation Methods
// The concat() method, for instance, allows you to create a new array based on all of the items in the current array.

var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);

alert(colors);       //red,green,blue
alert(colors2);    //red,green,blue,yellow,black,brown

// The next method, slice(), creates an array that contains one or more items already contained in an array. 
// slice() method may accept one or two arguments: the starting and stopping positions of the items to return. If only one argument is present, the method returns all items between that position and the end of the array. If there are two arguments, the method returns all items between the start position and the end position, not including the item in the end position.

var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1,4);

alert(colors2);   //green,blue,yellow,purple
alert(colors3);   //green,blue,yellow

// splice() is to insert items into the middle of an array, but there are three distinct ways of using this method
// Any number of items can be deleted from the array by specifying just two arguments: the position of the first item to delete and the number of items to delete.
// Items can be inserted into a specific position by providing three or more arguments: the starting position, 0 (the number of items to delete), and the item to insert. Optionally, you can specify a fourth parameter, fifth parameter, or any number of other parameters to insert

var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1);                  //remove the first item
alert(colors);       //green,blue
alert(removed);    //red - one item array

removed = colors.splice(1, 0, "yellow", "orange"); //insert two items at position 1
alert(colors);       //green,yellow,orange,blue
alert(removed);    //empty array

removed = colors.splice(1, 1, "red", "purple");    //insert two values, remove one
alert(colors);       //green,red,purple,orange,blue
alert(removed);    //yellow - one item array

// Location Methods
// ECMAScript 5 adds two item location methods to array instances: indexOf() and lastlndexOf(). Each of these methods accepts two arguments: the item to look for and an optional index from which to start looking. 

var numbers = [1,2,3,4,5,4,3,2,1];

 alert(numbers.indexOf(4));        //3
 alert(numbers.lastIndexOf(4));    //5

 alert(numbers.indexOf(4, 4));     //5
 alert(numbers.lastIndexOf(4, 4)); //3

 var person = { name: "Nicholas" };
 var people = [{ name: "Nicholas" }];
 var morePeople = [person];

 alert(people.indexOf(person));     //-1
 alert(morePeople.indexOf(person)); //0

// Iterative Methods
// Each of the methods accepts two arguments: a function to run on each item and an optional scope object in which to run the function (affecting the value of this). 
// receive three arguments: the array item value, the position of the item in the array, and the array object itself.

every() // Runs the given function on every item in the array and returns true if the function returns true for every item.

filter() // Runs the given function on every item in the array and returns an array of all items for which the function returns true.

forEach() // Runs the given function on every item in the array. This method has no return value.

map() // Runs the given function on every item in the array and returns the result of each function call in an array.

some() // Runs the given function on every item in the array and returns true if the function returns true for any one item.

// These methods do not change the values contained in the array.


// For every(), the passed-in function must return true for every item in order for the method to return true; otherwise, it returns false. 
var numbers = [1,2,3,4,5,4,3,2,1];

  var everyResult = numbers.every(function(item, index, array){
      return (item > 2);
     });

  alert(everyResult);       //false

  var someResult = numbers.some(function(item, index, array){
      return (item > 2);
  });

  alert(someResult);       //true

// filter(), which uses the given function to determine if an item should be included in the array that it returns.

var numbers = [1,2,3,4,5,4,3,2,1];

var filterResult = numbers.filter(function(item, index, array){
   return (item > 2);
});

alert(filterResult);   //[3,4,5,4,3]
// This method is very helpful when querying an array for all items matching some criteria.

// The map() method also returns an array. Each item in the array is the result of running the passed-in function on the original array item in the same location. 

var numbers = [1,2,3,4,5,4,3,2,1];

var mapResult = numbers.map(function(item, index, array){
   return item * 2;
});

alert(mapResult);   //[2,4,6,8,10,8,6,4,2]

// The last method is forEach(), which simply runs the given function on every item in an array. There is no return value and is essentially the same as iterating over an array using a for loop. 

var numbers = [1,2,3,4,5,4,3,2,1];

numbers.forEach(function(item, index, array){
   //do something here
});

// Reduction Methods
//  reduce() and reduceRight(). Both methods iterate over all items in the array and build up a value that is ultimately returned. The reduce() method does this starting at the first item and traveling toward the last, whereas reduceRight() starts at the last and travels toward the first.

// You can use the reduce() method to perform operations such as adding all numbers in an array.

var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
 return prev + cur;
});
alert(sum); //15

// The first time the callback function is executed, prev is 1 and cur is 2. The second time, prev is 3 (the result of adding 1 and 2), and cur is 3 (the third item in the array). This sequence continues until all items have been visited and the result is returned.

// The decision to use reduce() or reduceRight() depends solely on the direction in which the items in the array should be visited. They are exactly equal in every other way.
