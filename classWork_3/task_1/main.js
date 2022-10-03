function roundNum(par1, par2) {
    if(par2 == true) {
        return Math.ceil(par1)
    } else {
        return Math.floor(par1)
    }
}

console.log(roundNum(38.1231, true))
console.log(roundNum(44.87123, false))
