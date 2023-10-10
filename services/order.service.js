const { Order } = require('../models');

/**create order */
const createOrder = async (reqBody) => {
    return Order.create(reqBody);
};

/**get order list */
const getOrderList = async () => {
    return Order.find()
        .populate('user')
        .populate('product', "product_name : 1");
};

/**get order list by id */
const getOrderById = async (orderId) => {
    return Order.findById(orderId);
};

/**update order */
const updateDetails = async (orderId) => {
    return Order.findByIdAndUpdate(orderId);
};

/**delete order */
const deleteOrder = async (orderId) => {
    return Order.findOneAndDelete(orderId);
};

// Simulate order placement and generate an order number
const orderNumber = Math.floor(Math.random() * 100000);

module.exports = {
    createOrder,
    getOrderList,
    getOrderById,
    updateDetails,
    deleteOrder,
    orderNumber
};