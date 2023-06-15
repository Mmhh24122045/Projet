const mongoose = require('mongoose')
const schema = mongoose.Schema

const contactNousSchema = new schema({
    name:String,
    email:String,
    phone:String,
    message:String,
 
}
)

module.exports = mongoose.model('ContactNous',contactNousSchema) 