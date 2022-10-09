function roundNum(number, par) {
    if(par == true) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}