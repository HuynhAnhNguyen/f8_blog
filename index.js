const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World! Using Nodemon')
})

// Cach 1
// app.get('/', function(req, res) {
//     return res.send('Hello World!')
//   })

// Cach 2
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})