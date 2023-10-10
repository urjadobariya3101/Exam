const Joi = require('joi');

/**create user */
const createUser = {
    body : Joi.object().keys({
        firstname : Joi.string().required().trim(),
        lastname : Joi.string().required().trim(),
        email : Joi.string().required().trim(),
        password : Joi.string().required().trim()
    })
};

/**get list of user */
const getUserList = {
    query : Joi.object().keys()
};

/**get user list by id */
const getDetails = {
    params : Joi.object().keys({
        userId : Joi.string().required().trim()
    })
};

/**update user details */
const updateDetails = {
    params : Joi.object().keys({
        userId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        firstname : Joi.string().required().trim(),
        lastname : Joi.string().required().trim(),
        email : Joi.string().required().trim(),
        password : Joi.string().required().trim()
    })
};

/** Send mail */
const sendMail = {
    body : Joi.object({
        email : Joi.string().required().trim().email(),
        subject : Joi.string().required().trim(),
        text : Joi.string().required().trim()
    }),
};

module.exports = {
    createUser,
    getUserList,
    getDetails,
    updateDetails,
    sendMail
}