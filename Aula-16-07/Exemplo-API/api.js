let nome = document.getElementById("nome")
let email = document.getElementById("email")
let username = document.getElementById("username")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        nome.innerText = data[0].name
        email.innerText = data[0].email
        username.innerText = data[0].username
        console.log(data)
    })