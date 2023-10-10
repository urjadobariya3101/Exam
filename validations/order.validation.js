const Joi = require('joi');

/**create order */
const createOrder = {
    body : Joi.object().keys({
        amount : Joi.number().integer().required(),
        product : Joi.string().required().trim(),
        user : Joi.string().required().trim()
    })
};

/**get order list */
const getOrderList = {
    query : Joi.object().keys()
};

/**get order details by id */
const getOrderById = {
    params : Joi.object().keys({
        orderId : Joi.string().required().trim()
    })
};

/**update order by id */
const updateDetails = {
    params : Joi.object().keys({
        orderId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        amount : Joi.number().integer().required(),
        product : Joi.string().required().trim(),
        user : Joi.string().required().trim()
    })
};

module.exports = {
    createOrder,
    getOrderList,
    getOrderById,
    updateDetails
};