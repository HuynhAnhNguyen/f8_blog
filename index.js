const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var a=1;
    var b=2;
    var c= a+b;
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