function enviarNotificacao(callback){
    console.log("Enviando notificação...")
    setTimeout(() => {
        console.log("Notificação enviada!")
        callback()
    }, 2000); 
}
const confirmarNotificacao = () => console.log("Confirmação: notificação entregue.")
enviarNotificacao(confirmarNotificacao)