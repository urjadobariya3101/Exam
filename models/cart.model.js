const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema (
    {
        product : {
            type : mongoose.Types.ObjectId,
            ref : "product"
        },
        user : {
            type : mongoose.Types.ObjectId,
            ref : "user"
        },
        order : {
            type : mongoose.Types.ObjectId,
            ref : "order"
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

const Cart = mongoose.model('cart',cartSchema);

module.exports = Cart;