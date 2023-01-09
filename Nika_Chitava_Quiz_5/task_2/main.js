var imgs = 
[
    [ "images/1.png", count = 0],
    [ "images/2.jpg", count = 0 ],
    [ "images/3.jpg", count = 0 ],
    [ "images/4.jpg", count = 0 ],
    [ "images/5.jpg", count = 0 ],
    [ "images/6.jpg", count = 0 ],
    [ "images/7.png", count = 0 ],
    [ "images/8.jpg", count = 0 ],
    [ "images/9.jpg", count = 0 ],
    [ "images/10.jpg", count = 0 ],
    [ "images/11.jpg", count = 0 ],
    [ "images/12.jpg", count = 0 ],
    [ "images/13.png", count = 0 ],
    [ "images/14.jpg", count = 0 ],
    [ "images/15.jpg", count = 0 ]
]


const cont = document.getElementById("container")
const stopBtn = document.getElementById("stopBtn")
const refreshPhotos = setInterval(refreshPhoto, 5000)

function refreshPhoto() {
    for(let i = 0; i < 8; i++) {
        var randomNum = Math.floor(Math.random() * 15);
        var img = document.createElement("img")
        img.src = imgs[randomNum][0]
        cont.appendChild(img)

        //increase count
        imgs[randomNum][1] ++
    }
}

stopBtn.addEventListener("click", () => {
    clearInterval(refreshPhotos)
    console.log("timer stopped")
    console.log(imgs)
})

document.addEventListener("click", (e) => {
    if(e.target.tagName) {
        console.log("This photo apear" + imgs[e][1] + " times.")
    }
})
