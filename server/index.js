const http = require('http');
const fs = require('fs/promises')
const PORT = 3000
 

const requestListener = async (req, res) => {
    let file;
    if (req.url ==='/home' || req.url === '/') {
    try {
         file = await fs.readFile("./routes/home.html")
       
        
    } catch (error) {
        res.writeHead(500)
        res.end(file)
    }
}
    else if (req.url ==='/about' ){
        try {
             file = await fs.readFile("./routes/about.html")
            
        } catch (error) {
            res.writeHead(500)
            res.end(file)
        }
    }
    else if (req.url ==='/contacts' ){
        try {
             file = await fs.readFile("./routes/contacts.html")
            
        } catch (error) {
            res.writeHead(500)
            res.end(file)
        }
    }
    else {
        try {
            file = await fs.readFile("./routes/404.html")
           
       } catch (error) {
           res.writeHead(500)
           res.end(file)
       }

    }


    console.log(file )
    res.setHeader("Content-Type", "text/html")
    res.writeHead(200)
    res.end(file)
}

const server = new http.Server(requestListener)

server.listen(PORT, (err) => {
    if (err){
        console.log(err)
        throw err;
    }
    console.log(`Server has started on http://localhost:${PORT}!`)
})