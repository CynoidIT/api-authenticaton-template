const asyncHandler = require('express-async-handler')

// @desc    Get Endpoint
// @route   GET /api/endpoint
// @access  Private

const getEndpoint = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'GET'})
})

// @desc    Set Endpoint
// @route   POST /api/endpoint
// @access  Private

const setEndpoint = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('add text')
    }

    res.status(200).json({message: 'POST'})
})

// @desc    Update Endpoint
// @route   PUT /api/endpoint/id
// @access  Private

const updateEndpoint = asyncHandler(async (req, res) => {
	res.status(200).json({message: `POST ${req.params.id}`})
})

// @desc    Delete Endpoint
// @route   DELETE /api/endpoint
// @access  Private

const deleteEndpoint = asyncHandler(async (req, res) => {
	res.status(200).json({message: `DELETE ${req.params.id}`})
})



module.exports = {
    getEndpoint,
    setEndpoint,
    updateEndpoint,
    deleteEndpoint,
}