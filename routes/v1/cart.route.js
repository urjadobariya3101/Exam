const express = require('express');

const { cartValidation } = require('../../validations');
const { cartController } = require('../../controllers');

const validate = require('../../middlewares/validate');

const router = express.Router();

/**create cart */
router.post(
    "/create-cart",
    validate(cartValidation.createCart),
    cartController.createCart
);

/**get list of cart */
router.get(
    "/list",
    validate(cartValidation.getCartList),
    cartController.getCartList
);

/**update cart */
router.put(
    "/update-cart/:cartId",
    validate(cartValidation.updateDetails),
    cartController.updateDetails
);

/**delete cart */
router.delete(
    "/delete-cart/:cartId",
    validate(cartValidation.getDetails),
    cartController.deleteCart
);

module.exports = router;