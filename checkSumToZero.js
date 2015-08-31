// function that checks to see if any three elements in an array
// sum to zero

// naive, O(n^3)
var checkIfAnyTriplesSumToZero = function(A) {
	for (var i=0; i<A.length-2; ++i) {
		for (var j=i+1; j<A.length-1; ++j) {
			for (var k=j+1; k<A.length; ++k) {
				if (A[i]+A[j]+A[k] === 0) {
					return [i,j,k];
				}
			}
		}
	}
};


// O(n^2)
// http://stackoverflow.com/questions/2070359/finding-three-elements-in-an-array-whose-sum-is-closest-to-an-given-number
var checkIfAnyTriplesSumToZero = function(A) {
	// first sort A
	// O(nlogn)
	A.sort(function(a,b){
		return b-a;
	});

	// we'll fix i;
	for (var i=0; i<A.length; ++i) {
		// then increment counters along both sides of A
		var j = 0;
		var k = A.length-1;

		// when j>=k then we've tried all possibilities
		while (j<k) {
			// remove dups
			if (i === j) {
				j = j+1;
				continue;
			}
			if (j === k) {
				k = k+1;
				continue;
			}

			var sum = A[i]+A[j]+A[k] === 0;

			if (sum < 0) {
				// too small, need to increase j
				j = j+1;
			}
			else if (sum > 0) {
				// too big, need to decrease k
				k = k-1;
			}
			else { // sum === 0
				return [i,j,k]; // found :)
			}
		}
	}
};