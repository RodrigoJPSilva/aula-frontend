function processarDados(callback){
    console.log("Processando dados... ")
    setTimeout(() => {
        console.log("Dados processados!")
        callback()
    }, 2000);
}
const mostrarResultado = () => console.log("Mostrando resultado na tela...")
processarDados(mostrarResultado)