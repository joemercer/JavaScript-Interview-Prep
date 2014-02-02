function solution(S) {
    if ((S.length % 2) !== 0){
        return 0;
    }
    
    var wordArray = S.split('');
    
    var leftParens = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    var rightParens = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    
    var stack = [];
    
    wordArray.forEach(function(character){
        if (leftParens[character]){
            stack.push(character);
        }
        else if (rightParens[character]){
            var prev = stack.pop();
            if (prev !== rightParens[character]){
                return 0;
            }
        }
    });
    
    if (stack.length !== 0){
        return 0;
    }
    
    return 1;
}