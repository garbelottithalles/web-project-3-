const mongoose = require('mongoose')

    Sale = mongoose.Schema({
    gold: {
        type: String
    },    
    cash: {
        type: Number,
        require: true
    },
    client: {
        type: String,
        require: true
    },
    payment: {
        type: String
    },
    paid: {
        type: String,
        default: 'PAID'
    },
    saledAt: {
        type: String
    },
    dateAt: {
        type: Date,
        default: Date.now
    }
})
mongoose.model('Sale', Sale)