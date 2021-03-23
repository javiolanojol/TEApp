const mongoose = require("mongoose")
const {Schema} = mongoose


const schemaTask = new Schema({

})



class Task{

}



//plugins
schemaTask.loadClass(Task)
module.exports=mongoose.model('Task',schemaTask)