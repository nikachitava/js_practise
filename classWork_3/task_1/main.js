/* Task 4 */
console.log('--------------- Task 4 --------------------------')

function roundNum(par1, par2) {
    if(par2 == true) {
        return Math.ceil(par1)
    } else {
        return Math.floor(par1)
    }
}

console.log(roundNum(38.1231, true))
console.log(roundNum(44.87123, false))

console.log('--------------- Task 7 --------------------------')

/* Task 7 */

function printRandNum(num1, num2) {
    return  Math.floor(Math.random() * (num2 - num1) ) + num1
}

console.log(printRandNum(10, 44))

console.log('--------------- Task 10 --------------------------')
function printNum(num, min, max) {
    for(let i = 0; i < num; i++) {
        console.log(Math.floor(Math.random() * (max - min) ) + min)
    }
}

printNum(4, 10, 40)

/* nnnnn */
