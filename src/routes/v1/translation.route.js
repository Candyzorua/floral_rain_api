const express = require('express');
const validate = require('../../middlewares/validate');
const translationValidation = require('../../validations/translation.validation');
const translationController = require('../../controllers/translation.controller');

const router = express.Router();

router.get('/translateText', validate(translationValidation.translateText), translationController.translateText);
router.get('/getRandom', validate(translationValidation.getRandom), translationController.getRandom);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Translation
 *   description: Translating Mandarin text
 */

/**
 * @swagger
 * /translation/translateText:
 *   get:
 *     summary: Get data for the Mandarin text
 *     tags: [Translation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: text
 *         schema:
 *           type: string
 *         description: mandarin text
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: traditional or simplified
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                definitions:
 *                  type: Array
 *                traditional:
 *                  type: string
 *                simplified:
 *                  type: string
 *                pinyin:
 *                  type: string
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 * 
 * /translation/getRandom:
 *   get:
 *     summary: Get a random phrase
 *     tags: [Translation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: traditional or simplified
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                definitions:
 *                  type: Array
 *                traditional:
 *                  type: string
 *                simplified:
 *                  type: string
 *                pinyin:
 *                  type: string
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
