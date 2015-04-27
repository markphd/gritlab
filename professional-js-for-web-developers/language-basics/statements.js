////////////////
// STATEMENTS //
////////////////

// The if Statement
if (i > 25)
       alert("Greater than 25.");    //one-line statement
else {
   alert("Less than or equal to 25.");  //block statement
}

/////////////////////////////////////////////////////////////////////////
// It's considered best coding practice to always use block statements //
/////////////////////////////////////////////////////////////////////////

if (i > 25) {
    alert("Greater than 25.");
} else if (i < 0) {
    alert("Less than 0.");
} else {
    alert("Between 0 and 25, inclusive.");
}

// The do-while Statement
// The do-while statement is a post-test loop, 
// meaning that the escape condition is evaluated only after the code inside the loop has been executed

var i = 0;
do {
   i += 2;
} while (i < 10);

// The while Statement
// he while statement is a pretest loop. 
// This means the escape condition is evaluated before the code inside the loop has been executed. 
var i = 0;
 while (i < 10) {
    i += 2;
 }

 // The for Statement
 // The for statement is also a pretest loop with the added capabilities of variable initialization 
 // before entering the loop and defining postloop code to be executed
var count = 10;
for (var i=0; i < count; i++){
   alert(i);
}

// Nothing can be done with a for loop that can't be done using a while loop.

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// It's important to note that there's no need to use the var keyword inside the for loop initialization //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

for(var x=0; x<5; x++){ var z = "i am z"; console.log(x); }
console.log(z); // 'i am z'

// a variable defined inside the loop is accessible outside the loop as well


// The for-in Statement
// The for-in statement is a strict iterative statement.
// It is used to enumerate the properties of an object.
for (var propName in window) {
    document.write(propName);
}
