const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json(names)
})

app.post('/', (req, res) => {
  res.send(`Conversão de : ${req.body.type} | ${req.body.temperature}
              Para : ${calculaTemp(req.body.type, Number(req.body.temperature))}`)

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function calculaTemp(tipo, temp) {

  switch (tipo) {
    case ("F"):
      temp = Number(5 * (temp - 32) / 9)
      tipo = "C"
      return `${tipo} | ${temp}`


    case ("C"):
      temp = Number((9 * temp / 5) + 32)
      tipo = "F"
      return `${tipo} | ${temp}`

  }

}

app.post('/media', (req, res) => {

  res.send(`${percorreNota(req.query.total, req.body.grades)}`)

})

function percorreNota(total, grades) {
  if (total == grades.lenght) {
    let sum = grades.reduce((acum, x) => acum + x, 0)
    let average = sum / total
    let downAverage = grades.filter(x => x < 6);
    let onAverage = grades.filter(x => x >= 6);

    return `Average: ${onAverage} \n Down Average: ${downAverage.length} `
  }
  return "Total value does not match total grades";
}

const veiculos = [{ id: 1, name: "Fiat" }, { id: 2, name: "Celta" }, { id: 13, name: "Marea" }];

app.put('/', (req, res) => {
  const index = veiculos.findIndex(x => x.id == req.query.id);
  veiculos[index] = { id: req.query.id, name: req.body.name }
  res.send(JSON.stringify(veiculos))
})

app.delete('/', (req, res) => {
  const index = veiculos.findIndex(x => x.id == req.query.id);
  veiculos.splice(index, 1);
  res.send(JSON.stringify(veiculos))
})