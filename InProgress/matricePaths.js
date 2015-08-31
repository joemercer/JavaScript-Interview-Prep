
// Shortest paths Given mn array
var G = [[1,2,3,4],
				 [3,4,2,6],
		 	 	 [8,9,2,3]];

var H = [[],[],[]];

var getLengthOfShortestPath = function(G) {
	var M = G.length;
	var N = G[0].length;

	var s = {i:0,j:0};
	var t = {i:M-1,j:N-1};



};






var findInGraph = function(n, G) {
	G.visited = true;
	if (G === n) {
		return "found";
	}
	else {
		for (var i=0; i<G.adjacent.length; ++i) {
			if (!x.visited) {
				if (findInGraph(n, x)) {
					return "found";
				}
			}
		});
	}
	return false;
}