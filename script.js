const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Server del mio Blog')
})

app.get('/bacheca', (req, res) => {
    res.json([
        {
            title: "Ciambellone",
            content: "Ricetta ciambellone",
            image: `http://localhost:${port}/img/ciambellone.jpeg`,
            tags: ["uova", "farina", "latte"]
          },

          {
            title: "Cracker",
            content: "Ricetta cracker alla barbabietola",
            image: `http://localhost:${port}/img/cracker_barbabietola.jpeg`,
            tags: ["acqua", "farina", "barbabietola"]
          },

          {
            title: "Pane fritto",
            content: "Ricetta pane fritto dolce",
            image: `http://localhost:${port}/img/pane_fritto_dolce.jpeg`,
            tags: ["uova", "pane", "zucchero"]
          },

          {
            title: "Pasta",
            content: "Ricetta pasta alla barbabietola",
            image: `http://localhost:${port}/img/pasta_barbabietola.jpeg`,
            tags: ["pasta", "barbabietola", "olio"]
          },

          {
            title: "Torta",
            content: "Ricetta torta paesana",
            image: `http://localhost:${port}/img/torta_paesana.jpeg`,
            tags: ["uova", "farina", "latte", "cioccolato"]
          }
         
    ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})