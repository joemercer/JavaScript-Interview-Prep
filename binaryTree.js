// Define a class Node
function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
};

// Helper function for connecting Nodes to the left
Node.prototype.addLeft = function(node) {
	this.left = node;
};

// Helper function for connecting Nodes to the right
Node.prototype.addRight = function(node) {
	this.right = node;
};

// Output a Node's data
Node.prototype.log = function(buffer) {
	console.log(this.data.toString());
};

// Let's start with adding a bunch of sorted Nodes
// to a Binary Tree
var sortedNodes = [
	new Node(1),
	new Node(2),
	new Node(3),
	new Node(4),
	new Node(5),
	new Node(6),
	new Node(7)
];

var binaryTree = sortedNodes[3];
binaryTree.addLeft(sortedNodes[1]);
binaryTree.addRight(sortedNodes[5]);
binaryTree.left.addLeft(sortedNodes[0]);
binaryTree.left.addRight(sortedNodes[2]);
binaryTree.right.addLeft(sortedNodes[4]);
binaryTree.right.addRight(sortedNodes[6]);

// In order traversal
var InOrderTraversal = function(node) {
	if (node.left) {
		InOrderTraversal(node.left);
	}
	node.log();
	if (node.right) {
		InOrderTraversal(node.right);
	}
}

// Run it
console.log('In order traversal of our Binary Tree:');
InOrderTraversal(binaryTree);

