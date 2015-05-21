// Write a JavaScript program to convert degrees centigrade into degrees Fahrenheit
function degFahren(){
	var cent = prompt("Enter centigrade to convert.");
	var result = (9/5)* parseInt(cent) + 32;
	console.log('Converted fahrenheit: ' + result);
}

degFahren();


// prompt() function to get two numbers from the user. It then adds those two numbers together and writes the result to the page
function add(a, b){
    var num1 = prompt("Enter first number: ");
    var num2 = prompt("Enter second number: ");
    console.log(parseInt(num1) + parseInt(num2));
}

add();

