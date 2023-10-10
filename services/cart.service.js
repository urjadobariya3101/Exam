const { Cart } = require('../models');

/**create cart */
const createCart = async (reqBody) => {
    return Cart.create(reqBody);
};

/**get cart list */
const getCartList = async () => {
    return Cart.find()
    .populate('product',{product_name : 1})
    .populate('user')
    .populate('order',{price : 1});
};

/**get cart details by id */
const getCartListById = async (cartId) => {
    return Cart.findById(cartId);
};

/**update cart */
const updateDetails = async (cartId) => {
    return Cart.findByIdAndUpdate(cartId);
};

/**delete cart */
const deleteCart = async (cartId) => {
    return Cart.findByIdAndDelete(cartId);
};

module.exports = {
    createCart,
    getCartList,
    getCartListById,
    updateDetails,
    deleteCart
}
