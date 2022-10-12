function randomChars() {
    let result = '';
    for(let i = 0; i < 40; i++) {
        let randNum = Math.floor(Math.random() * 25 + 1) + 10
        result += randNum.toString(36)
    }
    return result
}

console.log(randomChars())