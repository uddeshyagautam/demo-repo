const express = require('express')

const app = express()

//logs the method timestamp and the url

function loggerMiddleware(req, res, next) {
  console.log('Method is' + req.method)
  console.log('Host is' + req.hostname)
  console.log('Route is' + req.url)
  console.log(new Date())
  next()
}
app.use(loggerMiddleware)

app.get('/sum', function (req, res) {
  const a = parseInt(req.query.a)
  const b = parseInt(req.query.b)

  res.json({
    ans: a + b,
  })
})

app.get('multipy', function (req, res) {
  const a = req.query.a
  const b = req.query.b

  res.json({
    ans: a * b,
  })
})

app.listen(3000)
