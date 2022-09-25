function createTable(tr, td) {
    const tbl = document.createElement("table")
    const tblBody = document.createElement("tbody")

    for (let i = 0; i < tr; i++) {
        const row = document.createElement("tr")

        for (let j = 0; j < td; j++) {
            const cell = document.createElement("td")
            row.appendChild(cell)
        }
        tblBody.appendChild(row)
    }
    tbl.appendChild(tblBody)
    document.body.appendChild(tbl)
    tbl.setAttribute("border", "2")
    tbl.setAttribute("width", 500)
    tbl.setAttribute("height", 300)
}

createTable(2, 9)