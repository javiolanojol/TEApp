const Task = require('../models/Task')

const daoTasks={}

daoTasks.save = function save(info) {
  return new Promise((resolve, reject) => {
    let task = new Task(info)
    task.save()
      .then(task => resolve(task))
      .catch(error => reject(error))
  })
}

daoTasks.findById =(id)=>{
  return new Promise((resolved)=>{
      Task.findById(id)
      .then(task=>resolved(task))
  })
}

module.exports=daoTasks