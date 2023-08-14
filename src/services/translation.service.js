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
    translationData.pinyin ? translationData.pinyin = toneConvert(translationData.pinyin) : null;
    return translationData;
};

module.exports = {
    translateText
}