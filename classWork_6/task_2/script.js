function getDoc() {
    const xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = this.responseText
            var jsOb = JSON.parse(data)
            document.write(jsOb[1].body)
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts")
    xhttp.send()
}

getDoc()
