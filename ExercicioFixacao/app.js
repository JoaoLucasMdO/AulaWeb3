const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

var alunos = []

app.post('/', (req, res) => {

alunos.push(req.body)
res.send(`Resultado ${JSON.stringify(alunos)}`)
})

app.post('/cursos', (req, res) =>{
    const index = alunos.findIndex(x => x.ra == req.query.ra);
    alunos[index].habilidades.push(req.body.cursos)
    res.send(JSON.stringify(alunos[index]))
})

app.put('/', (req, res) => {
    const index = alunos.findIndex(x => x.ra == req.query.ra);
    if(req.body.nome != null){
        alunos[index].nome =  req.body.nome
    }
    if(req.body.turma != null){
        alunos[index].turma =  req.body.turma
    }
    if(req.body.habilidades != null){
        alunos[index].habilidades = req.body.habilidades
    }
    
    res.send(JSON.stringify(alunos[index]))
})


app.put('/curso', (req, res) => {
    const index = alunos.findIndex(x => x.ra == req.query.ra);
    const index2 = alunos[index].habilidades.findIndex(x => x == req.query.habilidades)
    
    
    alunos[index].habilidades[index2] = req.body.habilidade

    res.send(JSON.stringify(alunos[index]))
})

app.delete('/', (req, res) => {
    const index = alunos.findIndex(x => x.ra == req.query.ra);
    alunos.splice()

    res.send(JSON.stringify(alunos))
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})