const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }, (err) => {
    if(!err)
        console.log('Connection Succeeded...');
    else
        console.log(err);
})

require('./customers.model')
require('./transactions.model')