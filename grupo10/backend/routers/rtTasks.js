const express = require('express')
const rtTasks = express.Router()
const daoTasks = require('../dao/daoTasks')

rtTasks.post("/create",(req,res) => {
  daoTasks.save(req.body)
    .then(()=>{
      res.json({
        respuesta:"Datos recibidos",
        datos: req.body
      })
    })
    .catch(error => {
      let errors = {}
      if (error.errors.username) errors.username = error.errors.username.message
      if (error.errors.email) errors.email = error.errors.email.message
      if (error.errors.password) errors.password = error.errors.password.message
      res.json({
        respuesta:"Datos NO recibidos",
        errors: errors
      })
    })
})

rtTasks.post("/list", (req, res) => {
  daoTasks.findById(req.body.id)
  .then(list=>{
    res.json(list)
  })
})

module.exports= rtTasks