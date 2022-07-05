function countWords(message) {
    m = message.match(/[a-zA-Z]+/g);
    return m.length;
}
countWords('Good morning, I love JavaScript.'); // should return 5