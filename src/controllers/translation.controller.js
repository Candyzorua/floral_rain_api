const catchAsync = require('../utils/catchAsync');
const { translationService } = require('../services');

const translateText = catchAsync(async (req, res) => {
    const text = req.query.text;
    const type = req.query.type;
    const translationResult = await translationService.translateText(text, type);
    res.send(translationResult);
});

module.exports = {
    translateText
};