// find words such that continually cutting off the last letter of the word is also a word 

// you can use /usr/share/dict/words

var fs = require('fs');
var words = fs.readFileSync('/usr/share/dict/words').toString().split("\n");

var numLetters = 7;

// set up a cache of words with i letters
var cache = {};
for (var i=0; i<=numLetters; ++i) {
	cache[i] = words.filter(function(word){
		return word.length === i;
	});
}

var possibilities = cache[numLetters].filter(function(word){
	for (var i=1; i<=(numLetters-1); ++i) {
		if (cache[i].indexOf(word.slice(0,i)) === -1) {
			// didn't find the ith substring to be a word
			return false;
		}
	}
	return true; // found all the ith substrings to be words
});

console.log(possibilities);