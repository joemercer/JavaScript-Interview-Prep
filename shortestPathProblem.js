// Shortest Path Problem

var s;
var t;

// ## 1. Given a graph with nodes s and t, find a path from s to t.

var findPathFrom = function(x, y, path) {
	if (x.visited) {
		return "no path";
	}
	x.visited = true;
	if (x === y) {
		// add the final step in the graph, y
		return path.push(y);
	}
	else {
		for (var i=0; i<x.adjacent.length; ++i) {
			if (!x.adjacent[i].visited) {
				// add the prior step in the path as we DFS through the graph
				var path = findPathFrom(x.adjacent[i],y,path.push(x));
				if (path !== "no path") {
					return path;
				}
			}
		};
	}
	return "no path";
}



// ## 2. Given a graph with nodes s and t, find the shortest path from s to t. (Given that the length of each edge is the same).

var BFS = function(G, path, check) {
	var Q = [G];
	while (Q.length > 0) {
		var node = Q.pop();
		if (node.visited) {
			// Keep popping things off the queue until you get something new.
			node = Q.pop();
		}
		var path = check(node, path);
		if (path.done) {
			return path.path;
		}
		else {
			node.adjacent.forEach(function(adjacent){
				Q.unshift(adjacent);
			});
		}
	}
	return "unsuccessful";
};


BFS(s, [], function(n, path){
	n.visited = true;
	if (n === t) {
		return {
			done: true,
			path: path.push(n)
		};
	}
	return {
		done: false,
		path: path.push(n);
	};
});


// ## 3. Given a graph with nodes s and t, find the shortest path from s to t (all edges have the same length) where G is an array of arrays and s,t are just indexes

// can hope from vertically, horizonally, and diagonally

var G; // array of arrays

var s; // (s.x,s.y)
var t; // (t.x,t.y)

// Iterate over all of G
// and at each spot put an object with {.x, .y, .visited=false}

var BFS = function(G) {
	var s = G[s.x][s.y];
	var t = G[t.x][t.y];
	s.path = [s];

	var Q = [s];
	while (Q.length > 0) {

		// find the next square to visit
		var square = Q.pop();
		if (square.visited) {
			square = Q.pop(); // only need to visit each node once
		}
		square.visited = true;
		var path = square.path; 

		// check to see if we've found a path
		if (square === t) {
			return path;
		}
		else {
			// add all the square's adjacent squares
			for (var i=-1; i<2; ++i) {
				for (var j=-1; j<2; ++j) {
					if (i !== j) {

						// Check to make sure we're not off the Grid

						var next = G[square.x+i][square.y+j];
						next.path = path.push(next);
						Q.unshift(next);
					}
				}
			}
		}


	}

};



// Use an iterative DFS to just find a path

var G;
var s;
var t;

var DFS = function(G) {
	var s = s;
	s.path = [s];

	var Stack = [s];
	while (Stack.length > 0) {
		var node = Stack.pop();
		if (node.visited) {
			node = Stack.pop();
		}
		node.visited = true;

		if ()


	}



}







