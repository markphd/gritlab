#### Document Object Model (DOM)

The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. The DOM represents a document as a hierarchical tree of nodes, allowing developers to add, remove, and modify individual parts of the page.

Any HTML or XML document can be represented as a hierarchy of nodes using the DOM.

A document node represents every document as the root. 

The document element is the outermost element in the document within which all other elements exist

#### The Node Type

	Node.ELEMENT_NODE (1)
	Node.ATTRIBUTE_NODE (2)
	Node.TEXT_NODE (3)
	Node.CDATA_SECTION_NODE (4)
	Node.ENTITY_REFERENCE_NODE (5)
	Node.ENTITY_NODE (6)
	Node.PROCESSING_INSTRUCTION_NODE (7)
	Node.COMMENT_NODE (8)
	Node.DOCUMENT_NODE (9)
	Node.DOCUMENT_TYPE_NODE (10)
	Node.DOCUMENT_FRAGMENT_NODE (11)
	Node.NOTATION_NODE (12)

All nodes in a document have relationships to other nodes. These relationships are described in terms of traditional family relationships as if the document tree were a family tree.

Each node has a `childNodes` property containing a `NodeList`. A `NodeList` is an array-like object used to store an ordered list of nodes that are accessible by position.

Keep in mind that a `NodeList` is *not* an instance of Array even though its values can be accessed using bracket notation and the length property is present

It is often said that a `NodeList` is a living, breathing object rather than a snapshot of what happened at the time it was first accessed.

The following example shows how nodes stored in a NodeList may be accessed via bracket notation or by using the item() method:

    var firstChild = someNode.childNodes[0];
    var secondChild = someNode.childNodes.item(1);
    var count = someNode.childNodes.length;

    function convertToArray(nodes){
           var array = null;
           try {
               array = Array.prototype.slice.call(nodes, 0);  //non-IE and IE9+
           } catch (ex) {
               array = new Array();
               for (var i=0, len=nodes.length; i < len; i++){
                   array.push(nodes[i]);
               }
           }

           return array;
       }

The `convertToArray()` function first attempts to use the easiest manner of creating an array.

All nodes contained within a childNodes list have the same parent, so each of their parentNode properties points to the same node.

Note that if there’s only one child node, both nextSibling and previousSibling will be null.

#### Manipulating Nodes

The most often-used method is appendChild(), which adds a node to the end of the childNodes list.

	var returnedNode = someNode.appendChild(newNode);
	alert(returnedNode == newNode);         //true
	alert(someNode.lastChild == newNode);   //true

no DOM node may exist in more than one location in a document. So if you call appendChild()and pass in the first child of a parent, as the following example shows, it will end up as the last child:

	//assume multiple children for someNode
	var returnedNode = someNode.appendChild(someNode.firstChild);
	alert(returnedNode == someNode.firstChild);  //false
	alert(returnedNode == someNode.lastChild);   //true

The insertBefore() method accepts two arguments: the node to insert and a reference node.

The replaceChild() method accepts two arguments: the node to insert and the node to replace. The node to replace is returned by the function and is removed from the document tree completely while the inserted node takes its place.

To remove a node without replacing it, you can use the removeChild() method. This method accepts a single argument, which is the node to remove. 

	//remove first child
	var formerFirstChild = someNode.removeChild(someNode.firstChild);
	                   
	//remove last child
	var formerLastChild = someNode.removeChild(someNode.lastChild);

Not all node types can have child nodes, and these methods will throw errors if you attempt to use them on nodes that don’t support children.

#### Other Methods

The cloneNode() method doesn’t copy JavaScript properties that you add to DOM nodes, such as event handlers. This method copies only attributes and, optionally, child nodes. Everything else is lost.

The last remaining method is normalize(). Its sole job is to deal with text nodes in a document subtree. If an empty text node is found, it is removed; if text nodes are immediate siblings, they are joined into a single text node.

#### The Document Type

JavaScript represents document nodes via the Document type. In browsers, the document object is an instance of HTMLDocument (which inherits from Document) and represents the entire HTML page. The document object is a property of window and so is accessible globally. A Document node has the following characteristics:

	nodeType is 9.
	nodeName is "#document".
	nodeValue is null.
	parentNode is null.
	ownerDocument is null.
	Child nodes may be a DocumentType (maximum of one), Element (maximum of one), ProcessingInstruction, or Comment.

#### Document Children

