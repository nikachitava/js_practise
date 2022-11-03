const amount = document.getElementById('amount')
const percent = document.getElementById('percent')
const lenght = document.getElementById('lenght')
const output = document.getElementById('output')

function convert() {
    let money
    money = parseInt(amount.value) * (1 + parseInt(percent.value) / 100) * parseInt(lenght.value)
    output.innerHTML = money
    return money    
}

