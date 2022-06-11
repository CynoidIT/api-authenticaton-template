const asyncHandler = require('express-async-handler')
const Endpoint = require('../models/endpoiontModel')

// @desc    Get Endpoint
// @route   GET /api/endpoint
// @access  Private

const getEndpoint = asyncHandler(async (req, res) => {
const endpoints = await Endpoint.find()

    res.status(200).json(endpoints)
})

// @desc    Set Endpoint
// @route   POST /api/endpoint
// @access  Private

const setEndpoint = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('add text')
    }
    const endpoint = await Endpoint.create({
        text: req.body.text
    })

    res.status(200).json(endpoint)
})

// @desc    Update Endpoint
// @route   PUT /api/endpoint/id
// @access  Private

const updateEndpoint = asyncHandler(async (req, res) => {
    const endpoint = await Endpoint.findById(req.params.id)

    if(!endpoint) {
        res.status(400)
        throw new Error('Not found')
    }

    const updatedEndpoint = await Endpoint.findByIdAndUpdate(req.params.id, req.body, {new:true})

	res.status(200).json(updatedEndpoint)
})

// @desc    Delete Endpoint
// @route   DELETE /api/endpoint
// @access  Private

const deleteEndpoint = asyncHandler(async (req, res) => {

    const endpoint = await Endpoint.findById(req.params.id)

    if(!endpoint) {
        res.status(400)
        throw new Error('Not found')
    }

    await Endpoint.findByIdAndDelete(req.params.id)

	res.status(200).json({id:req.params.id})
})



module.exports = {
    getEndpoint,
    setEndpoint,
    updateEndpoint,
    deleteEndpoint,
}