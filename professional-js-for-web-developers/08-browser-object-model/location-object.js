// ● THE LOCATION OBJECT
// One of the most useful BOM objects is location, which provides information about the document that is currently loaded in the window, 
// as well as general navigation functionality. The location object is unique in that it is a property of both window and document; 
// both window.location and document.location point to the same object. 

function getQueryStringArgs(){

//get query string without the initial ?
var qs = (location.search.length > 0 ? location.search.substring(1) : ""),

//object to hold data
args = {},

//get individual items
items = qs.length ? qs.split("&") : [],
item = null,
name = null,
value = null,

//used in for loop
i = 0,
len = items.length;

//assign each item onto the args object
for (i=0; i < len; i++){
item = items[i].split("=");
  name = decodeURIComponent(item[0]);
  value = decodeURIComponent(item[1]);

  if (name.length) {
  args[name] = value;
}
}

return args;
}

// The first step in this function is to strip off the question mark from the beginning of the query string. 
// This happens only if location.search has one or more characters. 
// The arguments will be stored on the args object, which is created using object-literal format. 
// Next, the query string is split on the ampersand character, returning an array of strings in the format name=value. 
// The for loop iterates over this array and then splits each item on the equal sign, returning an array where the first item is the name of the argument and the second item is the value. The name and value are each decoded using decodeURIComponent() (since query-string arguments are supposed to be encoded). 
// Last, the name is assigned as a property on the args object and its value is set to value.

//assume query string of ?q=javascript&num=10

var args = getQueryStringArgs();

alert(args["q"]);     //"javascript"
alert(args["num"]);   //"10"



// Manipulating the Location
// The browser location can be changed in a number of ways using the location object. 
// The first, and most common, way is to use the assign() method and pass in a URL, as in the following example:

location.assign ("http://www.wrox.com");

// both of the following perform the same behavior as calling assign() explicitly
window.location = "http://www.wrox.com";
location.href = "http://www.wrox.com";

// Changing various properties on the location object can also modify the currently loaded page. 
// The hash, search, hostname, pathname, and port properties can be set with new values that 
// alter the current URL, as in this example:

//assume starting at http://www.wrox.com/WileyCDA/

//changes URL to "http://www.wrox.com/WileyCDA/#section1"
location.hash = "#section1";

//changes URL to "http://www.wrox.com/WileyCDA/?q=javascript"
location.search = "?q=javascript";

//changes URL to "http://www.yahoo.com/WileyCDA/"
location.hostname = "www.yahoo.com";

//changes URL to "http://www.yahoo.com/mydir/"
location.pathname = "mydir";

//changes URL to "http://www.yahoo.com:8080/WileyCDA/

// Each time a property on location is changed, with the exception of hash, 
// the page reloads with the new URL.


// Location replace()

<!DOCTYPE html>
<html>
<head>
  <title>You won't be able to get back here</title>
</head>
  <body>
  <p>Enjoy this page for a second, because you won't be coming back here.</p>
  <script type="text/javascript">
                setTimeout(function () {
                       location.replace("http://www.wrox.com/");
               }, 1000);
  </script>
</body>
</html>

// If this page is loaded into a web browser, it will redirect to www.wrox.com after a second. 
// At that point, the Back button will be disabled, and you won't be able to 
// navigate back to this example page without typing in the complete URL again.


// Location reload()
// To force a reload from the server, pass in true as an argument like this:

location.reload();       //reload - possibly from cache
location.reload(true);   //reload - go back to the server

// Any code located after a reload() call may or may not be executed, depending on factors 
// such as network latency and system resources. 
// For this reason, it is best to have reload() as the last line of code.