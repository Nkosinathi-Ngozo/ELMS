const express = require('express');
const app = express();
const cors = require('cors');
const config = require('dotenv').config()
const { connectDB } = require('./config/db')
const PORT = process.env.PORT || 5000
const urlprefix = '/api/v1'  

app.use(cors());
app.use(express.json());

connectDB()  



const authRoute = require('./routes/authRoutes');
const userRoute = require('./routes/userRoutes');


app.use(`${urlprefix}/auth`, authRoute);
app.use(`${urlprefix}/user`, userRoute);


app.listen(PORT, () =>{
    console.log(`Server has started at port ${PORT}`)
}) 

module.exports = app