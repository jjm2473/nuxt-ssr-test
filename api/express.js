const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.all('/data.json', (req, res) => {
  res.json({ title: 'hello world' })
})

module.exports = app
