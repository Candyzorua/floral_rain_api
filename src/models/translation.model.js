const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const translationSchema = mongoose.Schema(
    {
        traditional: {
            type: String,
            required: true,
        },
        simplified: {
            type: String,
            required: true,
        },
        definitions: {
            type: Array,
            required: true
        },
        pinyin: {
            type: String,
            required: true,
        },
    }
);

// add plugin that converts mongoose to json
translationSchema.plugin(toJSON);

/**
 * @typedef Translation
 */
const Translation = mongoose.model('Translation', translationSchema);

module.exports = Translation;