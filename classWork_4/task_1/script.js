function strLen(text) {
    let count = 0;
    while(text) {
        text = text.slice(1)
        count ++;
    }
    return count;
}


console.log(strLen("nikaaa")) //6
console.log(strLen("aq")) //2
console.log(strLen("amksoqpwiska")) //12
console.log(strLen("")) //0
