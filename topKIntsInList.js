
var tests = [{
	input: {
		List: [4,2,9,6,10,30],
		k: 3
	},
	output: [30,10,9]
},{
	input: {
		List: [-5, -10, 2000],
		k: 2
	},
	output: [2000,-5]
}]


var FindTheTopKIntsInList = function(List, k){
	if (List.length <= k) {
		return List;
	}

	var output = List.slice(0, k);
	// we require output to be sorted at all times
	// so sort the initial list
	output.sort(function(x,y){
		return x<y;
	});

	for (var i=k; i<List.length; ++i) {
		for (var j=0; j<output.length; ++j) {
			if (List[i] > output[j]) {
				output.splice(j,0,List[i]);
				if (List.length > k) {
					output.pop();
				}
				// kill this iteration
				j = output.length;
			}
		}
	}

	return output;
}

tests.forEach(function(test){
	var ans = FindTheTopKIntsInList(test.input.List, test.input.k);
	console.log('your answer:', ans);
	console.log('correct answer:', test.output);
});