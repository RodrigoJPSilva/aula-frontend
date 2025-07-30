// const pizzaChegou = false

// const chegou = () =>  {
//     console.log("A pizza chegou!")
// }
// const cancelado = () => {
//     console.log("Pedido cancelado")
// }
// const pedido = (callbackSuccess, callbackError) => {
//     if(pizzaChegou == true){
//         callbackSuccess()
//     } else{
//         callbackError()
//     }
// }

// pedido(chegou, cancelado)

const pizza = false

const pedido = new Promise((resolve, reject) => {
    if(pizza == true){
        resolve("Pizza chegou")
    } else{
        reject("Cancelado")
    }
})
pedido
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })