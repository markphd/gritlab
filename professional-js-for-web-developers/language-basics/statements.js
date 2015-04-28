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

// Labeled statement
start: for (var i=0; i < count; i++) { alert(i);
}
// In this example, the label start can be referenced later by 
// using the break or continue statement.


// The break and continue Statements
var num = 0;
for (var i=1; i < 10; i++) { if (i % 5 == 0) {
	break; 
	}
	num++; 
}
alert(num); //4
// in this example loop breaks when i % 5 == 0 and exits out of loop

var num = 0;
for (var i=1; i < 10; i++) {
	if (i % 5 == 0) {
		continue;
	};
	num++
};
alert(num);
// in this example when if statement is true, it returns to the loop but 
// when initialization (i=10) is met, the last increment didn't occur


var num = 0;
outermost:
	for (var i=0; i < 10; i++) {
		for (var j=0; j < 10; j++) { if (i == 5 && j == 5) {
			break outermost; 
		}
		num++; 
	}
}
alert(num); //55

// The with Statement
with(location){
var qs = search.substring(1); var hostName = hostname;
var url = href;
}

// In strict mode, the with statement is not allowed and is considered a syntax error.
// It is widely considered a poor practice to use the with statement in production code because of its negative performance impact and the difficulty in debugging code contained in the with statement.


// The switch Statement

switch (i) {
	case 25:
		alert("25");
		break;
	case 35:
		alert("35");
		break;
	case 45:
		alert("45");
		break;
	default:
		alert("Other");
}

//switch with different data types
switch ('hello world') { 
	case 'hello' + ' world':
		alert('Greeting was found.');
		break;
	case 'goodbye':
		alert('Closing was found.');
		break; 
	default:
		alert('Unexpected message was found.');
}

// The switch statement compares values using the identically equal operator, 
// so no type coercion occurs (for example, the string "10" is not equal to the number 10).
