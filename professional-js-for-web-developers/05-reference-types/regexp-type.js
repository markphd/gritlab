// REGEXP
/*
* Match all instances of "at" in a string.
*/
var pattern1 = /at/g;

/*
*Match the first instance of "bat" or "cat", regardless of case.
*/
var pattern2 = /[bc]at/i;

/*
* Match all three-character combinations ending with "at", regardless of case.
*/
var pattern3 = /.at/gi;


// Meta characters
// ( [ { \ ^ $ | ) ] } ? * + .


/*
* Match the first instance of "bat" or "cat", regardless of case.
*/
var pattern1 = /[bc]at/i;

/*
* Match the first instance of "[bc]at", regardless of case.
*/
var pattern2 = /\[bc\]at/i;

/*
* Match all three-character combinations ending with "at", regardless of case.
*/
var pattern3 = /.at/gi;

/*
* Match all instances of ".at", regardless of case.
*/
var pattern4 = /\.at/gi;

// Regular expressions can also be created by using the RegExp constructor, which accepts two arguments: a string pattern to match and an optional string of flags to apply. 

/*
* Match the first instance of "bat" or "cat", regardless of case.
*/
var pattern1 = /[bc]at/i;
/*
* Same as pattern1, just using the constructor.
*/
var pattern2 = new RegExp("[bc]at", "i");

// Keep in mind that creating a regular expression using a literal is not exactly the same as creating a regular expression using the RegExp constructor. 

var re = null,
      i;

  for (i=0; i < 10; i++){
      re = /cat/g;
      re.test("catastrophe");
  }

  for (i=0; i < 10; i++){
      re = new RegExp("cat", "g");
      re.test("catastrophe");
  }

// The second loop uses the RegExp constructor to create the regular expression each time through the loop. Each call to test() returns true since a new instance of RegExp is created for each iteration.

var pattern1 = /\[bc\]at/i;

alert(pattern1.global);     //false
alert(pattern1.ignoreCase); //true
alert(pattern1.multiline);  //false
alert(pattern1.lastIndex);  //0
alert(pattern1.source);     //"\[bc\]at"

var pattern2 = new RegExp("\\[bc\\]at", "i");

alert(pattern2.global);     //false
alert(pattern2.ignoreCase); //true
alert(pattern2.multiline);  //false
alert(pattern2.lastIndex);  //0
alert(pattern2.source);     //"\[bc\]at"

// RegExp Instance Methods
// The primary method of a RegExp object is exec(), which is intended for use with capturing groups. This method accepts a single argument, which is the string on which to apply the pattern, and returns an array of information about the first match or null if no match was found. 

var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;

var matches = pattern.exec(text);
alert(matches.index);    //0
alert(matches.input);    //"mom and dad and baby"
alert(matches[0]);       //"mom and dad and baby"
alert(matches[1]);       //" and dad and baby"
alert(matches[2]);       //" and baby"

// When exec() is called on the string, a match is found. Because the entire string matches the pattern, the index property on the matches array is set to 0. The first item in the array is the entire matched string, the second contains the contents of the first capturing group, and the third contains the contents of the third capturing group.

var text = "cat, bat, sat, fat";
var pattern1 = /.at/;

var matches = pattern1.exec(text);
alert(matches.index);         //0
alert(matches[0]);            //cat
alert(pattern1.lastIndex);    //0

matches = pattern1.exec(text);
alert(matches.index);         //0
alert(matches[0]);            //cat
alert(pattern1.lastIndex);    //0

var pattern2 = /.at/g;

var matches = pattern2.exec(text);
alert(matches.index);         //0
alert(matches[0]);            //cat
alert(pattern2.lastIndex);    //0

matches = pattern2.exec(text);
alert(matches.index);         //5
alert(matches[0]);            //bat
alert(pattern2.lastIndex);    //8

// The first pattern in this example, pattern1, is not global, so each call to exec() returns the first match only ("cat"). The second pattern, pattern2, is global, so each call to exec() returns the next match in the string until the end of the string is reached.

var text = "000-00-0000";
var pattern = /\d{3}-\d{2}-\d{4}/;

if (pattern.test(text)){
   alert("The pattern was matched.");
}

// In this example, the regular expression tests for a specific numeric sequence. If the input text matches the pattern, then a message is displayed. This functionality is often used for validating user input, when you care only if the input is valid, not necessarily why it's invalid.

var pattern = new RegExp("\\[bc\\]at", "gi");
alert(pattern.toString());           // /\[bc\]at/gi
alert(pattern.toLocaleString());     // /\[bc\]at/gi

// Even though the pattern in this example is created using the RegExp constructor, the toLocaleString() and toString() methods return the pattern as if it were specified in literal format.


// RegExp Constructor Properties
// The RegExp constructor function has several properties. (These would be considered static properties in other languages.) These properties apply to all regular expressions that are in scope, and they change based on the last regular-expression operation that was performed. 

var text = "this has been a short summer";
var pattern = /(.)hort/g;

/*
* Note: Opera doesn't support
* Internet Explorer doesn't
*/
if (pattern.test(text)){
   alert(RegExp.input);               //this has been a short summer
   alert(RegExp.leftContext);         //this has been a
   alert(RegExp.rightContext);        // summer
   alert(RegExp.lastMatch);           //short
   alert(RegExp.lastParen);           //s
   alert(RegExp.multiline);           //false
}

// These verbose property names can be replaced with the short property names, although you must use bracket notation to access them, as shown in the following example, because most are illegal identifiers in ECMAScript:

var text = "this has been a short summer";
var pattern = /(.)hort/g;

/*
* Note: Opera doesn't short property
* Internet Explorer doesn't support
*/
if (pattern.test(text)){
   alert(RegExp.$_);               //this has been a short summer
   alert(RegExp["$`"]);            //this has been a
   alert(RegExp["$'"]);            // summer
   alert(RegExp["$&"]);            //short
   alert(RegExp["$+"]);            //s
   alert(RegExp["$*"]);            //false
}

var text = "this has been a short summer";
var pattern = /(‥)or(.)/g;

if (pattern.test(text)){
   alert(RegExp.$1);       //sh
   alert(RegExp.$2);       //t
}

// In this example, a pattern with two matching groups is created and tested against a string. Even though test() simply returns a Boolean value, the properties $1 and $2 are filled in on the RegExp constructor.


// Pattern Limitations
// Although ECMAScript's regular-expression support is fully developed, it does lack some of the advanced regular-expression features available in languages such as Perl.

// The \A and \Z anchors (matching the start or end of a string, respectively)
// Lookbehinds
// Union and intersection classes
// Atomic grouping
// Unicode support (except for matching a single character at a time)
// Named capturing groups
// The s (single-line) and x (free-spacing) matching modes
// Conditionals
// Regular-expression comments

// Despite these limitations, ECMAScript's regular-expression support is powerful enough for doing most pattern-matching tasks.
