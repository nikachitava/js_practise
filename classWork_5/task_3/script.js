const amount = document.getElementById('amount')
const percent = document.getElementById('percent')
const lenght = document.getElementById('lenght')
const loan = document.getElementById('loan')


function getLoan(){
    return parseInt(amount.value) + (parseInt(amount.value) * parseInt(percent.value) * parseInt(lenght.value) / 100)
}
function convert() {
    parseInt(amount.value) + (parseInt(amount.value) * parseInt(percent.value) * parseInt(lenght.value) / 100)
    loan.innerHTML = `სულ გადასახდელი: ${getLoan()}`
    createTable()
    
}


function createTable() {
    var body = document.getElementsByTagName("body")[0];
  
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    for (var j = 1; j <= parseInt(lenght.value)*12; j++) {
        var row = document.createElement("tr")
  
        var cell = document.createElement("td");
        var cellText = document.createTextNode("თვე: " + j);
    
        cell.appendChild(cellText);
        row.appendChild(cell);

       // var taxPerMonth = parseInt()
        cell = document.createElement("td");
        cellText = document.createTextNode("გადასახდელი თანხა: " + getLoan()/12);

        cell.appendChild(cellText);
        row.appendChild(cell);

        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
}

