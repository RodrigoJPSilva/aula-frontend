// const verificarResultado = new Promise((resolve, reject) => {
//     let result = 1 + 1
//     if(result == 2){
//         resolve("Interessante, seu resultado é: 2")
//     } else{
//         reject("Que pena, seu resultado não é: 2")
//     }
// })
// verificarResultado
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
const buscarUsuario = new Promise((resolve, reject) => {
    console.log("Buscando usuário no banco... ")
    setTimeout(() => {
        const encontrado = true

        if(encontrado){
            resolve({
                nome: "Rodrigo",
                email: "rodrigojrpsilva@gmail.com",
                idade: 20
            })
        } else{
            reject("Usuário não encontrado :(")
        }
    }, 2000);
})

buscarUsuario
    .then((res) => {
        console.log(res.nome)
    })
    .catch((err) => {
        console.log(err)
    })