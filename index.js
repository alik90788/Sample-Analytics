const express = require('express')
const bodyparser = require('body-parser')
require('./model/db')
const accounts = require('./router/routes')

const app = express();

app.use(bodyparser.urlencoded({
    extended: true
}))

app.use(bodyparser.json())

app.listen(3000, () => {
    console.log('Server Running!!')
})

app.use('/account', accounts)