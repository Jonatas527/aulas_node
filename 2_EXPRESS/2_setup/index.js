const express = require('express')

const app = express()

app.get ('/', (requsica, resposta) => {

    resposta.send("meu back-end esta funcionando!")


})
app.listen(3000, () => {
    console.log("servidor reodando na porta 3000!")
})