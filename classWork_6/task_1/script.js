const number = document.getElementsByTagName("td")
const table = document.getElementById("calendar_table")
const Year = document.getElementById("year")
const Month = document.getElementById("month")
const numbers = document.getElementsByClassName("numbers")


function getMonth(num) {
    switch(num) {
        case 0: return month = 'იანვარი'
        case 1: return month = 'თებერვალი'
        case 2: return month = 'მარტი'
        case 3: return month = 'აპრილი'
        case 4: return month = 'მაისი'
        case 5: return month = 'ივნისი'
        case 6: return month = 'ივლისი'
        case 7: return month = 'აგვისტო'
        case 8: return month = 'სექტმებერი'
        case 9: return month = 'ოქტომბერი'
        case 10: return month = 'ნოემბერი'
        case 11: return month = 'დეკემბერი'
    }
}

function getDay(num) {
    switch(num) {
        case 0: return day = 'კვირა'
        case 1: return day = 'ორშაბათი'
        case 2: return day = 'სამშაბათი'
        case 3: return day = 'ოთხშაბათი'
        case 4: return day = 'ხუთშაბათი'
        case 5: return day = 'პარასკევი'
        case 6: return day = 'შაბათი'
    }
}

console.log(number)

function createCalendar() {
    const tblBody = document.createElement("tbody")
    
    for (let i = 0; i < 5; i++) {
        const row = document.createElement("tr")
    
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td")
            cell.classList.add("numbers")
            row.appendChild(cell)
        }
        tblBody.appendChild(row)
    }
    table.appendChild(tblBody)

    let date = new Date()
    number[0].innerText = date.getFullYear()
    number[1].innerText = getMonth(date.getMonth())

    let current_day = new Date(`${date.getMonth()+1} ${date.getDate()}, ${date.getFullYear()}`)
    console.log(current_day.getDate())
    numbers[current_day.getDate()+1].classList.add("current_date")
    
    let month_start_day = new Date(`${date.getMonth()+1} 1, ${date.getFullYear()}`).getDay()

    let days = getDaysInMonth(`${date.getFullYear()}`, `${date.getMonth()}`)

    for(let i = month_start_day; i <= days+month_start_day; i++) {
        number[9+i].innerText = i-month_start_day+1
    }
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate()
  }

createCalendar()

