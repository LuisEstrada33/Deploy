'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
  //  email:{type: String, unique:true,lowercase:true},
    name: String,
    picture: String,
    price:{type: Number, default: 0},
    category: {type: String, enum: ['computers', 'phones', 'accesories']},
    description: String
})

module.exports = mongoose.model('Product',ProductSchema)