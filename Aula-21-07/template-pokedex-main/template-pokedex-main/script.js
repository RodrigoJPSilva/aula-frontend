let pokemon_image =  document.getElementById("pokemon_image")
let pokemon_number =  document.getElementById("pokemon_number")
let pokemon_name =  document.getElementById("pokemon_name")
let form =  document.getElementById("form")
let input_search =  document.getElementById("input_search")
let btn_search =  document.getElementById("btn-search")
let btn_prev =  document.getElementById("btn-prev")
let btn_next =  document.getElementById("btn-next")

let searchPokemon = 1

const buscar = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)        
        pokemon_number.innerText = data.id
        pokemon_name.innerText = data.name
        searchPokemon = data.id
        pokemon_image.src = data.sprites.versions["generation-v"]["black-white"].animated
        .front_default 
        console.log()
    })
    .catch((err) => {
        console.log(err)
        pokemon_number.innerText = ""
        pokemon_name.innerText = "Não encontrado"
    })

}

btn_search.addEventListener("click", (event) => {
    buscar(input_search.value)
    event.preventDefault()
})

btn_prev.addEventListener("click", () => {
    if(searchPokemon > 1){
        searchPokemon -= 1    
        buscar(searchPokemon) 
    }
})

btn_next.addEventListener("click", () => {
    searchPokemon += 1    
    buscar(searchPokemon)
})

