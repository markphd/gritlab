// The ECMAScript Date type is based on an early version of java.util.Date from Java
var now = new Date();

// The Date.parse() method accepts a string argument representing a date
var someDate = new Date(Date.parse("May 25, 2004"));

var someDate = new Date("May 25, 2004");
// This code produces the same result as the previous example.

// The arguments for Date.UTC() are the year, the zero-based month (January is 0, February is 1, and so on), the day of the month (1 through 31), and the hours (0 through 23), minutes, seconds, and milliseconds of the time. 
//January 1, 2000 at midnight GMT
var y2k = new Date(Date.UTC(2000, 0));

//May 5, 2005 at 5:55:55 PM GMT
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));

//get start time
var start = Date.now();

//call a function
doSomething();

//get stop time
var stop = Date.now(),
 result = stop - start;

//get start time
var start = +new Date();

//call a function
doSomething();

//get stop time
var stop = +new Date(),
result = stop - start;

// Inherited Methods
// the Date type overrides toLocaleString(), toString(), and valueOf(), though unlike the previous types, each method returns something different.

//  toLocaleString() method returns the date and time in a format appropriate for the locale in which the browser is being run

// The toString() method typically returns the date and time with time-zone information, and the time is typically indicated in 24-hour notation (hours ranging from 0 to 23). 

// // Internet Explorer 8
// toLocaleString() - Thursday, February 01, 2007 12:00:00 AM
// toString() - Thu Feb 1 00:00:00 PST 2007
// // Firefox 3.5
// toLocaleString() - Thursday, February 01, 2007 12:00:00 AM
// toString() - Thu Feb 01 2007 00:00:00 GMT-0800 (Pacific Standard Time)
// // Safari 4
// toLocaleString() - Thursday, February 01, 2007 00:00:00
// toString() - Thu Feb 01 2007 00:00:00 GMT-0800 (Pacific Standard Time)
// // Chrome 4
// toLocaleString() - Thu Feb 01 2007 00:00:00 GMT-0800 (Pacific Standard Time)
// toString() - Thu Feb 01 2007 00:00:00 GMT-0800 (Pacific Standard Time)
// // Opera 10
// toLocaleString() - 2/1/2007 12:00:00 AM
// toString() - Thu, 01 Feb 2007 00:00:00 GMT-0800

// The valueOf() method for the Date type doesn't return a string at all, because it is overridden to return the milliseconds representation of the date so that operators (such as less-than and greater-than) will work appropriately for date values.

var date1 = new Date(2007, 0, 1);          //"January 1, 2007"
var date2 = new Date(2007, 1, 1);          //"February 1, 2007"

alert(date1 < date2);  //true
alert(date1 > date2);  //false

//  the milliseconds representation of January 1, 2007, is less than that of February 1, 2007, the less-than operator returns true when the dates are compared, providing an easy way to determine the order of dates.


// Date-Formatting Methods
// toDateString()—Displays the date's day of the week, month, day of the month, and year in an implementation-specific format.
// toTimeString()—Displays the date's hours, minutes, seconds, and time zone in an implementation-specific format.
// toLocaleDateString()—Displays the date's day of the week, month, day of the month, and year in an implementation- and locale-specific format.
// toLocaleTimeString()—Displays the date's hours, minutes, and seconds in an implementation-specific format.
// toUTCString()—Displays the complete UTC date in an implementation-specific format.


