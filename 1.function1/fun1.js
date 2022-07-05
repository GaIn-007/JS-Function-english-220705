function reverseString(message) {
    let tmpstr = "";
    for (let i = message.length - 1; i >= 0; i--) {
        tmpstr += message.charAt(i);
    }
    return tmpstr;
}
reverseString('hello'); // should return 'olleh'