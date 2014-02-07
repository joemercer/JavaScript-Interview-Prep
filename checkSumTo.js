//!!! better would be to do a dynamic programming solution

// Given an array (numbers) find the k-tuples (k) that sum to
// a target number (sumTo)

// Pull in some useful algorithms

var sum = function(numbers) {
	var sum = 0;
	for (var i=0; i<numbers.length; ++i) {
		sum = sum + numbers[i];
	}
	return sum;
}

var makeArray = function(existingArray, added) {
	var toReturn = [];
	for (var i=0; i<existingArray.length; ++i) {
		toReturn.push(existingArray[i]);
	}
	toReturn.push(added);
	return toReturn;
}

// Start answering the question

// note, this answer has numbers.length choose k complexity

var checkSumTo = function(k, numbers, sumTo){

	var possibilities = [];

	// 1st generation
	for (var i=0; i<numbers.length; ++i) {
		possibilities.push([numbers[i]]);
	}

	var indexOfOnlyMissingOne = 0;

	// k+1th to k-1th generations
	for (var i=1; i<k-1; ++i) {

		if (i === k-2) {
			indexOfOnlyMissingOne = possibilities.length;
		}

		for (var j=0; j<possibilities.length; ++j) {
			for (var m=0; m<numbers.length; ++m) {
				var possible = makeArray(possibilities[j], numbers[m]);
				if (sum(possible) <= sumTo) {
					possibilities.push(possible);
				}
			}
		}

	}

	// kth generation looking for answers
	var answers = [];
	for (var j=indexOfOnlyMissingOne; j<possibilities.length; ++j) {
		for (var m=0; m<numbers.length; ++m) {
			var possible = makeArray(possibilities[j], numbers[m]);
			if ((sum(possible) === sumTo) && possible.length === k) {
				answers.push(possible);
			}
		}
	}

	return answers;
}

var yourAnswer = checkSumTo(6, [1,2,3,4,5,6,7,8,9,10,11,12], 13);

console.log(yourAnswer); // will probably be lot's of text





















