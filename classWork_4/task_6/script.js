function randomChars(n) {
    let result = '';
    for(let i = 0; i < n; i++) {
        let randNum = Math.floor(Math.random() * 25 + 1) + 10
        result += randNum.toString(36)
    }
    return result
}

console.log(randomChars(10))