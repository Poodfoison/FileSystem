// index.js

const http = require('http');
const GCF = require('./my_modules/GCF');

const server = new http.createServer((req, res) => {
    res.status(200);
    res.end();
});

const PORT = 3000;



server.listen(PORT, err => {
    if(err) {
        console.log(err);
    } else  {
        console.log(`Server running at PORT ${PORT}`);
        GCF.GCF(15,20);
    }
});
