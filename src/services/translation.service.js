const Translation = require('../models/translation.model');

/**
 * Translate text from Mandarin to English
 * @param {string} text Mandarin text to translate
 * @param {string} type Simplified or traditional
 * @returns {Promise<string|null>} 
 */
const translateText = async (text, type) => {
    const translationData = await Translation.findOne({ [type]: text });
    return translationData;
};

module.exports = {
    translateText
}