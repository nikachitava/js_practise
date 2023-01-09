const canvas = document.getElementById("myCanvas")
const width = canvas.width;
const height = canvas.height;

canvas.width = 800
canvas.height = 700

var rect, rect_x, rect_y, rect_color = 'red'
const colors = ['red', 'yellow', 'green', 'blue']
const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")
var startTimer
var changeColor
var red = 0, yellow = 0, green = 0, blue = 0


function drawRect(x, y, color) {
    rect = canvas.getContext('2d')
    rect.fillStyle = color
    rect_x = x
    rect_y = y
    rect.fillRect(rect_x, rect_y, 100, 100)
}

drawRect(0, 0, rect_color)

function moveRectToEdges() {
    console.log("move")

    if(rect_x == 0 && rect_y == 0) {
        rect.clearRect(rect_x, rect_y, 100, 100)
        rect_x = 700
        rect_y = 0
        drawRect(rect_x, rect_y, rect_color)
    } else if (rect_x == 700 && rect_y == 0) {
        rect.clearRect(rect_x, rect_y, 100, 100)
        rect_x = 700
        rect_y = 600
        drawRect(rect_x, rect_y, rect_color)
    } else if (rect_x == 700 && rect_y == 600) {
        rect.clearRect(rect_x, rect_y, 100, 100)
        rect_x = 0
        rect_y = 600
        drawRect(rect_x, rect_y, rect_color)
    } else {
        rect.clearRect(rect_x, rect_y, 100, 100)
        rect_x = 0
        rect_y = 0
        drawRect(rect_x, rect_y, rect_color)
    }
}

function changeRectColor() {
    let getRandomNumer = Math.floor(Math.random() * 4);
    rect_color = colors[getRandomNumer]
    drawRect(rect_x, rect_y, rect_color)
    console.log('change color')
    switch(rect_color) {
        case 'red':
            red ++
            break
        case 'yellow':
            yellow ++
            break
        case 'green':
            green ++
            break
        case 'blue':
            blue ++
            break
    }
}

startBtn.addEventListener("click", ()=> {
    console.log("event start")
    startTimer = setInterval(moveRectToEdges, 3000)
    changeColor = setInterval(changeRectColor, 1000)
})

stopBtn.addEventListener("click", ()=> {
    clearInterval(startTimer)
    clearInterval(changeColor)
    printColorInfo()
    console.log("event stopped")
})

function printColorInfo() {
    console.log("red color: " + red + " times" )
    console.log("yellow color: " + yellow + " times" )
    console.log("green color: " + green + " times" )
    console.log("blue color: " + blue + " times" )
}
