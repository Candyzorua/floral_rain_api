const Translation = require('../models/translation.model');
const toneConvert = require('pinyin-tone-convert')

/**
 * Translate text from Mandarin to English
 * @param {string} text Mandarin text to translate
 * @param {string} type Simplified or traditional
 * @returns {Promise<Object|null>} 
 */
const translateText = async (text, type) => {
    const translationData = await Translation.findOne({ [type]: text });
    translationData?.pinyin ? translationData.pinyin = toneConvert(translationData.pinyin) : null;
    return translationData;
};

/**
 * Get random phrase
 * @param {string} type Simplified or traditional
 * @returns {Promise<Object>} 
 */
const getRandom = async (text, type) => {
    const translationData = (await Translation.aggregate([{ $sample: { size: 1 } }]))[0]
    translationData.pinyin = toneConvert(translationData.pinyin);

    // format to follow toJSON plugin
    translationData.id = translationData._id.toString();
    delete translationData._id;
    delete translationData.__v;

    return translationData;
};

module.exports = {
    translateText,
    getRandom
}