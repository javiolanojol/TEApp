const express = require('express')
const rtUsers = express.Router()
const daoUsers = require('../dao/daoUsers')

rtUsers.post("/create",(req,res) => {
  daoUsers.save(req.body)
    .then(()=>{
      res.json({
        respuesta:"Datos recibidos",
        datos: req.body
      })
    })
    .catch(error => {
      let errors = {}
      if(error.errors.username) errors.username = error.errors.username.message
      if(error.errors.password) errors.password = error.errors.password.message
      res.json({
        respuesta:"Datos NO recibidos",
        errors: errors
      })
    })
})

rtUsers.post("/login", (req, res) => {
  daoUsers.login(req.body)
    .then(user => {
      let errors = {}
      if (user.noUsername) errors.noUsername = "Usuario no existe"
      if (user.wrongPassword) errors.wrongPassword = "Contraseña incorrecta"
      res.json({
        datos: req.body,
        errors: errors
        })
    })
})

rtUsers.post("/list", async (req, res) => {
  let UserList = await daoUsers.showByUsername(req.body.username)
  
})


module.exports= rtUsers