const express = require('express')

const app = express()

let requestCount = 0

function requestIncreaser(req, res) {
  requestCount = requestCount + 1
  console.log('total number of requests =' + requestCount)
  req.requestCount = requestCount
}

function realSumHandler(req, res) {
  //main logic
  const a = parseInt(req.query.a)
  const b = parseInt(req.query.b)

  res.json({
    ans: a + b,
  })
}

//better routing , add database, middleware

app.get('/sum', requestIncreaser, realSumHandler)

/*
app.get('/sum', function (req, res) {
  const a = parseInt(req.query.a)
  const b = parseInt(req.query.b)

  res.json({
    ans: a + b,
  })
});
/*
app.get('/multiply', function (req, res) {
  const a = req.query.a
  const b = req.query.b

  res.json({
    ans: a * b,
  })
})

app.get('/divide', function (req, res) {
  const a = req.query.a
  const b = req.query.b

  res.json({
    ans: a / b,
  })
})
*/

//better routing and database,middlwares

app.get('/sum', requestIncreaser, realSumHandler)
//app.use(requestIncreaser)
app.get('/multiply', requestIncreaser, realSumHandler)

app.get('/admin', function () {
  res.json({
    message: 'Total number of requests on the server is ' + requestCount,
  })
})

app.listen(3000)
