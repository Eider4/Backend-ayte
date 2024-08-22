const express = require('express')
const { VentasGet, VentasPost, VentasGetById } = require('../controllers/VentasControllers')

const router = express.Router()

router.get('/', VentasGet)
router.post('/', VentasPost)
router.get('/:uuid_venta', VentasGetById)

module.exports = router