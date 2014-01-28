// Define a class Node
function Node(data, adjacent) {
	this.data = data;
	adjacent = adjacent ? adjacent : [];
	this.adjacent = adjacent;
};

// Helper function for connecting Nodes
Node.prototype.addAdjacent = function(node) {
	this.adjacent.push(node);
};

// Helper function for outputting a Node
Node.prototype.log = function() {
	console.log(this.data.toString());
};

// Create some Nodes
var node1 = new Node('1');
var node2 = new Node('2');
var node3 = new Node('3');
var node4 = new Node('4');
var node5 = new Node('5');

// Add some relationships
node1.addAdjacent(node2);
node1.addAdjacent(node3);

node2.addAdjacent(node3);
node2.addAdjacent(node4);

node4.addAdjacent(node5);


// We'll define the Graph as starting from node1
var graph = node1;

// Define Breadth First Search
var BFS = function(root, visit) {
	var queue = [];
	root.visited = true;
	visit(root);
	queue.push(root);

	var current;
	while(queue.length !== 0) {
		current = queue.shift();
		current.adjacent.forEach(function(node){
			if (!node.visited) {
				node.visited = true;
				visit(node);
				queue.push(node);
			}
		});
	}
};

// First we'll make sure that we visited all the Nodes
// in the graph
console.log('The Nodes in the graph are:');

// Run it
BFS(graph, function(node){
	node.log();
});

// How about we try something more interesting than
// saying the value of each Node?
console.log('And now for something completely different...');

// Wipe out the last run
node1.visited = false;
node2.visited = false;
node3.visited = false;
node4.visited = false;
node5.visited = false;

// Let's find the shortest path between two Nodes
var start = node1;
var end = node5;
console.log('The shortest path between ' + end.data + ' and ' + start.data + ' is:');

// A varient of BFS to help us solve the above problem
var BFS2 = function(root, visit) {
	var queue = [];
	root.visited = true;
	visit(root, null);
	queue.push(root);

	var current;
	while(queue.length !== 0) {
		current = queue.shift();
		current.adjacent.forEach(function(node){
			if (!node.visited) {
				node.visited = true;
				visit(node, current);
				queue.push(node);
			}
		});
	}
};

// Run it!

BFS2(start, function(node, previous){
	node.previous = previous;
	if (node.data === end.data) {
		var current = node;
		current.log();
		while(current.previous) {
			current.previous.log();
			current = current.previous;
		}
	}
});



