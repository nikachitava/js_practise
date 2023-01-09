var green = 0;
var blue = 0;
var red = 0;
var yellow = 0;

const startingProgram = setTimeout(startProgram, 3000)

var column
var row

function startProgram() {
    column = prompt("Enter row amount: ")
    row = prompt("Enter column amount: ")

    createTable()
    countColors()
}

function createTable() {
    const tbl = document.createElement("table")
    const tblBody = document.createElement("tbody")

    for (let i = 0; i < row; i++) {
        const row = document.createElement("tr")

        for (let j = 0; j < column; j++) {
            let color = getRandColor()
            const cell = document.createElement("td")
            cell.bgColor = color 
            row.appendChild(cell)
            switch(color) {
            case "green":
                green += 1
                break;
            case "blue":
                blue += 1
                break;
            case "red":
                red += 1
                break;
            case "yellow":
                yellow += 1
                break;
            }
        }
        tblBody.appendChild(row)
    }
    tbl.appendChild(tblBody)
    document.body.appendChild(tbl)
}

function countColors() {
    console.log("Red TD: " + red)
    console.log("Green TD: " + green)
    console.log("Blue TD: " + blue)
    console.log("Yellow TD: " + yellow)
}

function getRandColor() {
    let colors = ["green", "blue", "red", "yellow"]
    let randColorNum = Math.floor(Math.random() * 4)
    return colors[randColorNum];
}