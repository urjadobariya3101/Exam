const express = require('express');

const { userValidation } = require('../../validations');
const { userController } = require('../../controllers');

const validate = require('../../middlewares/validate');

const router = express.Router();

/**create user */
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);

/**get list of user */
router.get(
    "/list",
    validate(userValidation.getUserList),
    userController.getUserList
);

/**update user */
router.put(
    "/update-user:userId",
    validate(userValidation.updateDetails),
    userController.updateDetails
);

/**delete user */
router.delete(
    "/delete-user/:userId",
    validate(userValidation.getDetails),
    userController.deleteUser
);

/**Send mail */
router.post(
    "/send-mail",
    validate(userValidation.sendMail),
    userController.sendMail
)

module.exports = router;