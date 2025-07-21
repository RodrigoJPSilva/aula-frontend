let container = document.getElementById("personagens-container")

let nomes = ["Rodrigo", "Ryan", "Heitor", "Vinicius", "Enzo"]



fetch(`https://dragonball-api.com/api/characters`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.items)
            // console.log(`Olá ${item.name}`))
        data.items.forEach(element => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                <img src="${element.image}"/>
                <h2>${element.name}</h2>
                <p>Raça: ${element.race}</p>
                <p>Gênero: ${element.gender}</p>
                `
                container.appendChild(card)
            });        
    })

nomes.forEach((item) => console.log(`Olá ${item}`));

