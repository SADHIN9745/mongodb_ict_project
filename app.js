const express = require('express')
const morgan = require('morgan')
const db = require('./mongodb')
const studentRoutes = require('./Routes/studentRoutes')
require('dotenv').config();
const app = new express()
app.use(morgan('dev'));
app.use('/api',studentRoutes)

const PORT = process.env.PORT
// app.get('/',(req,res)=>{
//     res.send("Express project is initialized")
// })

app.listen(PORT,()=>{
    console.log(`SERVER is running in ${PORT}`)
})