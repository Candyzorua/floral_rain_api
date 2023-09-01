const catchAsync = require('../utils/catchAsync');
const { translationService } = require('../services');

const translateText = catchAsync(async (req, res) => {
    const text = decodeURIComponent(req.query.text);
    const type = req.query.type;
    const translationResult = await translationService.translateText(text, type);
    res.send(translationResult);
});

const getRandom = catchAsync(async (req, res) => {
    const type = req.query.type;
    const translationResult = await translationService.getRandom(type);
    res.send(translationResult);
});

module.exports = {
    translateText,
    getRandom
};