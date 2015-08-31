// Define a class Node
function Node(data, adjacent) {
	this.data = data;
	this.visited = false;
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

// Visit each node in the graph by logging it
// Then visit the node's adjacent nodes
var visit = function(node) {
	if (node.visited) {
		return;
	}
	node.visited = true;
	node.log();
	console.log('adjacent are', node.adjacent)
	for (var i=0; i<node.adjacent.length; ++i) {
		// !!! think I run into async problems here
		visit(node.adjacent[i]);
	}
};

// recursively call visit to visit each node in the graph
console.log('The Nodes in the graph are:');
visit(graph);

graph.adjacent.forEach(function(node){
	node.log()
})


