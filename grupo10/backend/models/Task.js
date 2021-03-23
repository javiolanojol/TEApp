const mongoose = require("mongoose")
const {Schema} = mongoose


const schemaTask = new Schema({
  title: {
    type: String,
    required: [true, "El título no puede ir vacío"],
    uppercase: true,
    validate: {
      validator: function (title) { 
        if(title.length<15 || title.length>40) return false 
        else return true },
      message: "El título tiene que tener entre 15 y 40 caracteres"
    }
  },
  description: {
    type: String,
    required: [true, "La descripción no puede ir vacía"],
    validate: {
      validator: function (description) { 
        if(description.length<30 || description.length>100) return false 
        else return true },
      message: "La descripción tiene que tener entre 30 y 100 caracteres"
    }
  },
  score: {
    type: Number,
    required: [true, "Hay que asignar una puntuación"],
  }
})

module.exports=mongoose.model('Task',schemaTask)