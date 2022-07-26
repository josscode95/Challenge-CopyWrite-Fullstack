const { Router } = require('express');
const router = Router();

const { getReverseFn } = require('../controllers/copywriteController');
const { validarParams } = require('../middlewares/validar-get');

router.get('/', validarParams, getReverseFn)

module.exports = router;