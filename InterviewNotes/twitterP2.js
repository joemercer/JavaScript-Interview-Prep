function solution1(S) {
    
    // create a map of S's characters to their counts
    var sChars = S.split('');
    var sCharMap = {};
    sChars.forEach(function(sChar){
        if (sCharMap[sChar]) {
            sCharMap[sChar] = sCharMap[sChar] + 1;
        }
        else {
            sCharMap[sChar] = 1;
        }
    });
    
    // for each character, mod the count by two and sum them up
    var sum = 0;
    for (var key in sCharMap) {
        sum = sum + (sCharMap[key] % 2);
    }
    
    if (sum <= 1){
        // 1 => one character in the middle, everything else paired up
        // 0 => no character in the middle, everything paired up
        return 1;
    }
    return 0;

}