const express = require('express')
const app = express()
const port = 3000
const Gun = require('gun')

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(Gun.serve)


const server = app.listen(port, () => {
  console.log(`Gun server running on port ${port}🔥`)
})


Gun({ web: server })