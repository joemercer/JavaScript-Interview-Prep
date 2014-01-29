// NOT DONE YET
// requires a findLargestSubarray algorithm.

// First let's make ourselves a MergeSort that
// sorts based on a comparison function
var Merge = function(a, b, comparer){
	var merged = [];
	var i = 0;
	var j = 0;
	while (i < a.length && j < b.length) {
		if (comparer(a[i], b[j])) {
			merged.push(a[i]);
			i = i + 1;
		}
		else {
			merged.push(b[j]);
			j = j + 1;
		}
	}
	if (i === a.length) {
		while (j !== b.length) {
			merged.push(b[j]);
			j = j + 1;
		}
	}
	if (j === b.length) {
		while (i !== a.length) {
			merged.push(a[i]);
			i = i + 1;
		}
	}
	return merged;
};
var MergeSort = function(unsorted, comparer) {
	if (unsorted.length < 2) {
		return unsorted;
	}
	else {
		var middle = Math.floor(unsorted.length / 2);
		var left = MergeSort(unsorted.splice(0, middle), comparer);
		var right = MergeSort(unsorted, comparer);
		return Merge(left, right, comparer);
	}
};

var FindTallestTower = function(people) {
	var sortedByDim1 = MergeSort(people, function(a, b){
		return a.height < b.height;
	});



};





