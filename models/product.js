'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const  ProcuctShema = Schema({
    name: String,
    picture: String,
    price: { type: Number, default: 0 },
    category: { type: String, enum: ['cumputadores', 'telefonos', 'accesorios'] },
    description: String
})

module.exports = mongoose.model('Product', ProcuctShema)