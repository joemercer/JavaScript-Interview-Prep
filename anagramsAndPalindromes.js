var checkAnagram = function(a, b) {
	if (a.length !== b.length) {
		// => obviously can't be an anagram
		return false;
	}

	var aChars = a.split('');
	var aCharMap = {};
	aChars.forEach(function(aChar){
		if (aCharMap[aChar]) {
			aCharMap[aChar] = aCharMap[aChar] + 1;
		}
		else {
			aCharMap[aChar] = 1;
		}
	});

	var bChars = b.split('');
	for (var i=0; i<bChars.length; ++i) {
		if (aCharMap[bChars[i]]) {
			aCharMap[bChars[i]] = aCharMap[bChars[i]] - 1;
			if (aCharMap[bChars[i]] < 0) {
				// => b contains more of a type of character than a
				return false;
			}
		}
		else {
			// => b contains a character a doesn't
			return false;
		}
	}

	return true;
}

var checkPalindrome = function(a) {
	var min = 0;
	var max = a.length-1;

	while (min < max) {
		if (a[min] !== a[max]) {
			// => kth character doesn't equal n-kth character
			return false;
		}
		min = min+1;
		max = max-1;
	}

	return true;
}

// run it
var tests = [
	{
		input: 'sam',
		output: false
	},
	{
		input: 'sas',
		output: true
	},
	{
		input: 'saas',
		output: true
	},
	{
		input: 'satas',
		output: true
	},
	{
		input: 'sattas',
		output: true
	},
	{
		input: 'satlas',
		output: true
	}
];

tests.forEach(function(test){
	console.log(test.input);
	console.log(checkPalindrome(test.input));
});

console.log('And now for some anagrams');

console.log('bob','obb');
console.log(checkAnagram('bob','obb'));

console.log('apple','pepal');
console.log(checkAnagram('apple','pepal'));

console.log('apple','apppe');
console.log(checkAnagram('apple','apppe'));













