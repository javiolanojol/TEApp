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
      if (error.code == 11000) errors.repeat = "Este email ya está registrado"
      else {
        if (error.errors.username) errors.username = error.errors.username.message
        if (error.errors.email) errors.email = error.errors.email.message
        if (error.errors.password) errors.password = error.errors.password.message
      }
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
      if (user.noEmail) errors.noEmail = "Usuario no existe"
      if (user.wrongPassword) errors.wrongPassword = "Contraseña incorrecta"
      res.json({
        datos: req.body,
        errors: errors
        })
    })
})

rtUsers.post("/list", (req, res) => {
  daoUsers.showByUsername(req.body.username)
  .then(list=>{
    res.json(list)
  })
})

rtUsers.post("/edit", (req, res) => {
  daoUsers.changeProfile(req.body)
    .then(() => {
      res.json({
        respuesta:"Datos modificados",
        datos: req.body
      })
    })
    .catch(error => {
      let errors = {}
      errors.username = error.errors.username.message
      res.json({
        respuesta:"Datos NO modificados",
        errors: errors
      })
    })
})

rtUsers.post("/delete", (req,res) => {
  daoUsers.deleteUser(req.body.email)
  .then(user => {
    res.json(user)
  })
})

module.exports= rtUsers