const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const subCategorySchema = new mongoose.Schema({
    category:{
        type:ObjectId,
        ref:"categories"
    },
    subCname: {
        type: String,
        required: true
    },
    subCstatus:{
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})

const subCategoryModel = mongoose.model("subCategories", subCategorySchema);
module.exports = subCategoryModel;