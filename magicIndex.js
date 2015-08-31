// A magic index in an array A is an index such that A[i] = i. Given a sorted array of integers, write a method to find a magic index.


var tests = [{
	input: [-2,-1,0,2,3,5,6],
	output: 5
}];


var findMagicIndex = function(A) {
	if (A.length === 0){
		return "No Magic Index";
	}
	var mid = Math.floor(A.length/2);
	if (A[mid] === mid) {
		return mid; // is the Magic Index
	}
	else if (A[mid] > mid) {
		findMagicIndex(A.slice(0,mid-1));
	}
	else {
		findMagicIndex(A.slice(mid-1,A.length-(mid-1)));
	}
};

tests.forEach(function(test){
	var ans = findMagicIndex(test.input);
	console.log('Your answer:', ans);
	console.log('Correct answer:', test.output);
});

// !!! haha
// recursion doesn't work so well in javascript