function random_number() {
    const cont = document.createElement('div')
    cont.classList.add('number_container')
    document.body.appendChild(cont)
    const text = document.createElement('p')
    cont.appendChild(text)


    for(let i = 0; i < 30; i++) {
        let randNum = getRandomNumber(0, 30)
        text.innerHTML += randNum + " "
        console.log(randNum)
    }
}

function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max-min)) + min;
}
