var http = require("http")

const PORT = 3001;
module.exports=
http.createServer((req, res)=>{
    console.log(`Server raised in port ${PORT}`)
}).listen(PORT,'127.0.0.1')