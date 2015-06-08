// Chapter 3: Decisions, Loops, and Functions

Validation of user input is probably one of the most common uses of decision making in JavaScript, but it's far from being the only use.
In JavaScript, you can change the flow of the code's execution depending on whether a condition is true or false, using an if statement or a switch statement. 

Precedence
The == and != comparison operators have the lowest order of precedence, and the rest of the comparison operators, <, >, <=, and >=, have an equal precedence.

var age = prompt("Enter age:", "");
var isOverSixty = parseInt(age) > 60;
document.write("Older than 60: " + isOverSixty);

// The if Statement

if (roomTemperature > 80)
{
   roomTemperature = roomTemperature - 10;
   alert("It's getting hot in here");
   alert("Air conditioning switched on");
}


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml">
   <body>

   <script type="text/javascript">

   var degFahren = Number(prompt("Enter the degrees Fahrenheit",32));
   var degCent;

   degCent = 5/9 * (degFahren - 32);

   document.write(degFahren + "\xB0 Fahrenheit is " + degCent +
      "\xB0 centigrade<br />");

   if (degCent < 0)
   {
      document.write("That's below the freezing point of water");
   }

   if (degCent == 100)
      document.write("That's the boiling point of water");

   </script>

   </body>
   </html>

   // There are no braces here, so if the condition is true, the only code to execute is the first line below the if statement. When you want to execute multiple lines in the case of the condition being true, braces are required.
   // You saw that when degFahren is 32, degCent will be 0. So your if statement will be "Is 0 equal to 100?" The answer is clearly false, and the code won't execute. Again, when you set degFahren to 31, degCent will be calculated to be -0.55555555556; "Is −0.55555555556 equal to 100?" is also false, and the code won't execute.

// Logical Operators


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<body>

<script type="text/javascript">

var myAge = Number(prompt("Enter your age",30));

if (myAge >= 0 && myAge <= 10)
{
   document.write("myAge is between 0 and 10<br />");
}

if ( !(myAge >= 0 && myAge <= 10) )
{
   document.write("myAge is NOT between 0 and 10<br />");
}

if ( myAge >= 80 || myAge <= 10 )
{
   document.write("myAge is 80 or above OR 10 or below<br />");
}

if ( (myAge >= 30 && myAge <= 39) || (myAge >= 80 && myAge <= 89) )
{
   document.write("myAge is between 30 and 39 or myAge is between 80 and 89");
}

</script>

</body>
</html>


// Switch Case
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <body>

    <script type="text/javascript">

    var secretNumber = prompt("Pick a number between 1 and 5:", "");
    secretNumber = parseInt(secretNumber);

    switch (secretNumber)
    {
    case 1:
       document.write("Too low!");
       break;

    case 2:
       document.write("Too low!");
       break;

    case 3:
       document.write("You guessed the secret number!");
       break;

    case 4:
       document.write("Too high!");
       break;

    case 5:
       document.write("Too high!");
       break;

    default:
       document.write("You did not enter a number between 1 and 5.");
       break;
    }
    document.write("<br />Execution continues here");

    </script>

    </body>
    </html>



// Executing the Same Code for Different Cases
switch (secretNumber)
{
  case 1:
  case 2:
    document.write("Too low!");
  break;


  case 3:
    document.write("You guessed the secret number!");
  break;


  case 4:
  case 5:
    document.write("Too high!");
  break;    

  default:
    document.write("You did not enter a number between 1 and 5.");
  break;
} 

// If the case statement for the value 1 is matched, execution simply continues until the break statement under case 2, so effectively you can execute the same code for both cases. 
// the same technique is used for the case statements with values 4 and 5.



// Looping
// Looping means repeating a block of code when a condition is true. This is achieved in JavaScript with the use of two statements, the while statement and the for statement.
// The for statement enables you to repeat a block of code a certain number of times. 
// The for…in Loop
// It enables you to loop through each element in the array without having to know how many elements the array actually contains.

// The break and continue Statements
// the break statement can also be used as part of the for and while loops when you want to exit the loop prematurely. 



