function createTable(tr, td, width, height, color, border) {
    const tbl = document.createElement("table")
    const tblBody = document.createElement("tbody")

    for (let i = 0; i < tr; i++) {
        const row = document.createElement("tr")

        for (let j = 0; j < td; j++) {
            const cell = document.createElement("td")
            const text = document.createTextNode(`row ${i} // column ${j}`);
            row.appendChild(cell)
            cell.appendChild(text);
        }
        tblBody.appendChild(row)
    }
    tbl.appendChild(tblBody)
    document.body.appendChild(tbl)
    tbl.setAttribute("border", border)
    tbl.setAttribute("width", width)
    tbl.setAttribute("height", height)
    tbl.style.backgroundColor = color
    
}

createTable(2, 4, 500, 300, "red", 2)