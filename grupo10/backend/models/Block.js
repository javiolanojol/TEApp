const mongoose = require("mongoose")
const {Schema} = mongoose


const schemaBlock = new Schema({

})



class Block{

}



//plugins
schemaBlock.loadClass(Block)
module.exports=mongoose.model('Block',schemaBlock)