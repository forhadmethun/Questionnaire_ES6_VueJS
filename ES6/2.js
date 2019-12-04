function isPalindrome(str) {
    var mainStr = "", reverseStr = "";
    for (var i = 0; i < str.length; i++){
        if(str[i] != ' ')mainStr+=str[i];
    }
    for (var i= str.length - 1; i >= 0; i--){
        if(str[i] != ' ')reverseStr+=str[i];
    }
    if(mainStr == reverseStr){
        return true;
    }
    return false;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("nurses run"));
console.log(isPalindrome("4567654"));
console.log(isPalindrome("4567653"));