const express = require('express');
const app = express();
const tasks = require('./public/routes/tasks');
const connectDB = require('./public/db/connect')
require("dotenv").config();
const notFound = require('./middleware/notfound')

// middleware

app.use(express.static('./public'))
app.use(express.json())



// routes
/* app.get('/hello',  (req, res) => {
    res.send('Task Manager App')
}) */

app.use('/api/v1/tasks', tasks)

app.use(notFound)

const port = 3000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on port ${port}...`));

    } catch (error) {
        console.log(error)

    }
}

start()

