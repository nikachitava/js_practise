let text = document.getElementById('text1')

function styleText(string, fontSize) {
    text.style.fontSize = fontSize
    text.innerText = string
}

styleText("helloworld", "29px")