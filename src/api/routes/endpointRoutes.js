const express = require('express')
const router = express.Router()
const {getEndpoint, setEndpoint, updateEndpoint, deleteEndpoint} = require('../controllers/endpointController')

router.route('/').get(getEndpoint).post(setEndpoint)
router.route('/:id').put(updateEndpoint).delete(deleteEndpoint)

module.exports = router