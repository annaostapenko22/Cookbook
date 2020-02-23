const mongoose = require('mongoose');

const recipeSchema = (fields) => {
    const schema = new mongoose.Schema({
        name: String,
        description: String,
        isActive: Boolean,
        creationDate: Date
    }, { versionKey: false });

    if (fields) {
        schema.add(fields);
    }

    return schema;
} 

module.exports = mongoose.model('Recipe', recipeSchema());

module.exports.recipeSchema = recipeSchema;