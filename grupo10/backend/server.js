const express = require('express')
const app = express()
const port = process.env.PORT || 8081
const rtUsers = require('./routers/rtUsers')
const rtBlocks = require('./routers/rtBlocks')
const rtStories = require('./routers/rtStories')

//base de datos
const conexion = require('./mongodb')
conexion.on('error',console.error.bind(console,"Error de conexion mongo"))
conexion.once('open',()=>console.log("Conexión mongo OK!!"))


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')    
    next()
})

//enrutadores
app.use('/user',rtUsers)
app.use('/block',rtBlocks)
app.use('/storie',rtStories)

app.listen(port,(err)=>{
    if(err) console.log("Errores: ", err)
    console.log(`Servidor backend arrancado en ${port}`)
})