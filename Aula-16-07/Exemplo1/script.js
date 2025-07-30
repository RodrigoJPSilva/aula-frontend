function pedirComida(callback){
    console.log("Fazendo a comida... Por favor aguarde")
    setTimeout(() => {
        console.log("Comida pronta")
        callback()
    }, 2000);
    
}
function comerComida(){
    console.log("Comendo a comida :)")
}
    pedirComida(comerComida)