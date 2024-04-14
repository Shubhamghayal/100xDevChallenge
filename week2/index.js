const express = require('express')
const app = express()
const port = 3000


app.get('/conversations', (req, res) => {
  res.send('<b>Hello World!</b>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})