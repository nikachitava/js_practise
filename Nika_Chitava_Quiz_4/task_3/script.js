const imgs = 
["images/1.png", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", 
"images/6.jpg", "images/7.png", "images/8.jpg", "images/9.jpg", "images/10.jpg", 
"images/11.jpg", "images/12.jpg", "images/13.png", "images/14.jpg", "images/15.jpg"]

const cont = document.getElementById("container")
const startBtn = document.getElementById("start_ref")
const stopBtn = document.getElementById("stop_ref")
var sRef


startBtn.addEventListener("click", startRefresh)
stopBtn.addEventListener("click", stopRefresh)

function startRefresh() {
    console.log("start")
    startRefreshing()
}

function stopRefresh() {
    console.log("stop")
    stopRefreshing()
}

function refreshPhoto() {
    for(let i = 0; i < 8; i++) {
        var randomNum = Math.floor(Math.random() * 15);
        var img = document.createElement("img")
        img.src = imgs[randomNum]
        cont.appendChild(img)
    }
}

function startRefreshing() {
    sRef = setInterval(refreshPhoto, 3000)
}

function stopRefreshing() {
    clearInterval(sRef);
}

