const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    name : String,
    age:Number,
    place:String
})

const studentModel = mongoose.model('student',studentSchema)
module.exports = studentModel
