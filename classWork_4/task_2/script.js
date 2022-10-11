function countA(string) {
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        if(string.at(i) === 'a') {
            count ++;
        }
    }
    return count;
}

console.log(countA('nikaa'))
console.log(countA('nik'))
console.log(countA('ariaqwa'))
console.log(countA('aaaaaaaaaa'))