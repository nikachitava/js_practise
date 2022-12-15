const rect = document.getElementById("rect")



document.addEventListener("keydown", e => {
    if(e.key == "ArrowRight") {
        if(rect.offsetWidth < 600) {
            rect.style.width = rect.offsetWidth + 10 + "px"
            rect.classList.remove("backward")
            rect.classList.add("forward")
            // rect.style.background = 'aqua'
        }
    }
    if(e.key == "ArrowLeft") {
        rect.style.width = rect.offsetWidth - 10 + "px"
        rect.classList.add("backward")
    }
    if(e.key == "ArrowDown") {
        if(rect.offsetHeight < 400) {
            rect.style.height = rect.offsetHeight + 10 + "px"
            rect.classList.remove("backward")
            rect.classList.add("forward")
            console.log(rect.offsetHeight)
        }
    }
    if(e.key == "ArrowUp") {
        rect.style.height = rect.offsetHeight - 10 + "px"
        rect.classList.remove("forward")
        rect.classList.add("backward")
    }
})
