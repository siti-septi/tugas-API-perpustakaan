const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('bodyparser')
const routes = require('./routes/userRoute')

const app = express()

app.use(bodyParser.json())
app.use('/api/books', userRoute)

const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/api/books`);
})
