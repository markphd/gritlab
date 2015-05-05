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

