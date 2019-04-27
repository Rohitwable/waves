const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

const mongoose = require('mongoose')
require('dotenv').config()

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

//+++++++Models++++++++//
const { User } = require('./models/user')
//+++++++Routes++++++++//
//1111111111USERS1111111//

app.post('/api/users/register', (req,res)=>{
    const user = new User(req.body)
    user.save((err, doc)=>{
        if(err){
            res.json({success: false, err})
        }
        return res.json({success: true, userData: doc})
    })
})
const port = process.env.PORT || 3004

app.listen(port,() => {
    console.log(`Server is running on ${port}`)
})