const mongoose = require("mongoose")
const {Schema} = mongoose
const bcrypt = require('bcrypt')

const schemaUser = new Schema({

})



class User{

}



//plugins
schemaUser.loadClass(User)
module.exports=mongoose.model('User',schemaUser)