const express = require('express') 
const bodyParser = require('body-parser'); 
const app = express(); 
const PORT = 8000;
const fs = require('fs/promises');



const logger = (req, res, next) => {
    fs.appendFile('./log.txt' ,[`${req.ip} accessed ${req.url} with ${req.method} at ${new Date()} with status code ${res.statusCode} `])
    next()
}


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', logger, (req, res) => {
    res.send("Home");
});


app.get('/hello', logger, (req, res) => {
    res.send("Hello");
});

app.get('/not-okay', logger, (req, res) => {
    res.send("Not-okay");
});


app.get('/secret', logger, (req, res) => {
    res.status(403).end();
})

app.get('*', (req, res) => {
    res.status(404).send('Error 404 Page not found')
})


app.listen(PORT, () =>  
     console.log(`server started ${PORT}!`)
 );