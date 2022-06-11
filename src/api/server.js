const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/endpoint', require('./routes/endpointRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`${process.env.NODE_ENV} server started on port ${PORT}`))