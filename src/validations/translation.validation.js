const Joi = require('joi');

const translateText = {
  query: Joi.object().keys({
    text: Joi.string().required(),
    type: Joi.string().required()
  }),
};

const getRandom = {
  query: Joi.object().keys({
    type: Joi.string().required()
  }),
};

module.exports = {
    translateText,
    getRandom
}