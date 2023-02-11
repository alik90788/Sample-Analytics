const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({}, { strict: false });
const Customers = mongoose.model('Customers', ProductSchema, 'customers');

module.exports = { Customers };