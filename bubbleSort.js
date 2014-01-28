// Let's try to sort this list
var unsorted = [5,3,1,7,6,2,9,8,10,4];

var BubbleSort = function(unsorted) {
	var next, temp;
	for (var i = 0; i < unsorted.length; ++i) {
		for (var j = (i+1); j < unsorted.length; ++j) {
			if (unsorted[i] > unsorted[j]) {
				temp = unsorted[j];
				unsorted[j] = unsorted[i];
				unsorted[i] = temp;
			}
		}
	}
};

// Run it
BubbleSort(unsorted);

// Let's make sure it worked
console.log(unsorted);