function randNumber(a, b) {
    return Math.floor(Math.random() * (b-a)) + a
}

console.log(randNumber(4, 25))