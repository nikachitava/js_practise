const canvas = document.getElementById("myCanvas")
const width = canvas.width;
const height = canvas.height;

canvas.width = 700
canvas.height = 800

var x = 0
var y = 0
var mainRect
var main_x = 0
var main_y = 0
var green = 0,
    blue = 0,
    red = 0,
    yellow = 0
var process = true

function drawMainRect(main_x, main_y) {
    mainRect = canvas.getContext('2d')
    mainRect.fillStyle = 'aqua'
    mainRect.fillRect(main_x, main_y, 100, 100)
}

drawMainRect(main_x, main_y)

const spawnInterval = setInterval(spawnRect, 400)

function drawRect(x, y) {
    var rect
    let color = getRandColor()
    switch(color) {
        case "green":
            green++
            break
        case "blue":
            blue++
            break
        case "red":
            red++
            break
        case "yellow":
            yellow++
            break
    }
    rect = canvas.getContext('2d')
    rect.fillStyle = color
    rect.fillRect(x, y, 100, 100)
}

function spawnRect() {
    if(x <= 600) {
        main_x = x + 100
        drawRect(x, y)
    
        mainRect.clearRect(main_x, main_y, 100, 100)   
        drawMainRect(main_x, main_y)
        x += 100

        if(x == 700) {
            mainRect.clearRect(main_x, main_y, 100, 100) 

            main_x = 0
            main_y += 100

            drawMainRect(main_x, main_y)
            mainRect.clearRect(main_x+700, main_y-100, 100, 100)   
        }
    } else {
        x = 0
        y += 100
    }
    if(y == 700 && x == 700) {
        stopInterval()
        finish()
    }
}

function getRandColor() {
    let colors = ["green", "blue", "red", "yellow"]
    let randColorNum = Math.floor(Math.random() * 4)
    return colors[randColorNum];
}

function stopInterval() {
    clearInterval(spawnInterval)
    console.log("CANVAS IS FULL OF RECTANGLE")
}

function finish() {
    process = false
    console.log("GREEN:" + green)
    console.log("BLUE:" + blue)
    console.log("RED:" + red)
    console.log("YELLOW:" + yellow)
}

window.onkeydown = function(e) {
    if(!process) {
        if(e.keyCode == 66) {
            console.log("BBBBBBB - delete blue")
        } else if(e.keyCode == 82) {
            console.log("RRRRRRR - delete red")
        } else if(e.keyCode == 89) {
            console.log("YYYYYYY - delete yellow")
        } else if(e.keyCode == 71) {
            console.log("GGGGGGG - delete greeen")
        }
    } else {
        console.log("WAINT UNTIL CANVA FULLY COVERED")
    }
}

