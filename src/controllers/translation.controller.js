const catchAsync = require('../utils/catchAsync');
const { translationService } = require('../services');

const translateText = catchAsync(async (req, res) => {
    const text = req.body.text;
    const type = req.body.type;
    const translationResult = await translationService.translateText(text, type);
    res.send(translationResult);
});

module.exports = {
    translateText
};