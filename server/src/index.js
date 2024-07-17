const express = require('express')
const app = express()
const port = 8000
app.use(express.json())
const userRoute=require('./routes/users')
const connect = require('./db/connection')
connect()
app.use(userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})