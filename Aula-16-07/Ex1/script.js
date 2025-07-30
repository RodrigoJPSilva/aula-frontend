function baixarArquivo(callback){
    console.log("Baixando arquivo... ")
    setTimeout(() => {
        console.log("Download concluído!")
        callback()
    }, 4000);   
}
const abrirArquivo = () => console.log("Abrindo arquivo")
baixarArquivo(abrirArquivo)