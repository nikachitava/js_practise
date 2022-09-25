function createTable(width, height, color, border) {
    const tbl = document.createElement("table")
    const tblBody = document.createElement("tbody")

    for (let i = 0; i < 2; i++) {
        const row = document.createElement("tr")

        for (let j = 0; j < 2; j++) {
            const cell = document.createElement("td")
            row.appendChild(cell)
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

createTable(500, 300, "red", 2)