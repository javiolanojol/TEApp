const mongoose = require("mongoose")
const {Schema} = mongoose


const schemaStory = new Schema({

})



class Story{

}



//plugins
schemaStory.loadClass(Story)
module.exports=mongoose.model('Story',schemaStory)