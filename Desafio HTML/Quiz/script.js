var xhr = new XMLHttpRequest()
var documento;


xhr.responseType = "json"

xhr.onreadystatechange = function () {

    if(xhr.readyState === 4 && xhr.status === 200) {
        documento = xhr.response
        console.log(documento)
    }
}

xhr.open("GET", 'http://localhost:3000/questions/103')


xhr.send()