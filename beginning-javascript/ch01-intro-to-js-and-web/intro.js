You'll sometimes hear JavaScript referred to as ECMAScript. The ECMA (European Computer Manufacturers Association) is a private organization that develops standards in information and communication systems. One of the standards they control is for JavaScript, which they call ECMAScript. 

Basically, the job of a web server is to hold lots of web pages on its hard drive. When a browser, usually on a different computer, requests a web page contained on that web server, the web server loads it from its own hard drive and then passes the page back to the requesting computer via a special communications protocol called Hypertext Transfer Protocol (HTTP). 

The biggest advantage of external files is code reuse.
Another advantage of using external files is the browser will cache them, much as it does with images shared between pages. If your files are large, this could save download time and also reduce bandwidth usage.

<html>
    <body bgcolor="WHITE">
    <p>Paragraph 1</p>
    <script type="text/javascript">
       document.bgColor = "RED";
    </script>
    </body>
    </html>


A function makes life easier for you as a programmer because you don't have to think about how the function does the task — you can just concentrate on when you want the task done.

document.getElementById('ResultsP').innerHTML = 'Hello';

"Get me the document element with id ResultsP and set the HTML inside that element to Hello World!"

One of the main headaches involved in creating web-based JavaScript is the differences between different web browsers, the level of HTML they support, and the functionality their JavaScript interpreters can handle. 
The good news is that to a much greater extent than ever before, browser creators are complying with standards set by organizations such as the W3C. 

So how do you make your web pages degrade gracefully? You can do this by using JavaScript to determine which browser the web page is running in after it has been partially or completely loaded. You can use this information to determine what scripts to run or even to redirect the user to another page written to make best use of her particular browser.



