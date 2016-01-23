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