There are two built-in shortcuts to child nodes. The first is the documentElement property, which always points to the <html> element in an HTML page. The document element is always represented in the childNodes list as well, but the documentElement property gives faster and more direct access to that element. 

	var html = document.documentElement;      //get reference to <html>
	alert(html === document.childNodes[0]);   //true
	alert(html === document.firstChild);      //true

Both document.documentElement and document.body are supported in all major browsers.

#### Document Information

The document object, as an instance of HTMLDocument, has several additional properties that standard Document objects do not have. These properties provide information about the web page that is loaded. The first such property is title, which contains the text in the <title> element and is displayed in the title bar or tab of the browser window. This property can be used to retrieve the current page title and to change the page title such that the changes are reflected in the

The next three properties are all related to the request for the web page: URL, domain, and referrer. The URL property contains the complete URL of the page (the URL in the address bar), the domain property contains just the domain name of the page, and the referrer property gives the URL of the page that linked to this page.

#### Locating Elements

Perhaps the most common DOM activity is to retrieve references to a specific element or sets of elements to perform certain operations. This capability is provided via a number of methods on the document object. The Document type provides two methods to this end: getElementById() and getElementsByTagName().

The getElementById() method accepts a single argument — the ID of an element to retrieve — and returns the element if found, or null if an element with that ID doesn’t exist. The ID must be an exact match, including character case, to the id attribute of an element on the page.

The getElementsByTagName() method is another commonly used method for retrieving element references. It accepts a single argument — the tag name of the elements to retrieve — and returns a NodeList containing zero or more elements. In HTML documents, this method returns an HTMLCollection object, which is very similar to a NodeList in that it is considered a “live” collection. For example, the following code retrieves all <img> elements in the page and returns an HTMLCollection:

	var images = document.getElementsByTagName("img");

The HTMLCollection object has an additional method, namedItem(), that lets you reference an item in the collection via its name attribute. For example, suppose you had the following <img> element in a page:

	<img src="myimage.gif" name="myImage">

A reference to this <img> element can be retrieved from the images variable like this:

	var myImage = images.namedItem("myImage");

You can also access named items by using bracket notation, as shown in the following example:

	var myImage = images["myImage"];


#### Document Writing

One of the older capabilities of the document object is the ability to write to the output stream of a web page. This capability comes in the form of four methods: write(), writeln(), open(), and close(). The write() and writeln() methods each accept a string argument to write to the output stream. write() simply adds the text as is, whereas writeln() appends a new-line character (\n) to the end of the string. 

The open() and close() methods are used to open and close the web page output stream, respectively. Neither method is required to be used when write() or writeln() is used during the course of page loading.

#### The Element Type

The Element type represents an XML or HTML element, providing access to information such as its tag name, children, and attributes. An Element node has the following characteristics:

	nodeType is 1.
	nodeName is the element’s tag name.
	nodeValue is null.
	parentNode may be a Document or Element.
	Child nodes may be Element, Text, Comment, ProcessingInstruction, CDATASection, or EntityReference.


	var div = document.getElementById("myDiv");
	alert(div.tagName);    //"DIV"
	alert(div.tagName == div.nodeName);   //true

#### HTML Elements

All HTML elements are represented by the HTMLElement type, either directly or through subtyping. The HTMLElement inherits directly from Element and adds several properties. Each property represents one of the following standard attributes that are available on every HTML element:

- id — A unique identifier for the element in the document.
- title — Additional information about the element, typically represented as a tooltip.
- lang — The language code for the contents of the element (rarely used).
- dir — The direction of the language, "ltr" (left-to-right) or "rtl" (right-to-left); also rarely used.
- className — The equivalent of the class attribute, which is used to specify CSS classes on an element. 	

	<div id="myDiv" class="bd" title="Body text" lang="en" dir="ltr"></div>

All of the information specified by this element may be retrieved using the following JavaScript code:

	var div = document.getElementById("myDiv");
	alert(div.id);         //"myDiv"
	alert(div.className);  //"bd"
	alert(div.title);      //"Body text"
	alert(div.lang);       //"en"
	alert(div.dir);        //"ltr"

Assigning new values to properties:

	div.id = "someOtherId";
	div.className = "ft";
	div.title = "Some other text";
	div.lang = "fr";
	div.dir ="rtl";	

Not all of the properties effect changes on the page when overwritten. Changes to id or lang will be transparent to the user (assuming no CSS styles are based on these values), whereas changes to title will be apparent only when the mouse is moved over the element.	

####  Getting Attributes

