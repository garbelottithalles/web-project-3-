const express = require('express')
const app = express()
const cors = require('cors')
const router = express.Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('./models/Sale')
const Sale = mongoose.model('Sale')


// CONFIG body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// CONFIG mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/SaleDB').then(() => {
    console.log('Connecting to DB..! ')
}).catch((err)=>{
    console.log(err)
})

// MIDDLEWARE
app.use(cors())


//  ROUTES 
router.route('/sales').get((req, res) => {
    Sale.find((err, sales) => {
        if(err){
            console.log(err)
        }
        else{
            res.json(sales).pretty()
        }
    })
})

router.route('/sales/:id').get((req, res) => {
    Sale.findById(req.params.id, (err, sale) => {
        if(err){
            console.log(err)
        }
        else{
            res.json(sale)
        }
    })
})

router.route('/sales/add').post((req, res) =>{
    let sale = new Sale(req.body)
    sale.save()
    .then((sale) => {
        res.status(200).json({'sale': 'Sale was added sucessfully'})
    })
    .catch((err) => {
        res.status(400).send('Failed to add')
    })
})

router.route('/sales/update/:id').post((req, res) => {
    Sale.findById(req.params.id, (err, sale) => {
        if(!sale){
            return next(new Error('Could not load document'))
        }
        else{
            sale.gold = req.body.gold
            sale.cash = req.body.cash
            sale.client = req.body.client
            sale.payment = req.body.payment
            sale.paid = req.body.paid
            sale.saledAt = req.body.saledAt

            sale.save().then((sale) =>{
                res.json('Update done')
            }).catch((err) => {
                res.status(400).send('Update failed')
            })
        }
    })
})
router.route('sales/delete/:id').get((req, res) => {
    Sale.findByIdAndRemove({_id: req.params.id}, (err, sale) => {
        if(err){
            res.json(err)
        }
        else{
            res.json('Remove Sucessfully')
        }
    })
})

app.use('/', router)  

// CONFIG port
app.listen(3000)