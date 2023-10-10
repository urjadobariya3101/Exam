const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        amount : {
            type : Number,
            trim : true
        },
        product : {
            type : mongoose.Types.ObjectId,
            ref : "product"
        },
        user : {
            type : mongoose.Types.ObjectId,
            ref : "user"
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const Order = mongoose.model('order',orderSchema);

module.exports = Order;