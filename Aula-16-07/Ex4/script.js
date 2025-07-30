function carregarProduto(callback){
    console.log("Carregando produto... ")
    setTimeout(() => {
        console.log("Produto carregado com sucesso! ")
        callback()
    }, 1500); 
}
const exibirProduto = () => console.log("Exibindo detalhes do produto.")
carregarProduto(exibirProduto)