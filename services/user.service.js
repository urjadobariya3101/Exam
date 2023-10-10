const { User } = require('../models');

/**create user */
const createUser = async (reqBody) => {
    return User.create(reqBody);
};

/**get user list */
const getUserList = async () => {
    return User.find();
};

/**get user details by id */
const getUserById = async (userId) => {
    return User.findById(userId);
};

/**update user */
const updateDetails = async (userId) => {
    return User.findByIdAndUpdate(userId);
};

/**delete user */
const deleteUser = async (userId) => {
    return User.findByIdAndDelete(userId);
};

/**get user by email */
const getUserByEmail = async (email) => {
    return User.findOne({ email });
  };

module.exports = {
    createUser,
    getUserList,
    getUserById,
    updateDetails,
    deleteUser,
    getUserByEmail
};