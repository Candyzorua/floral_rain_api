const express = require('express');
const validate = require('../../middlewares/validate');
const translationValidation = require('../../validations/translation.validation');
const translationController = require('../../controllers/translation.controller');

const router = express.Router();

router.get('/translateText', validate(translationValidation.translateText), translationController.translateText);

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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *               type:
 *                 type: string
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
