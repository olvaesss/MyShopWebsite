const http = require('http')
const host = '127.0.0.1'
const port = 7000
const fs = require('fs')
const server = http.createServer((req, res)=>{

    if(req.url === 'index.html')
    {
        fs.readFile('./HTML/index.html',()=>{
            res.writeHead(200, {"Content-Type": "text/html"})
            res.end()
        })
    }
})

server.listen( port, host ,()=>
{
    console.log("server runs: http://"+host+':'+port)
})

