// Ugh this is terrible
// I think I either need an explicit problem,
// or I need a general algorithm to make
// else I'm just randomly manipulating stuff


// Problem 1:
// Given mapping of items to tags, generate mapping of tags to items

// Problem 2:
// Given mapping of items to tags, generate mapping of items to items that share a tag

// Problem 3:
// Given a mapping of items to tags, generate a graph with items as vertices and edges 
// representing items that share a similar tag

// Problem 4:
// Given a mapping of items to tags, generate a graph with tags as vertices and edges
// representing tags that share a similar item


// ?
// Can you do some of these tasks without transforming the mapping into a graph
// How should you store the graph - array of nodes, single root node, mapping of thing to node, hmm...



// Six degrees of seperation
var numMovies = 10;
var numActorsPerMovie = 1;

// First, let's create a data structure of movies
// with the actors in each movie
var moviesWithActors = {};
for (var i=0; i < numMovies; ++i) {
	moviesWithActors['m'+i] = [];
	for (var j=0; j < numActorsPerMovie; ++j) {
		var newActor = 'a'+Math.floor(10*Math.random());
		if (moviesWithActors['m'+i].indexOf(newActor) === -1) {
			moviesWithActors['m'+i].push(newActor);
		}
	}
}

// Let's shuffle this data around so that we have
// a data structure of actors with the movies
// that they've been in
var actorsInMovies = {};
for (var movie in moviesWithActors) {
	moviesWithActors[movie].forEach(function(actor){
		if (actorsInMovies[actor]) {
			actorsInMovies[actor].push(movie);
		}
		else {
			actorsInMovies[actor] = [movie];
		}
	});
}

// Let's shuffle this data around some more
// so that we have an array of movies with
// related movies

var moviesRelationships = {};

for (var movie in moviesWithActors) {
	moviesRelationships[movie] = [];
	moviesWithActors[movie].forEach(function(actor){
		actorsInMovies[actor].forEach(function(otherMovie){
			if (moviesRelationships[movie].indexOf(otherMovie) === -1) {
				moviesRelationships[movie].push(otherMovie);
			}
		});
	});
}

// Now let's build a graph
function Node(data, adjacent) {
	this.data = data;
	adjacent = adjacent ? adjacent : [];
	this.adjacent = adjacent;
};
Node.prototype.addAdjacent = function(node) {
	this.adjacent.push(node);
};

var movieNodes = {};

for (var movie in moviesRelationships) {
	movieNodes[movie] = new Node(movie);
}

for (var movie in moviesRelationships) {
	moviesRelationships[movie].forEach(function(otherMovie){
		movieNodes[movie].addAdjacent(movieNodes[otherMovie]);
	});
}

// And now let's do BFS to see which are the two nodes furthest apart
var BFS = function(root, visit) {
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

var furthestDistance = 0;

// Run it
for (var movie in movieNodes) {
	BFS(movieNodes[movie], function(node, previous){
		if (previous && (typeof(previous.distanceFromRoot) === 'number')) {
			node.distanceFromRoot = previous.distanceFromRoot + 1;
		}
		else {
			node.distanceFromRoot = 0;
		}
		if (node.distanceFromRoot > furthestDistance) {
			furthestDistance = node.distanceFromRoot;
		}
	});
	// wipe out the visited states
	for (var movie2 in movieNodes) {
		movieNodes[movie2].visited = false;
		movieNodes[movie2].distanceFromRoot = null;
	}
}

console.log('And the furthest node from the root has a distance of:');
console.log(furthestDistance);










