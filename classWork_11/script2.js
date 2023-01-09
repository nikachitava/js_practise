const rect = document.getElementById("rect")


document.addEventListener("keydown", e => {
    if(e.key == "ArrowRight") {
        if(rect.offsetLeft == 0) {
            rect.style.right = '50px'
            console.log("right: " + rect.offsetLeft)
        }
    }
    if(e.key == "ArrowLeft") {
        
    }
    if(e.key == "ArrowDown") {
        
    }
    if(e.key == "ArrowUp") {
        
    }
})



