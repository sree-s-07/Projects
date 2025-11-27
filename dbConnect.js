let mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Crud'.trim())
.then(res=> console.log("Mongoose Connecter..."))
.catch(err=> console.log("Mongoose Unable to Connect..."))