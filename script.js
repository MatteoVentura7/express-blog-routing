const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Server del mio Blog')
})

// INDEX 

app.get('/bacheca', (req, res) => {
    res.send('Lista dei post')
})

// SHOW

app.get('/bacheca/:id', (req, res) => {
  res.send(`Dettagli del post : ${req.params.id}`)
})

// CREATE

app.post('/bacheca', (req, res) => {
  res.send('Crea nuovo post')
})

// UPTADE

app.put('/bacheca/:id', (req, res) => {
  res.send(`Modifica del post : ${req.params.id}`)
})

// MODIFY 

app.patch('/bacheca/:id', (req, res) => {
  res.send(`Modifica parziale del post : ${req.params.id}`)
})

// DELETE

app.delete('/bacheca/:id', (req, res) => {
  res.send(`Eliminazione del post : ${req.params.id}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})