const express = require('expres');
const dotenv = require('ditenv');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');

dotenv.config();

const app = express9;

app.use(bodyParser.json());
app.use('/api/books', userRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/api/books`);
});