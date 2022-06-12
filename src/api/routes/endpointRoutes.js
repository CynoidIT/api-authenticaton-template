const express = require('express')
const router = express.Router()
const {getEndpoint, setEndpoint, updateEndpoint, deleteEndpoint} = require('../controllers/endpointController')

const {protect} = require('../middleware/authMiddlware')

router.route('/').get(protect, getEndpoint).post(protect, setEndpoint)
router.route('/:id').put(protect, updateEndpoint).delete(protect, deleteEndpoint)

module.exports = router