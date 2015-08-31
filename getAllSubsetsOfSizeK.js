


var getAllSubsetsOfSize = function(k, A) {
	if (k === 0) {
		return [[]];
	}
	var smallSubsets = getAllSubsetsOfSize(k-1, A);
	var subsets = [];
	for (var i=0; i<smallSubsets.length; ++i) {
		for (var j=i; j<A.length; ++j) {
			var index = smallSubsets[i].indexOf(A[j]);
			if (index === -1) {
				subsets.push(smallSubsets[i].slice());
				subsets[subsets.length-1].push(A[j]);
			}
		}
	}
	return subsets;
};

var A = [0,1,2,3];
var subsets = getAllSubsetsOfSize(A.length,A);

console.log(subsets);

var getAllSubsets = function(A) {
	for (var i=0; i<A.length; ++i) {

	}
};