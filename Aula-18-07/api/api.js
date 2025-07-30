let nome = document.getElementById("nome")
let email = document.getElementById("email")
let username = document.getElementById("username")
let btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            nome.innerText = data[0].nome
            email.innerText = data[0].email
            username.innerText = data[0].username
        })
        .catch((err) => {
            console.log(err)
            nome.innerText = "Não foi possivel localizar o usuário"
            email.innerText = "Não foi possivel localizar o usuário"
            username.innerText = "Não foi possivel localizar o usuário"
        }) 
    })
