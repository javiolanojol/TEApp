const mongoose = require('mongoose')

mongoose.connect('mongodb://user3:equipo3@3.10.117.25/equipo3', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify:false,
})

module.exports=mongoose.connection
