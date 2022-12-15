const quantity = document.getElementById('quantity')
const start_number = document.getElementById('start_number')
const last_number = document.getElementById('last_number')
const button = document.getElementById('btn')
const Output = document.getElementById('output')

const numbers = []

function generate() {
    if(parseInt(start_number.value) > parseInt(last_number.value)) {
        console.log("First number is bigger than last number")
        return 0
    }
    for(let i = parseInt(start_number.value); i < parseInt(last_number.value); i++) {
        if((i % 2) == 1) {
            numbers.unshift(i);
        }
    }
    let Sum = 0
    let output = " "
    for(let i = 0; i < parseInt(quantity.value); i++) {
        let randNum = Math.floor(Math.random() * numbers.length);
        console.log(numbers[randNum])
        Sum += numbers[randNum]
        output += numbers[randNum] + " "
    }
    output += "Summary of numbers: " + Sum
    Output.innerHTML = output
}

