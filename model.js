let mongoose = require('mongoose')
let employeeSchema = new mongoose.Schema({
    fName:{type:String},
    lName:{type:String},
    age:{type:Number},
    phone:{type:Number},
    city:{type:String},
},{timestamps: true})

let empoyeeModel = mongoose.model('Employee', employeeSchema)

module.exports= empoyeeModel