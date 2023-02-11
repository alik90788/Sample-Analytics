const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({}, { strict: false });
const Transactions = mongoose.model('Transactions', ProductSchema, 'transactions');

module.exports = { Transactions };