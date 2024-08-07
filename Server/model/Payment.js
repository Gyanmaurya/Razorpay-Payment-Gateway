const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const Payment = new Schema({
     razorpay_order_id: {
         type: String,
         required: true,
     },
     razorpay_payment_id: {
         type: String,
         required: true,
     },
     razorpay_signature: {
         type: String,
         required: true,
     },
     date: {
         type: Date,
         default: Date.now
     },
 })

 module.exports = model('payments', Payment)



