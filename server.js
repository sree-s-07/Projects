let express = require('express')
let cors = require('cors')
let app = express();
let dbConnect = require('./dbConnect')
let employeeModel = require('./model')

dbConnect;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

// Create Employee
app.post('/add-employee', async (req, res) => {
    try {
        // let { fName, lName, age, city, phone } = req.body
        let data = employeeModel(req.body)
        await data.save()
        res.status(200).json({ status: true, data })
    } catch (err) {
        res.status(400).json({ status: false, message: "User Not Created" })
    }
})

// Find Employee
app.get('/users', async (req, res) => {
    try {
        let data = await employeeModel.find()
        res.status(200).json({ status: true, data })
    } catch (err) {
        res.status(400).json({ status: false, message: "Users Not Created" })
    }
})

// Find One Employee
app.get('/users/:id', async (req, res) => {
    try {
        let data = await employeeModel.findById(req.params.id)
        res.status(200).json({ status: true, data })
    } catch (err) {
        res.status(400).json({ status: false, message: "Users Not Found" })
    }
})

// Delete Employee
app.delete('/users/:id', async (req, res) => {
    try {
        let data = await employeeModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ status: true, message: "User Deleted Successfully..." })
    } catch (err) {
        res.status(400).json({ status: false, message: "Users Not Found" })
    }
})

// Upadte Employee
app.put('/users/:id', async (req, res) => {
    try {
        let data = await employeeModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json({ status: true, message: "User Updated Successfully..." })
    } catch (err) {
        res.status(400).json({ status: false, message: "Users Not Updated" })
    }
})

app.listen(5000, err => {
    if (err) {
        console.log('Server Stop...')
    } else {
        console.log('Server Running...')
    }
})