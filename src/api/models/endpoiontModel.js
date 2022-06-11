const mongoose = require('mongoose')

const endpointSchema = mongoose.Schema({
   text: {
       type: String,
       required: [true, 'Add text value']
   } 
}, {
    timestamps: true
})

module.exports = mongoose.model('Endpoint', endpointSchema)