The three primary DOM methods for working with attributes are getAttribute(), setAttribute(), and removeAttribute(). 

	var div = document.getElementById("myDiv");
	alert(div.getAttribute("id"));         //"myDiv"
	alert(div.getAttribute("class"));      //"bd"
	alert(div.getAttribute("title"));      //"Body text"
	alert(div.getAttribute("lang"));       //"en"
	alert(div.getAttribute("dir"));        //"ltr"

The getAttribute() method can also retrieve the value of custom attributes that aren’t part of the formal HTML language. 

Note that attribute names are case-insensitive, so "ID" and "id" are considered the same attribute. Also note that, according to HTML5, custom attributes should be prepended with data- in order to validate.

### Setting Attributes

setAttribute() accepts two arguments: the name of the attribute to set and the value to set it to. If the attribute already exists, setAttribute() replaces its value with the one specified; if the attribute doesn’t exist, setAttribute() creates it and sets its value. 

	div.setAttribute("id", "someOtherId");
	div.setAttribute("class", "ft");
	div.setAttribute("title", "Some other text");
	div.setAttribute("lang","fr");
	div.setAttribute("dir", "rtl");

### Removing Attributes

removeAttribute(), which removes the attribute from the element altogether. This does more than just clear the attribute’s value; it completely removes the attribute from the element

### The attributes Property

The Element type is the only DOM node type that uses the attributes property. The attributes property contains a NamedNodeMap, which is a “live” collection similar to a NodeList. Every attribute on an element is represented by an Attr node, each of which is stored in the NamedNodeMap object. A NamedNodeMap object has the following methods:

- getNamedItem(name) — Returns the node whose nodeName property is equal to name.

- removeNamedItem(name) — Removes the node whose nodeName property is equal to name from the list.

- setNamedItem(node) — Adds the node to the list, indexing it by its 
nodeName property.

- item(pos) — Returns the node in the numerical position pos.

To retrieve id attribute of an element:

	var id = element.attributes.getNamedItem("id").nodeValue;

Shorthand code:

	var id = element.attributes["id"].nodeValue;

It’s possible to use this notation to set attribute values as well, retrieving the attribute node and then setting the nodeValue to a new value, as this example shows:

	element.attributes["id"].nodeValue = "someOtherId";	

The removeNamedItem() method functions the same as the removeAttribute() method on the element — it simply removes the attribute with the given name. The following example shows how the sole difference is that removeNamedItem() returns the Attr node that represented the attribute:

	var oldAttr = element.attributes.removeNamedItem("id");

The setNamedItem() is a rarely used method that allows you to add a new attribute to the element by passing in an attribute node, as shown in this example:

	element.attributes.setNamedItem(newAttr);

Generally speaking, because of their simplicity, the getAttribute(), removeAttribute(), and setAttribute() methods are preferred to using any of the preceding attributes methods.

The one area where the attributes property is useful is to iterate over the attributes on an element. This is done most often when serializing a DOM structure into an XML or HTML string. 

### Creating Elements

New elements can be created by using the document.createElement() method. This method accepts a single argument, which is the tag name of the element to create.

	var div = document.createElement("div");

	div.id = "myNewDiv";
	div.className = "box";

The element can be added to the document tree using appendChild(), insertBefore(), or replaceChild(). The following code adds the newly created element to the document’s <body> element:

	document.body.appendChild(div);

Once the element has been added to the document tree, the browser renders it immediately. Any changes to the element after this point are immediately reflected by the browser.

### Element Children

Elements may have any number of children and descendants since elements may be children of elements. The childNodes property contains all of the immediate children of the element, which may be other elements, text nodes, comments, or processing instructions. 

	var ul = document.getElementById("myList");
	var items = ul.getElementsByTagName("li");

### The Text Type

Text nodes are represented by the Text type and contain plain text that is interpreted literally and may contain escaped HTML characters but no HTML code. A Text node has the following characteristics:

	nodeType is 3.
	nodeName is "#text".
	nodeValue is text contained in the node.
	parentNode is an Element.
	Child nodes are not supported.

The following methods allow for manipulation of the text in the node:

- appendData(text) — Appends text to the end of the node.

- deleteData(offset, count) — Deletes count number of characters starting at position offset.

- insertData(offset, text) — Inserts text at position offset.

- replaceData(offset, count, text) — Replaces the text starting at offset through offset + count with text.

- splitText(offset) — Splits the text node into two text nodes separated at position offset.

- substringData(offset, count) — Extracts a string from the text beginning at position offset and continuing until offset + count.

	<div>Hello World!</div>

	var textNode = div.firstChild;  //or div.childNodes[0]

Change value:

	div.firstChild.nodeValue = "Some other message";

