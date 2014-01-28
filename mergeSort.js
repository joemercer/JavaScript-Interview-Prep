// Let's try to sort this list
var unsorted = [5,3,1,7,6,2,9,8,10,4];
console.log('Let\'s sort this list:');
console.log(unsorted);

// We all know the hard work is handled by Merge
var Merge = function(a, b){
	var merged = [];
	var i = 0;
	var j = 0;
	while (i < a.length && j < b.length) {
		if (a[i] < b[j]) {
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

// Define MergeSort
var MergeSort = function(unsorted) {
	if (unsorted.length < 2) {
		return unsorted;
	}
	else {
		var middle = Math.floor(unsorted.length / 2);
		var left = MergeSort(unsorted.splice(0, middle));
		var right = MergeSort(unsorted);
		return Merge(left, right);
	}
};

// Run it
var sorted = MergeSort(unsorted);

// Let's make sure it worked
console.log('Sorted using MergeSort:');
console.log(sorted);




