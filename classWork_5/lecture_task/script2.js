const amount = document.getElementById('amount')
const percent = document.getElementById('percent')
const lenght = document.getElementById('lenght')
const loan = document.getElementById('loan')


const tax = 10 
function test(){
    return parseInt(amount.value) + (parseInt(amount.value) * parseInt(percent.value) * 3 / 100)
}
function convert() {
    console.log(test())
    createTable(800, 150)
    
}

function createTable(height, width) {
    
    tb = "<table height="+height+", width="+width+" border=1>"
    for(i=0; i<36; i++){
        tb += "<tr>"
        for(j=0; j<1; j++){
            tb += `<td>თვე ${i+1}`
            tb += `</td>`
            for(k=0; k<1; k++){
                tb += `<td>გადასახდელი თანხა თვეში: ${test()/12}`
                tb += `</td>`
            }
        }
        tb += "</tr>"
    }
    tb += "</table>"
    document.write(tb)

}

