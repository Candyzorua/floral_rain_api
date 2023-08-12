const Joi = require('joi');

const translateText = {
  body: Joi.object().keys({
    text: Joi.string().required(),
    type: Joi.string().required()
  }),
};

module.exports = {
    translateText
}