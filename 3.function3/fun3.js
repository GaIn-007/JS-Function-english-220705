function alphabetSort(message) {
    tmparr =[];
    for (let i = 0; i <= message.length - 1; i++) {
        tmparr.push(message.charAt(i));
    }
    tmparr.sort();
    return tmparr.join('');
}
alphabetSort('hello'); // should return 'ehllo'