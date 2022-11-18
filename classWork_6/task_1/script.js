const container = document.getElementsByClassName("calendar_container")

function createTable() {
    tb = "<table>"
        for(let i = 0; i < 7; i++) {
            tb += "<tr>"
            for(let j = 0; j < 7; j++) {
                tb += `<td>${j}`
                tb += "</td>"
            }
            tb += "<tr>"
        }
    tb += "</table>"
    
    container.appendChild(tb.innerHTML)
}

createTable()