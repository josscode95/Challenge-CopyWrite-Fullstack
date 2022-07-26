const { Router } = require('express');
const router = Router();

const { getReverseFn, allSearch } = require('../controllers/copywriteController');
const { validarParams } = require('../middlewares/validar-get');

router.get('/', validarParams, getReverseFn)

router.get('/all', allSearch)

module.exports = router;