// Define a class Node
function Node(data, next) {
	this.data = data;
	this.next = next;
};

// Output a comma delimited linked list of Nodes
Node.prototype.log = function(buffer) {
	if (!buffer) {
		buffer = '';
	}
	buffer = buffer.concat(this.data.toString());
	if (this.next) {
		buffer = buffer.concat(', ');
		this.next.log(buffer);
	}
	else {
		console.log(buffer);
	}
};

// Create a linked list of Nodes
var linkedList = 
	new Node(1, 
		new Node(2, 
			new Node(3, null)));

// Output it => 1, 2, 3
linkedList.log();