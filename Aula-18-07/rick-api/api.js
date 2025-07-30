let nome = document.getElementById("nome")
let species = document.getElementById("species")
let img = document.getElementById("img")
let btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    fetch()
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results[0].name)
        console.log(data.results[0].species)
        console.log(data.results[0].image)
        
        nome.innerText = data.results[0].name
        species.innerText = data.results[0].species
        img.src = data.results[0].image
    })
    .catch((err) => {
        console.log(err)
        nome.innerText = "Usuário não encontrado"
        species.innerText = "Usuário não encontrado"
        img.style.display = hidden      
    })
})