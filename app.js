const express = require('express')
require('dotenv').config()
const userRoute = require('./routes/userRoute')

const app = express()

app.use(express.json())
app.use('/api/books', userRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/api/books`);
})