const { Category } = require('../models');

/**create category */
const createCategory = async (reqBody) => {
    return Category.create(reqBody);
};

/**get category list */
const getCategoryList = async () => {
    return Category.find();
}

/**delete category */
const deleteCategory = async (categoryId) => {
    return Category.findByIdAndDelete(categoryId);
};

/**update category */
const updateDetails = async (categoryId) => {
    return Category.findByIdAndUpdate(categoryId);
};

module.exports = {
    createCategory,
    getCategoryList,
    deleteCategory,
    updateDetails
}


