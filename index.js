const jsonServer= require('json-server')
const server =jsonServer.create()
server.use(jsonServer.defaults())
//defaults returns middlewares(parsing , stringify)
const route =jsonServer.router('db.json')
server.use(route)
server.listen(3000,()=>{
    console.log("server is running on portno 3000")
})