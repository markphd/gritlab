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



