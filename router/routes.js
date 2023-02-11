const express = require('express')
const mongoose = require('mongoose')
const Customers = mongoose.model('Customers')
const Transactions = mongoose.model('Transactions')

const router = express.Router()

router.post('/:username', (req, res) => {
    Customers.findOne({ username: req.params.username }, (err, response) => {
        if(!err) {
            res.send(response)
        } 
        else console.log(err)
    })
})

router.post('/transactions/:account_id', (req, res) => {
    var total_response = {
        total_amount_sold: 0,
        total_amount_bought: 0
    }
    Transactions.findOne({ account_id: parseInt(req.params.account_id) }, (err, response) => {
        if(!err) {
            response.transactions.map((val, idx) => {
                if(val.transaction_code === 'buy') total_response.total_amount_bought += parseFloat(val.total)
                else total_response.total_amount_sold += parseFloat(val.total)
            })
            res.send(total_response)
        }
        else console.log(err)
    })
})

module.exports = router