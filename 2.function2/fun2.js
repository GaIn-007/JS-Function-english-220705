function palindrome(message) {
    let tmpstr = "";
    for (let i = message.length - 1; i >= 0; i--) {
        tmpstr += message.charAt(i);
    }
    return tmpstr === message;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true