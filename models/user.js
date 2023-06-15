const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    name:String,
    email:String,
    phone:String,
    password:String, 

    userRole: {
    type: String,
    roles: ['User', 'Admin'],
    default: 'User',

  }
}
)

module.exports = mongoose.model('User',userSchema) 