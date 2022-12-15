const name = document.getElementById('name')
const lastname = document.getElementById('lastname')
const id_number = document.getElementById('id_number')
const reg_date = document.getElementById('reg_date')
const mail = document.getElementById('mail')

function check_id(id) {
    if(id.length == 0) {
        return false
    }
    if(id.length != 11) {
        console.log("ID NUMBER DONT CONTAIN 11 NUMBER")
    }
    if(id.charAt(0) != '0') {
        console.log("ID NUMBER DONT START WITH 0")
    }
}
function set_date() {
    let date = new Date();
    reg_date.value = date.toISOString().substring(0,10)
    // reg_date.value = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
}

set_date()

function check_mail(mail) {
    if(mail.length == 0) {
        return false
    }
    if(mail.includes != '@') {
        console.log("Enter corrent mail")
    }
    if(mail.indexOf(".") - mail.indexOf("@") < 2) {
        console.log("Enter corrent mail")
    }
}

function submit() {
    if(!check_id(id_number.value) && !check_mail(mail.value)) {
       alert("Set fields correctly.")
    }
}