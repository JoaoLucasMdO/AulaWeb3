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
    alunos[index] = {ra : req.body.ra,
                    nome : req.body.nome,
                    turma: req.body.turma,
                    habilidades : req.body.habilidades
                    }
    res.send(JSON.stringify(alunos[index]))
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})