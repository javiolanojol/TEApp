const User = require('../models/User')
const bcrypt = require("bcrypt")

const daoUsers={}

daoUsers.save = function save(user) {
  return new Promise((resolve, reject) => {
    let member = new User(user)
    member.save()
      .then(member => resolve(member))
      .catch(error => reject(error))
  })
}

daoUsers.showByUsername = function showByUsername(username) {
  return new Promise((resolve, reject) => {
    resolve(User.find({username:{ $regex: `.*${username}.*`, $options:'i' }}).lean())
  })
}

daoUsers.findByUsername = function findByUsername(username) {
  return new Promise((resolve, reject) => {
    resolve(User.findOne({ username: username }))
  })
}

daoUsers.login = function login(credentials) {
  return new Promise((resolve, reject) => {
    daoUsers.findByUsername(credentials.username)
      .then(async member => {
        if (member == null) {
          credentials.noUsername = true
          resolve(credentials)
        } else {
          let response = await bcrypt.compare(credentials.password, member.password)
          if (response == false) {
            member.wrongPassword = true
            resolve(member)
          }
          else resolve(member)
        }
      })
  })
}

daoUsers.deleteUser = function deleteUser(username) {
  return new Promise((resolve, reject) => {
    resolve(User.findOneAndDelete({ username: username }))
  })
}

daoUsers.changeProfile = function changeProfile(user) {
  return new Promise((resolve, reject) => {
    let member = new User(user)
    let error = {}
    error = member.validateSync()
    if (error.errors.username == undefined) {
      User.findOneAndUpdate({ username: user.username }, { username: user.username, password: user.password })
        .then(() => {
          resolve(member)
        })
    }
    else reject(error)
  })
}

module.exports=daoUsers