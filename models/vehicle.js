/**
 * Book Schema
 */

const mongoose = require("mongoose")
const Schema = mongoose.Schema

let vehicleSchema = new Schema({
    brand: String,
    price: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

let Vehicle = mongoose.model("Vehicle", vehicleSchema)

module.exports = Vehicle