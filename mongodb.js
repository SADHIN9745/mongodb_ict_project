const mongoose = require('mongoose')
let compass_url = "mongodb://0.0.0.0:27017/Sampledb"
let mongodb_url = "mongodb+srv://Sadhin1:abcd@cluster0.omg0qci.mongodb.net/FirstDB?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongodb_url).then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(err)
});