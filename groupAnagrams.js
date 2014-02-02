// Given an array of strings of length n with each word having
// an average of m characters, group all anagrams into a cluster

var groupAnagrams = function(words){

	var all = {};
	// {
	// 	1: [
	// 		{
	// 			charMap: {},
	//			match: true,
	// 			matches: []
	// 		}
	// 	]
	// }

	words.forEach(function(word){

		var copy = Object.create(all);

		// all existing possible anagram matches
		var possibilities = [];
		if (copy[word.length]){
			possibilities = copy[word.length];
		}
		else {
			all[word.length] = [];
		}

		// charMap of current word
		var charMap = {};
		var characters = word.split('');
		characters.forEach(function(character){

			// create the charMap for this word
			if (charMap[character]) {
				charMap[character] = charMap[character] + 1;
			}
			else {
				charMap[character] = 1;
			}

			// check against existing words
			possibilities.forEach(function(possibility){
				if (possibility.charMap[character]){
					possibility.charMap[character] = possibility.charMap[character] - 1;
				}
				else {
					possibility.match = false;
				}
				if (possibility.charMap[character] < 0){
					possibility.match = false;
				}
			});

		});

		// check if we matched any existing words as an anagram
		var didMatch = false;
		possibilities.forEach(function(possibility){
			for (var key in possibility.charMap) {
				if (possibility.charMap[key] > 0) {
					possibility.match = false;
				}
			}
			if (possibility.match) {
				possibility.matches.push(word);
				didMatch = true;
				return;
			}
		});

		// add new possible anagram
		if (!didMatch) {
			all[word.length].push({
				charMap: charMap,
				match: true,
				matches: [word]
			});
		}

	});

	// structure everything for output
	var output = [];
	for (var key in all) {
		all[key].forEach(function(word){
			word.matches.forEach(function(match){
				output.push(match);
			});
		});
	}

	return output;

};

// run it
console.log(groupAnagrams([
	'sweet', 'gonb','bat', 'tab','','a', 'a', 'cat', 'pplea', 'atc', 'bong', 'apple'
]));


