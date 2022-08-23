const express = require('express') 
const bodyParser = require('body-parser'); 
const app = express(); 
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


let songs = [
    
    {
        id: 1,
        artist: 'sud',
        song: 'di makatulog'
    },
    {
        id: 2,
        artist: 'munimuni',
        song: 'kalachuchi'
    },
    {
        id: 3,
        artist: 'leanne and naara',
        song: 'never made it far'
    },
    {
        id: 4,
        artist: 'hey june!',
        song: 'panahon'
    },
    {
        id: 5,
        artist: 'zild',
        song: 'kyusi'
    }

]

app.get('/', (req, res) => {
    res.send("Home");
});

app.get('/search', (req, res) => { 
    res.json(songs); 
});

app.get('/search/:id', (req, res) => {
    console.log(req.params)
    res.json(songs[req.params.id])
})

app.get('/secret', (req, res) => {
    res.status(403).send('Error 404 Page not found')
})


app.listen(PORT, () =>  
     console.log(`server started ${PORT}!`)
 );