As long as the node is currently in the document tree, the changes to the text node will be reflected immediately.

### Creating Text Nodes

New text nodes can be created using the document.createTextNode() method, which accepts a single argument 

	var textNode = document.createTextNode("<strong>Hello</strong> world!");

When a text node is added as a sibling of another text node, the text in those nodes is displayed without any space between them.

### Normalizing Text Nodes

Sibling text nodes can be confusing in DOM documents since there is no simple text string that can’t be represented in a single text node. Still, it is not uncommon to come across sibling text nodes in DOM documents, so there is a method to join sibling text nodes together. This method is called normalize()


When normalize() is called on a parent of two or more text nodes, those nodes are merged into one text node whose nodeValue is equal to the concatenation of the nodeValue properties of each text node. Here’s an example:

	var element = document.createElement("div");
	element.className = "message";
	                   
	var textNode = document.createTextNode("Hello world!");
	element.appendChild(textNode);
	                   
	var anotherTextNode = document.createTextNode("Yippee!");
	element.appendChild(anotherTextNode);
	                   
	document.body.appendChild(element);
	                   
	alert(element.childNodes.length);  //2
	                   
	element.normalize();
	alert(element.childNodes.length);  //1
	alert(element.firstChild.nodeValue);  //"Hello world!Yippee!"


### Splitting Text Nodes

The Text type has a method that does the opposite of normalize(): the splitText() method splits a text node into two text nodes, separating the nodeValue at a given offset. 

	var element = document.createElement("div");
	element.className = "message";
	                   
	var textNode = document.createTextNode("Hello world!");
	element.appendChild(textNode);
	                   
	document.body.appendChild(element);
	                   
	var newNode = element.firstChild.splitText(5);
	alert(element.firstChild.nodeValue);  //"Hello"
	alert(newNode.nodeValue);             //" world!"
	alert(element.childNodes.length);     //2

In this example, the text node containing the text "Hello world!" is split into two text nodes at position 5. Position 5 contains the space between "Hello" and "world!", so the original text node has the string "Hello" and the new one has the text " world!" (including the space).

Splitting text nodes is used most often with DOM parsing techniques for extracting data from text nodes.


### The Comment Type

Comments are represented in the DOM by the Comment type. A Comment node has the following characteristics:

- nodeType is 8.

- nodeName is "#comment".

- nodeValue is the content of the comment.

- parentNode is a Document or Element.

- Child nodes are not supported.

- The Comment type inherits from the same base as the Text type, so it has all of the same string-manipulation methods except splitText(). 

	<div id="myDiv"><!-- A comment --></div>

the comment is a child node of the <div> element, which means it can be accessed like this:

	var div = document.getElementById("myDiv");


### The CDATASection Type	

CDATA sections are specific to XML-based documents and are represented by the CDATASection type.


### The DocumentType Type

The DocumentType type is not used very often in web browsers and is supported in only Firefox, Safari, and Opera.


### The DocumentFragment Type

Of all the node types, the DocumentFragment type is the only one that has no representation in markup. 

	var fragment = document.createDocumentFragment();
	var ul = document.getElementById("myList");
	var li = null;
	                   
	for (var i=0; i < 3; i++){
	    li = document.createElement("li");
	    li.appendChild(document.createTextNode("Item " + (i+1)));
	    fragment.appendChild(li);
	}
	                   
	ul.appendChild(fragment);    

 The contents of a document fragment can be added to a document via appendChild() or insertBefore(). When a document fragment is passed in as an argument to either of these methods, all of the document fragment’s child nodes are added in that spot; the document fragment itself is never added to the document tree. 


### The Attr Type

Element attributes are represented by the Attr type in the DOM. The Attr type constructor and prototype are accessible in all browsers, including Internet Explorer beginning with version 8. Technically, attributes are nodes that exist in an element’s attributes property.

Even though they are nodes, attributes are not considered part of the DOM document tree. Attribute nodes are rarely referenced directly, with most developers favoring the use of getAttribute(), setAttribute(), and removeAttribute().

	var attr = document.createAttribute("align");
	attr.value = "left";
	element.setAttributeNode(attr);
	                   
	alert(element.attributes["align"].value);       //"left"
	alert(element.getAttributeNode("align").value); //"left"
	alert(element.getAttribute("align"));           //"left"

Once the attribute is added, it can be accessed in any number of ways: via the attributes property, using getAttributeNode(), or using getAttribute(). Both attributes and getAttributeNode() return the actual Attr node for the attribute, whereas getAttribute() returns only the attribute value.


### WORKING WITH THE DOM