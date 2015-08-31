var Merge = function(a,b) {
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
}

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
}

function solution(K, A) {
    
    // sort the array using MergeSort O(nlogn)
    var sorted = MergeSort(A);
    
    var answer = 0;
    
    // work our way along the sorted array
    // pairing up the min and max
    var min = 0;
    var max = sorted.length-1;

    var oneDirection = 0;
    
    // only need to go one direction
    // the same numbers will pair up in the other direction
    // but we need to take into account the same number pairing up with itself
    while (min <= max) {
        if (min === max) {
            oneDirection = answer;
        }
        var combined = sorted[min] + sorted[max];
        if (combined > K) {
            max = max - 1;
        }
        else if (combined < K) {
            min = min + 1;
        }
        else {    
            answer = answer + 1;
            min = min + 1;
        }
    }

    // to take into account the same pairs
    // i.e. (4,1) and (1,4)
    answer = answer + oneDirection;
    
    // return the number of complimentary pairs
    return answer;
}