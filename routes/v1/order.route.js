const express = require('express');

const { orderValidation } = require('../../validations');
const { orderController } = require('../../controllers');

const validate = require('../../middlewares/validate');

const router = express.Router();

/**create order */
router.post(
    "/create-order",
    validate(orderValidation.createOrder),
    orderController.createOrder
);

/**get list of order */
router.get(
    "/list",
    validate(orderValidation.getOrderList),
    orderController.getOrderList
);

/**update order list */
router.put(
    "/update-order/:orderId",
    validate(orderValidation.updateDetails),
    orderController.updateDetails
);

/**delete order */
router.delete(
    "/delete-order/:orderId",
    validate(orderValidation.getDetails),
    orderController.deleteOrder
);

module.exports = router;