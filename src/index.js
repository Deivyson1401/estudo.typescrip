const express = require("express")

const app = express()

const porta = 3333

app.listen(porta, function(){
    console.log("Porta funcionando");
})

app.get(`projetoteste`, (request,response)=>{
    return response.send("Olá, mundo");
})