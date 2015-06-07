//SYNTAX


//CASE-SENSITIVITY
//variable
var test = "mark";

//function names
var functionTest = function () {
    console.log('Hello!');
}

// Use NAMES_LIKE_THIS for constant values.
// Use @const to indicate a constant (non-overwritable) pointer (a variable or property).
// Never use the const keyword as it's not supported in Internet Explorer.
// Source: http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml

//IDENTIFIERS
var _underscore = '';
var $dollar = '';
var camelCase = '';

//NOTE: Keywords, reserved words, true, false, and null cannot be used as identifiers.

//STRICT MODE
// ECMAScript 5 introduced the concept of strict mode.
// Strict mode is a different parsing and execution model for JavaScript,
// where some of the erratic behavior of ECMAScript 3 is addressed and errors are thrown for unsafe activities

var wordCount = function (w) {
    'use script';
    //do something
};

//STATEMENTS
var total = 1 + 2;

// Note: Even though a semicolon is not required at the end of statements, it is recommended to always include one.
// it is considered a best practice to always use code blocks with control statements
// Using code blocks for control statements makes the intent clearer, and there's less chance for errors when changes need to be made.

